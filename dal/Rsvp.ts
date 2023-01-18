import { ObjectId } from "mongodb";
import { getDbClient } from "./DBClient";

export interface IRSVP {
  _id: ObjectId;
  rsvpId: string;
  attendees: { name: string; attending: boolean }[];
  noteToGuests: string | undefined;
  noteToCouple: string;
  repliedTo: boolean;
  created: boolean;
  inSpanish?: boolean;
}

export interface IAttendee {
  name: string;
  attending: boolean;
  rsvpId?: string;
}

export const getRsvpBySuppliedNumber = async (suppliedNumber: string) => {
  let response = null;
  const dbCLient = await getDbClient();
  const collection = dbCLient.db().collection("rsvp");
  const other = await collection.findOne({ rsvpId: suppliedNumber });
  if (!other) {
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
    attendees: { name: string; attending: boolean }[];
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
  await dbCLient
    .db()
    .collection("rsvp")
    .updateOne(filter, updateDocument);
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
  console.log("in here");
  const cursor = dbClient.db().collection("rsvp").find<IRSVP>({});

  const results: IAttendee[] = [];
  await cursor.forEach((x: IRSVP) => {
    results.push(...x.attendees.map((a) => ({ ...a, rsvpId: x.rsvpId })));
    return true;
  });
  console.log(results);
  const attendees = [];
  return results;
};
