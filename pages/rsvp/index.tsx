import { ErrorMessage, Field, Form, Formik } from "formik";
import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { Page } from "../../components/Page";
import { object, string, array } from "yup";
import axios, { AxiosResponse } from "axios";
import { IRSVP } from "../../dal/Rsvp";
import { Text } from "../../components/core/Text";
import { Seperator } from "../../components/core/Seperator";
import Link from "next/link";
import {
  textContentEnglish,
  textContentSpanish,
} from "../../components/textContent";
import { Button } from "../../components/core/Button";
import { SpinnerCircular } from "spinners-react";

const Event: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState<number>();
  const [windowWidth, setWindowWidth] = useState<number>();
  const [rsvp, setRsvp] = useState<IRSVP | null>(null);
  const [updateRsvp, setUpdateRsvp] = useState(false);
  const [shouldShowSpanish, setShouldShowSpanish] = useState(rsvp?.inSpanish);
  const [loading, setLoading] = useState(false);

  const textContent = shouldShowSpanish
    ? textContentSpanish
    : textContentEnglish;
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
        phoneNumber: string().max(
          10,
          "Must be a valid phone number (less than 10 digits, excluding country code)."
        ),
        showPhoneNumber: string(),
      })
    ),
    note: string().optional(),
  });

  const handleSubmit = async (values: any) => {
    setLoading(true);
    const id = values.rsvpId;
    const rsvp: AxiosResponse<IRSVP> = await axios.get(`/api/rsvp?id=${id}`);
    setLoading(false);
    setRsvp(rsvp.data);
    setShouldShowSpanish(rsvp.data.inSpanish);
  };

  const handleReplyRsvp = async (values: any) => {
    setLoading(true);
    const mapped = values.attendees.map((x: any) => ({
      ...x,
      attending: x.attending === "YES",
      phoneNumber: x.phoneNumber,
    }));
    const response: AxiosResponse<IRSVP> = await axios.patch(
      `/api/rsvp?id=${rsvp?.rsvpId}`,
      {
        note: values.note,
        attendees: mapped,
      }
    );
    setLoading(false);
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

  return (
    <Page
      title="Dan and Adriana 2023"
      description="Join us to celebrate the wedding of Adriana Davila and Dan Morton"
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
            {rsvp?._id && (
              <Button
                style={{ marginBottom: 10 }}
                onClick={() => setShouldShowSpanish((value) => !value)}
              >
                {shouldShowSpanish
                  ? "Translate to english"
                  : "Translate to spanish"}
              </Button>
            )}
            {!rsvp && (
              <Formik
                validationSchema={getRsvpSchema}
                onSubmit={handleSubmit}
                initialValues={{ rsvpId: "" }}
              >
                <Form>
                  <Text>{textContentEnglish.enterRsvpIdLabel}</Text>
                  <Seperator />
                  <Text style={{ marginBottom: 20 }}>
                    {textContentSpanish.enterRsvpIdLabel}
                  </Text>
                  <Text>
                    <strong>
                      {textContentEnglish.rsvpNumberLabel} (
                      {textContentSpanish.rsvpNumberLabel})
                    </strong>
                  </Text>
                  <Field
                    name="rsvpId"
                    as="input"
                    label="Enter rsvp number"
                    style={{ outline: "1px solid" }}
                  />
                  <hr style={{ marginTop: 10, marginBottom: 10 }} />
                  <Button type="submit">
                    <div className="flex">
                      {textContent.submit}
                      {loading && (
                          <SpinnerCircular style={{ width: 25, height: 25, color: 'blue', paddingLeft: 8 }} />
                          )}
                    </div>
                  </Button>
                </Form>
              </Formik>
            )}
            {rsvp?.noteToGuests && (
              <div
                className="p-4 mb-4"
                style={{
                  border: "3px solid rgba(135, 157, 186)",
                  borderColor: "rgba(135, 157, 186)",
                  boxShadow: "1px 2px rgba(135, 157, 186, 0.5)",
                  display: "flex",
                  alignContent: "center",
                }}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ marginTop: 3, marginRight: 10 }}
                >
                  mail
                </span>

                <Text>
                  <strong>{textContent.noteFromCoupleLabel}:</strong>{" "}
                  {rsvp.noteToGuests}
                </Text>
              </div>
            )}
            {((rsvp?.attendees && !rsvp.repliedTo) ||
              (rsvp?.repliedTo && updateRsvp)) && (
              <>
                <Formik
                  validationSchema={rsvpReplySchema}
                  onSubmit={handleReplyRsvp}
                  initialValues={initialResponseValues}
                >
                  <Form>
                    <Text style={{ marginBottom: 10 }}>
                      <strong>{textContent.pleaseReplyLabel}</strong>
                    </Text>
                    <Seperator />
                    {rsvp?.attendees?.map((x: any, i) => (
                      <>
                        <Text style={{ marginBottom: 5 }}>
                          <strong>{x.name}</strong>{" "}
                          {textContent.areYouAttending}?
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
                          <option value="YES">{textContent.yes}</option>
                          <option value="NO">{textContent.no}</option>
                        </Field>
                        <div>
                          <Text>
                            Enter phone number to recieve text updates about the
                            wedding (optional)
                          </Text>
                          <div className="flex">
                            <Text
                              style={{
                                marginTop: 10,
                                paddingRight: 8,
                                paddingTop: 2,
                                paddingLeft: 8,
                                outline: "1px solid black",
                                height: 34,
                              }}
                            >
                              +1
                            </Text>
                            <div>
                              <Field
                                name={`attendees[${i}].phoneNumber`}
                                as="input"
                                style={{
                                  outline: "1px solid black",
                                  padding: "5px 10px",
                                  marginTop: 10,
                                }}
                                key={i}
                                placeholder="Phone number..."
                                type="number"
                                me
                              />
                              <br />
                            </div>
                          </div>
                          <div style={{ color: "red" }}>
                            {" "}
                            <ErrorMessage
                              name={`attendees[${i}].phoneNumber`}
                            />
                          </div>
                        </div>
                        {i !== rsvp.attendees.length - 1 && <Seperator />}
                      </>
                    ))}

                    <Text style={{ marginTop: 10 }}>
                      <strong>{textContent.noteToCoupleLabel}</strong>
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
                      placeholder="Enter note..."
                      errorText="test"
                    />
                    <hr style={{ marginTop: 10, marginBottom: 10 }} />
                    <button
                      type="submit"
                      style={{ border: "1px solid black", padding: "5px 10px" }}
                    >
                      <div className="flex">
                        {textContent.submit}
                        {loading && (
                          <SpinnerCircular style={{ width: 25, height: 25, color: 'blue', paddingLeft: 8 }} />
                          )}
                      </div>
                    </button>
                  </Form>
                </Formik>
              </>
            )}
            {rsvp?.attendees && rsvp.repliedTo && !updateRsvp && (
              <>
                <Text style={{ marginBottom: 10 }}>
                  <strong>{textContent.thankyouForReplyingLabel}</strong>
                </Text>
                <Seperator />
                {rsvp.attendees?.map((x: any, i) => (
                  <>
                    <Text style={{ marginBottom: 10 }}>
                      <strong>{x.name}</strong>{" "}
                      {textContent.thankyouForForReplyingText}{" "}
                      <strong>
                        {x.attending ? textContent.yes : textContent.no}
                      </strong>
                    </Text>
                  </>
                ))}
                <Text style={{ marginBottom: 10 }}>
                  <strong>{textContent.noteToCoupleLabel}: </strong>
                  {rsvp.noteToCouple || textContent.none}
                </Text>
                <button
                  style={{
                    border: "1px solid black",
                    padding: "5px 10px",
                    marginBottom: 10,
                  }}
                  onClick={() => setUpdateRsvp(true)}
                >
                  {textContent.updateRsvpLabel}
                </button>
                <br />
                <Link href="/">
                  <button
                    style={{
                      border: "1px solid black",
                      padding: "5px 10px",
                      marginBottom: 10,
                      marginRight: 10,
                    }}
                  >
                    {textContent.continueToWebsite}
                  </button>
                </Link>
              </>
            )}
            {rsvp && !rsvp.attendees && <Text>{textContent.errorText}</Text>}
          </div>
        </div>
        <Text style={{ marginBottom: 25, marginTop: 25 }}>
          {textContent.issuesText}
        </Text>
      </div>
    </Page>
  );
};

export default Event;
