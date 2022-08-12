/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { useState } from "react";

const Event: NextPage = () => {
  return (
    <div id="outer">
      <Head>
        <title>Dan and Adriana 2023</title>
        <meta
          name="description"
          content="Celebration of Dan and Adriana's engagement."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="p-8 bg-stone-300 h-screen overflow-y-scroll"
        id="page-wrap"
      >
        <h1
          className="text-8xl text-center h-30 pb-2 text-ease-in"
          style={{ fontFamily: `\'Dancing Script\', cursive` }}
        >
          Event details
        </h1>
        <p className="text-3xl pt-2 pb-3 text-ease-in">May 6th, 2022</p>
        <hr className="pb-3" />
        <div>
          <div className="bg-stone-200 mb-5 p-2" style={{ borderRadius: 10 }}>
            <p className="text-lg">
              On May 6th, Dan and Adriana will marry in downtown Chicago. The
              ceremony is closed to immediate family members.
            </p>
            <br />
            <p className="text-lg pb-4">
              Following the ceremony, we are hosting a celebratory dinner with
              our extended family at Marshalls landing, on the second floor of
              the merchandise mart.
            </p>
            <p className="text-lg">
              <strong>Time:</strong> TBD
            </p>
            <p className="text-lg pb-4">
              <strong>Adress:</strong> 222 W Mechandise Mart Plaza, Chicago, IL
              60654
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2014836402536!2d-87.63764214868192!3d41.88852377263818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb6fa882381%3A0xfaa5a9fdf89cd480!2sMarshall&#39;s%20Landing!5e0!3m2!1sen!2sus!4v1658197515598!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0, marginBottom: 10 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-3xl pt-2 pb-3 text-ease-in">May 7th, 2022</p>
        <hr className="pb-3" />
        <div>
          <div className="bg-stone-200 mb-2 p-2" style={{ borderRadius: 10 }}>
            <p className="text-lg">
              On May 7th, Dan and Adriana will marry in downtown Chicago. The
              ceremony is closed to immediate family members.
            </p>
            <br />
            <p className="text-lg pb-4">
              Following the ceremony, we are hosting a celebratory dinner with
              our extended family at Marshalls landing, on the second floor of
              the Merchandise Mart.
            </p>
            <p className="text-lg">
              <strong>Time:</strong> TBD
            </p>
            <p className="text-lg pb-4">
              <strong>Adress:</strong> 222 W Mechandise Mart Plaza, Chicago, IL
              60654
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2014836402536!2d-87.63764214868192!3d41.88852377263818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb6fa882381%3A0xfaa5a9fdf89cd480!2sMarshall&#39;s%20Landing!5e0!3m2!1sen!2sus!4v1658197515598!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0, marginBottom: 10 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-3xl pt-2 pb-3 text-ease-in">May 11th - 14th, 2022</p>
        <hr className="pb-3" />
        <div>
          <div className="bg-stone-200 mb-5 p-2" style={{ borderRadius: 10 }}>
            <p className="text-lg">
              On May 6th, Dan and Adriana will marry in downtown Chicago. The
              ceremony is closed to immediate family members.
            </p>
            <br />
            <p className="text-lg pb-4">
              Following the ceremony, we are hosting a celebratory dinner with
              our extended family at Marhsalls landing, on the second floor of
              the merchandise mart.
            </p>
            <p className="text-lg">
              <strong>Time:</strong> TBD
            </p>
            <p className="text-lg pb-4">
              <strong>Adress:</strong> 222 W Mechandise Mart Plaza, Chicago, IL
              60654
            </p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.2014836402536!2d-87.63764214868192!3d41.88852377263818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cb6fa882381%3A0xfaa5a9fdf89cd480!2sMarshall&#39;s%20Landing!5e0!3m2!1sen!2sus!4v1658197515598!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0, marginBottom: 10 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Event;
