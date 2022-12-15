import type { NextApiRequest, NextApiResponse } from "next";
import { getRsvpBySuppliedNumber } from "../../dal/Rsvp";

export default async function rsvpHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    body,
    method,
  } = req;

  switch (method) {
    case "GET":
      const result = await getRsvpBySuppliedNumber(id as string);
      // Get data from your database
      res.status(200).json(result);
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
