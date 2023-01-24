import { ObjectId } from "mongodb";
import { getDbClient } from "./DBClient";
import {
  sendMessageToAdriana,
  sendMessageToDan,
  sendMessageToRecipient,
} from "./Twilio";

export interface IAttendee {
  name: string;
  attending: boolean;
  rsvpId?: string;
  phoneNumber?: string;
}

export interface IRSVP {
  _id: ObjectId;
  rsvpId: string;
  attendees: IAttendee[];
  noteToGuests: string | undefined;
  noteToCouple: string;
  repliedTo: boolean;
  created: boolean;
  inSpanish?: boolean;
}

export const getRsvpBySuppliedNumber = async (
  suppliedNumber: string,
  shouldGenerate?: boolean
) => {
  let response = null;
  const dbCLient = await getDbClient();
  const collection = dbCLient.db().collection("rsvp");
  const other = await collection.findOne({ rsvpId: suppliedNumber });
  if (shouldGenerate && !other) {
    response = await collection.insertOne({
      rsvpId: suppliedNumber,
    } as IRSVP);
    return await collection.findOne({ rsvpId: suppliedNumber });
  }
  await dbCLient.close();
  return other;
};

export const updateRsvp = async (
  id: string,
  body: {
    attendees: { name: string; attending: boolean; phoneNumber: string }[];
    note: string | undefined;
  }
) => {
  const dbCLient = await getDbClient();
  const filter = { rsvpId: id };
  const updateDocument = {
    $set: {
      attendees: body.attendees,
      noteToCouple: body.note,
      repliedTo: true,
    },
  };
  await dbCLient.db().collection("rsvp").updateOne(filter, updateDocument);
  const attendessString = body.attendees.map(
    (x) => `${x.name} is ${x.attending ? "ATTENDING" : "NOT ATTENDING\n"}`
  );
  sendMessageToDan(`🥵RSVP updated🥵\n${attendessString}`);
  sendMessageToAdriana(`🥵RSVP updated🥵\n${attendessString}`);
  body.attendees.forEach(async (x) => {
    if (x.attending && x.phoneNumber) {
      await sendMessageToRecipient(
        "💙 Thank you for RSVP'ing yes to Adriana and Dan's wedding!",
        x.phoneNumber
      );
      await sendMessageToRecipient(
        "✨ To view information about the reception, ceremony, and group hotel rates, please visit https://dam2023.com/event",
        x.phoneNumber
      );
      await sendMessageToRecipient(
        "✍️ To update your RSVP please visit https://dam2023.com/rsvp",
        x.phoneNumber
      );
    }
  });

  await dbCLient.close();
  return getRsvpBySuppliedNumber(id);
};

export const populateRSVPData = async (
  id: string,
  body: {
    attendees: string[];
    noteToGuests: string | undefined;
    inSpanish?: boolean;
  }
) => {
  const dbCLient = await getDbClient();
  const filter = { rsvpId: id };
  const updateDocument = {
    $set: {
      attendees: body.attendees.map((x: string) => ({
        name: x,
        attending: false,
      })),
      noteToGuests: body.noteToGuests,
      created: true,
      inSpanish: body.inSpanish,
    },
  };
  const result = await dbCLient
    .db()
    .collection("rsvp")
    .updateOne(filter, updateDocument);
  await dbCLient.close();
  return getRsvpBySuppliedNumber(id);
};

export const getAllAttendeeData = async () => {
  const dbClient = await getDbClient();
  const cursor = dbClient.db().collection("rsvp").find<IRSVP>({});

  const results: IAttendee[] = [];
  await cursor.forEach((x: IRSVP) => {
    results.push(...x.attendees.map((a) => ({ ...a, rsvpId: x.rsvpId })));
    return true;
  });
  dbClient.close();
  return results;
};
