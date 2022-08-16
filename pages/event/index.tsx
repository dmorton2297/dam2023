/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Page } from "../../components/Page";

const TextBlob: React.FC<{ children: React.ReactNode | React.ReactNode[] }> = ({
  children,
}) => (
  <div
    className="p-3 m-2 bg-stone-300 font-sans border-r"
    style={{ borderRadius: 8 }}
  >
    {children}
  </div>
);

const Event: NextPage = () => {
  const [windowHeight, setWindowHeight] = useState<number>();
  const [windowWidth, setWindowWidth] = useState<number>();
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
  }, []);
  if (!windowWidth || windowHeight)
  return (
    <Page
      title="Dan and Adriana 2023"
      description="Details on our upcoming wedding"
    >
      <div className="bg-stone-500 overflow-scroll" style={{ height: windowHeight }}>
        <div
          className="h-80 flex justify-end"
          style={{
            background: "url(6.jpeg)",
            backgroundSize: "contain",
            backgroundPositionY: 100,
            backgroundRepeat: "no-repeat",
          }}
        >
          <h1 className="font-serif text-5xl pr-3 pt-7 text-white">
            The Wedding
          </h1>
        </div>
        <h2 className="font-serif text-3xl pr-3 pt-7 text-white text-center bg-stone-700 pt-0">
          May 13th, 2022
        </h2>
        <TextBlob>
          <span>
            After some anticipation, <strong>We are tying the knot!</strong>
            <br />
            <br />
            We are move than excited to share this day with our friends and
            families.
          </span>
        </TextBlob>
        <TextBlob>
          <span>
            <strong className="font-serif text-2xl">The Venue</strong>
            <br />
            Carnivale Restaurant - West loop
          </span>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2735811882367!2d-87.6481967845586!3d41.886973079221484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ccf9f3efab9%3A0x56ba0879346f24f!2sCarnivale!5e0!3m2!1sen!2sus!4v1660619113928!5m2!1sen!2sus"
            height="450"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </TextBlob>
        <TextBlob>
          <strong className="font-serif text-2xl">Attire</strong>
          <br />
          Semi-formal attire. Men may wear suits, but feel free to wear
          something more casual.
        </TextBlob>
        <TextBlob>
          <strong className="font-serif text-2xl">Hotels</strong>
          <br />
          <strong>Hyatt House Chicago / West Loop-Fulton Market</strong>
          <br />
          The hyatt offers reasonable room rates, and is within walking distance to the wedding venue.
          There are tons of great food options in the area for guests looking to extend their stay in chicago.
          <br />
          <br />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.4439395816426!2d-87.65745288411364!3d41.883308779221764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2d5de4f15119%3A0x243dc748b43a4cea!2sHyatt%20House%20Chicago%20%2F%20West%20Loop-Fulton%20Market!5e0!3m2!1sen!2sus!4v1660619817600!5m2!1sen!2sus"
            height="450"
            width="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </TextBlob>
        <TextBlob>
          <strong className="font-serif text-2xl">RSVP</strong>
          <br />
          RSVP details to come
        </TextBlob>
      </div>
    </Page>
  );
};

export default Event;
