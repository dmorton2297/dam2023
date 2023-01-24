import { Twilio } from "twilio";

export const sendMessageToDan = (body: string) => {
  const client = new Twilio(
    `${process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID}`,
    `${process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN}`
  );
  client.messages
    .create({
      to: "+18474011326",
      from: '+16672268910',
      body
    })
    .catch((e) => console.error(e))
    .finally();
};

export const sendMessageToAdriana = (body: string) => {
  const client = new Twilio(
    `${process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID}`,
    `${process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN}`
  );
  client.messages
    .create({
      to: "+18475291900",
      from: '+16672268910',
      body
    })
    .catch((e) => console.error(e))
    .finally();
};

export const sendMessageToRecipient = (body: string, number: string) => {
  const client = new Twilio(
    `${process.env.NEXT_PUBLIC_TWILIO_ACCOUNT_SID}`,
    `${process.env.NEXT_PUBLIC_TWILIO_AUTH_TOKEN}`
  );
  return client.messages
    .create({
      to: `+1${number}`,
      from: '+16672268910',
      body
    })
    .catch((e) => console.error(e))
    .finally();
};
