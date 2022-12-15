import { ObjectId } from "mongodb";
import { getDbClient } from "./DBClient";

export enum ResponseEnum {
  ACCEPT = "ACCEPT",
  DECLINE = "DECLINE",
  NO_RESPONSE = "NO_RESPONSE",
}

export interface IRSVP {
  _id: ObjectId;
  rsvpId: string;
  response: ResponseEnum;
  note: string | null;
}

export const getRsvpBySuppliedNumber = async (suppliedNumber: string) => {
  let response = null;
  const dbCLient = await getDbClient();
  const collection = dbCLient.db().collection("rsvp");
  const other = await collection.findOne({ rsvpId: suppliedNumber });
  if (!other) {
    response = await collection.insertOne({
      rsvpId: suppliedNumber,
      response: ResponseEnum.NO_RESPONSE,
      note: null,
    } as IRSVP);
    return await collection.findOne({ rsvpId: suppliedNumber });
  }
  await dbCLient.close();
  return other;
};

export const updateRsvp = async (
  id: string,
  response: ResponseEnum,
  note: string
) => {
  const dbCLient = await getDbClient();
  const filter = { _id: id };
  const updateDocument = {
    $set: {
      response,
      note,
    },
  };
  const result = await dbCLient
    .db()
    .collection("rsvp")
    .updateOne(filter, updateDocument);
  await dbCLient.close();
  return result;
};
