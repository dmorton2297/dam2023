import Link from "next/link";

export const TheWedding: React.FC = () => {
  const content = `
  We have decided to keep our wedding ceremony small and intimate.
  On July 6th, we will get married at a small ceremony with our immediate families, then host a dinner here in Chicago for our extended families to come celebrate. The following day on June 7th, we will host a bbq for a family to join at Dan's parents house.`;

  const split = content.split("\n");
  return (
    <>
      <p className="text-5xl font-serif">Our Wedding</p>
      {split.map((chunk) => (
        <>
          <p className="text-lg">{chunk}</p>
          <br />
        </>
      ))}
      <div className="flex">
        <div className="blob" style={{ flexGrow: 1 }}>
          <p className="text-lg">Dinner</p>
          <p>
            <strong>Time</strong>: 6:00 PM
          </p>
          <p>
            <strong>Location</strong> Marshalls Landing, 17 Wynstone Way, North
            Barrington, IL 60010
          </p>
          <Link href="/">RSVP</Link>
        </div>
        <div className="blob" style={{ flexGrow: 1 }}>
          <p className="text-lg">Day after BBQ</p>
          <p>
            <strong>Time</strong>: 6:00 PM
          </p>
          <p>
            <strong>Location</strong> Marshalls Landing, 17 Wynstone Way, North
            Barrington, IL 60010
          </p>
          <Link href="/">RSVP</Link>
        </div>
      </div>
      <div className="flex">
        <div className="blob" style={{ background: "transparent", flexGrow: 1, padding: 0 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2014836402536!2d-87.63764214868192!3d41.88852377263818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb6fa882381%3A0xfaa5a9fdf89cd480!2sMarshall&#39;s%20Landing!5e0!3m2!1sen!2sus!4v1658197515598!5m2!1sen!2sus"
            width="100%"
            height="300px"
            style={{ border: 0, marginBottom: 10 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="blob" style={{ background: "transparent", flexGrow: 1, padding: 0 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2014836402536!2d-87.63764214868192!3d41.88852377263818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb6fa882381%3A0xfaa5a9fdf89cd480!2sMarshall&#39;s%20Landing!5e0!3m2!1sen!2sus!4v1658197515598!5m2!1sen!2sus"
            width="100%"
            height="300px"
            style={{ border: 0, marginBottom: 10 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};
