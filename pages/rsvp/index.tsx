import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Page } from "../../components/Page";
import {object, string, array } from "yup";
import axios, { AxiosResponse } from "axios";
import { IRSVP } from "../../dal/Rsvp";
import { Text } from "../../components/core/Text";
import { Seperator } from "../../components/core/Seperator";

const Event: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState<number>();
  const [windowWidth, setWindowWidth] = useState<number>();
  const [rsvp, setRsvp] = useState<IRSVP | null>(null);
  const [updateRsvp, setUpdateRsvp] = useState(false);
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const getRsvpSchema = object({
    rsvpId: string().required(),
  });

  const rsvpReplySchema = object({
    attendees: array(
      object({
        name: string(),
        attending: string(),
      })
    ),
    note: string().optional(),
  });

  const handleSubmit = async (values: any) => {
    const id = values.rsvpId;
    const rsvp: AxiosResponse<IRSVP> = await axios.get(`/api/rsvp?id=${id}`);
    setRsvp(rsvp.data);
  };

  const handleReplyRsvp = async (values: any) => {
    console.log(values.note);
    const mapped = values.attendees.map((x: any) => ({
      ...x,
      attending: x.attending === "YES",
    }));
    const response: AxiosResponse<IRSVP> = await axios.patch(
      `/api/rsvp?id=${rsvp?.rsvpId}`,
      {
        note: values.note,
        attendees: mapped,
      }
    );
    setRsvp(response.data);
    setUpdateRsvp(false);
  };

  if (!windowWidth || !windowHeight) return <></>;

  const initialResponseValues = {
    note: rsvp?.noteToCouple,
    attendees: rsvp?.attendees?.map((x: any) => ({
      ...x,
      attending: x.attending ? "YES" : "NO",
    })),
  };

  console.log(initialResponseValues);
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
                    Please enter the number labeled as RSVP number. This number
                    is located on the invite, below the QR code.
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
                    Retrieve RSVP
                  </button>
                </Form>
              </Formik>
            )}
            {rsvp?.noteToGuests && (
              <div
                className="p-4 mb-4"
                style={{
                  backgroundColor: "rgba(135, 157, 186)",
                  color: "white",
                }}
              >
                <Text>
                  <strong>Note from couple:</strong> {rsvp.noteToGuests}
                </Text>
              </div>
            )}

            {((rsvp?.attendees && !rsvp.repliedTo) ||
              (rsvp?.repliedTo && updateRsvp)) && (
                <Formik
                  validationSchema={rsvpReplySchema}
                  onSubmit={handleReplyRsvp}
                  initialValues={initialResponseValues}
                >
                  <Form>
                    <Text style={{ marginBottom: 10 }}>
                      <strong>Please reply to the RSVP below</strong>
                    </Text>
                    <Seperator />
                    {rsvp?.attendees?.map((x: any, i) => (
                      <>
                        <Text style={{ marginBottom: 5 }}>
                          <strong>{x.name}</strong> are you attending?
                        </Text>
                        <Field
                          name={`attendees[${i}].attending`}
                          as="select"
                          style={{
                            outline: "1px solid black",
                            padding: "5px 10px",
                            marginBottom: 10,
                          }}
                          key={i}
                        >
                          <option value="YES">Yes</option>
                          <option value="NO">No</option>
                        </Field>
                      </>
                    ))}

                    <Text style={{ marginTop: 10 }}>
                      <strong>Note to couple</strong>
                    </Text>
                    <Field
                      name="note"
                      as="textarea"
                      label="Note to couple"
                      style={{
                        outline: "1px solid",
                        width: "100%",
                        padding: 10,
                      }}
                    />
                    <hr style={{ marginTop: 10, marginBottom: 10 }} />
                    <button
                      type="submit"
                      style={{ border: "1px solid black", padding: "5px 10px" }}
                    >
                      Submit RSVP
                    </button>
                    <Text>
                      Issues? Reach out to Dan at dmorton2297@gmail.com
                    </Text>
                  </Form>
                </Formik>
              )}
            {rsvp?.attendees && rsvp.repliedTo && !updateRsvp && (
              <>
                <Text style={{ marginBottom: 10 }}>
                  <strong>Thank you for replying!</strong>
                </Text>
                <Seperator />
                {rsvp.attendees?.map((x: any, i) => (
                  <>
                    <Text style={{ marginBottom: 10 }}>
                      <strong>{x.name}</strong> thank you for replying{" "}
                      <strong>{x.attending ? "YES" : "NO"}</strong>
                    </Text>
                  </>
                ))}
                <Text style={{ marginBottom: 10 }}><strong>Note to couple: </strong>{rsvp.noteToCouple || 'NONE'}</Text>
                <button
                  style={{
                    border: "1px solid black",
                    padding: "5px 10px",
                    marginBottom: 10,
                  }}
                  onClick={() => setUpdateRsvp(true)}
                >
                  Update RSVP
                </button>
                <Text>Issues? Reach out to Dan at dmorton2297@gmail.com</Text>
              </>
            )}
            {rsvp && !rsvp.attendees && (
              <Text>
                Error: RSVP not found. Contact <strong>Dan</strong> at
                dmorton2297@gmail.com and let him know about this issue.
              </Text>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Event;
