/* eslint-disable @next/next/no-img-element */
import { Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Page } from "../../components/Page";
import { number, boolean, object, string } from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { IRSVP } from "../../dal/Rsvp";

const Event: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState<number>();
  const [windowWidth, setWindowWidth] = useState<number>();
  const [rsvp, setRsvp] = useState<IRSVP | null>(null);
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
    attending: string().required(),
    note: string().optional(),
    numberAttending: number().required(),
  });

  const handleSubmit = async (values: any) => {
    const id = values.rsvpId;
    const rsvp: IRSVP = await axios.get(`/api/rsvp?id=${id}`);
    setRsvp(rsvp);
  };

  const handleReplyRsvp = async (values: any) => {
    console.log(values);
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
                  <p>
                    Please enter the number labeled as RSVP number. This number
                    is located on the invite, below the QR code.
                  </p>
                  <p>
                    <strong>RSVP Number</strong>
                  </p>
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
            {rsvp && (
              <Formik
                validationSchema={rsvpReplySchema}
                onSubmit={handleReplyRsvp}
                initialValues={{ attending: false, note: "", attendees: [] }}
              >
                <Form>
                  <p style={{ marginBottom: 10 }}>
                    Please reply to the RSVP below
                  </p>
                  <p>
                    <strong>Are you attending?</strong>
                  </p>
                  <Field
                    name="attending"
                    as="select"
                    style={{ outline: "1px solid black", padding: "5px 10px" }}
                  >
                    <option value="Yes">Yes</option>
                    <option value="NO">No</option>
                  </Field>
                  <p style={{ marginTop: 10 }}>
                    <strong>Note to couple</strong>
                  </p>
                  <Field
                    name="note"
                    as="textarea"
                    label="Enter rsvp number"
                    style={{ outline: "1px solid", width: '100%' }}
                  />
                  <p style={{ marginTop: 10 }}>
                    <strong>Number of guests</strong>
                  </p>

                  <Field
                    name="note"
                    as="input"
                    type="number"
                    label="Enter rsvp number"
                    style={{ outline: "1px solid" }}
                  />
                  <hr style={{ marginTop: 10, marginBottom: 10 }} />
                  <button
                    type="submit"
                    style={{ border: "1px solid black", padding: "5px 10px" }}
                  >
                    Submit RSVP
                  </button>
                </Form>
              </Formik>
            )}
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Event;
