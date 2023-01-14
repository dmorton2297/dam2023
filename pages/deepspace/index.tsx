/* eslint-disable @next/next/no-img-element */
import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Page } from "../../components/Page";
import { object, string, array } from "yup";
import axios, { AxiosResponse } from "axios";
import { IAttendee, IRSVP } from "../../dal/Rsvp";
import { AtendeeFormControl } from "../../components/attendeeFormControl";
import { Seperator } from "../../components/core/Seperator";
import { Text } from "../../components/core/Text";
import { Header } from "../../components/core/Header";
import { Button } from "../../components/core/Button";

const Event: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState<number>();
  const [windowWidth, setWindowWidth] = useState<number>();
  const [rsvp, setRsvp] = useState<IRSVP | null>(null);
  const [attendees, setAttendees] = useState<IAttendee[] | undefined>(
    undefined
  );
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (!attendees) {
      axios.get("/api/rsvp").then((res) => {
        setAttendees(res.data);
      });
    }
  });

  const getRsvpSchema = object({
    rsvpId: string().required(),
  });

  const rsvpReplySchema = object({
    attendees: array(),
    noteToGuests: string().optional(),
  });

  const handleSubmit = async (values: any) => {
    const id = values.rsvpId;
    const rsvp: AxiosResponse<IRSVP> = await axios.get(`/api/rsvp?id=${id}`);
    setRsvp(rsvp.data);
  };

  const handleCreateRsvp = async (values: {
    attendees: (string | undefined)[];
    noteToGuests: string | undefined;
  }) => {
    const payload = {
      attendees: values.attendees.filter(
        (x: string | undefined) => x !== undefined && x !== ""
      ),
      noteToGuests: values.noteToGuests,
    };

    const response: AxiosResponse<IRSVP> = await axios.post(
      `/api/rsvp?id=${rsvp?.rsvpId}`,
      payload
    );
    setRsvp(response.data);
  };

  if (!windowWidth || !windowHeight) return <></>;
  return (
    <Page
      title="Dan and Adriana 2023"
      description="Details on our upcoming wedding"
    >
      <div
        style={{
          height: windowHeight,
          textAlign: "center",
          overflowY: "scroll",
        }}
        className="bg-white flex-col"
      >
        <p className="font-serif text-6xl py-4 my-4">
          Dan &<br /> Adriana
        </p>
        <hr />
        <div className="flex justify-center">
          <div
            style={{
              width: 600,
              justifyContent: "flex-start",
              textAlign: "left",
              padding: 10,
            }}
          >
            {!rsvp && (
              <Formik
                validationSchema={getRsvpSchema}
                onSubmit={handleSubmit}
                initialValues={{ rsvpId: "" }}
              >
                <Form>
                  <Text>
                    Enter an ID that you would like to use for a particular
                    RSVP:
                  </Text>
                  <Text>
                    <strong>RSVP Number</strong>
                  </Text>
                  <Field
                    name="rsvpId"
                    as="input"
                    label="Enter rsvp number"
                    style={{ outline: "1px solid" }}
                  />
                  <hr style={{ marginTop: 10, marginBottom: 10 }} />
                  <button
                    type="submit"
                    style={{ border: "1px solid black", padding: "5px 10px" }}
                  >
                    Generate RSVP
                  </button>
                </Form>
              </Formik>
            )}
            {rsvp && !rsvp.created && (
              <Formik
                validationSchema={rsvpReplySchema}
                onSubmit={handleCreateRsvp}
                initialValues={{ noteToGuests: undefined, attendees: [""] }}
              >
                <Form>
                  <Text style={{ marginBottom: 10 }}>
                    Please add information about the RSVP
                  </Text>
                  <AtendeeFormControl name="attendees" />
                  <Text style={{ marginBottom: 10 }}>
                    Note to guests (optional)
                  </Text>
                  <Field
                    name="noteToGuests"
                    as="textarea"
                    style={{ outline: "1px solid", width: 300 }}
                  />
                  <Seperator />
                  <button
                    type="submit"
                    style={{ border: "1px solid black", padding: "5px 10px", marginBottom: 10 }}
                  >
                    Submit RSVP
                  </button>
                </Form>
              </Formik>
            )}
            {rsvp && rsvp.created && (
              <>
                <Header>Rsvp Created.</Header>
                <Seperator />
                {rsvp?.attendees.map((a, i) => (
                  <Text key={i}>
                    <strong>{a.name}</strong> is{" "}
                    <strong>
                      {a.attending ? "ATTENDING" : "NOT ATTENDING"}
                    </strong>
                  </Text>
                ))}
                <Text>
                  <strong>Note to the attendees:</strong>{" "}
                  {rsvp.noteToGuests || "None"}
                </Text>
              </>
            )}
          </div>
        </div>
        {!rsvp && (
          <>
            <Seperator />
            <Header>Attendees</Header>
            <Button
              style={{
                border: "1px solid black",
                padding: "5px 10px",
                marginBottom: 20,
              }}
              onClick={() => {
                const headers = ["Name", "Attending", "RSVP ID"];
                const data =
                  attendees?.map((x) => [x.name, x.attending, x.rsvpId]) || [];
                let csvContent = "data:text/csv;charset=utf-8,";
                [headers, ...data].forEach((d) => {
                  let row = d.join(",");
                  csvContent += row + "\r\n";
                });
                const encodedUri = encodeURI(csvContent);
                window.open(encodedUri);
              }}
            >
              Export all attendees
            </Button>
            {attendees?.map((a) => (
              <div key={a.name}>
                <Text style={{ marginLeft: 10 }}>
                  <strong>{a.name}</strong> is{" "}
                  <strong>{a.attending ? "ATTENDING" : "NOT ATTENDING"}</strong>{" "}
                  (RSVP ID: {a.rsvpId})
                </Text>
              </div>
            ))}
          </>
        )}
      </div>
    </Page>
  );
};

export default Event;
