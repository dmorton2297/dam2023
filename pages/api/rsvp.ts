import type { NextApiRequest, NextApiResponse } from "next";
import { getAllAttendeeData, getRsvpBySuppliedNumber, populateRSVPData, updateRsvp } from "../../dal/Rsvp";

export default async function rsvpHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    body,
    method,
  } = req;

  switch (method) {
    case "GET":
      if (!id) {
        const getResult = await getAllAttendeeData();
        res.status(200).json(getResult);
        break;
      }
      const getResult = await getRsvpBySuppliedNumber(id as string);
      // Get data from your database
      res.status(200).json(getResult);
      break;
    case "POST":
      const populateResult = await populateRSVPData(id as string, body);
      res.status(200).json(populateResult);
      break;
    case "PATCH":
      const respondResult = await updateRsvp(id as string, body);
      res.status(200).json(respondResult);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
