import { MongoClient } from "mongodb";

export const getDbClient = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://deepspace:nfT5KNSHnsPbSnhd@rsvp-cluster.kkf5flv.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
};
