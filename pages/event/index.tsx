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

  if (!windowWidth || !windowHeight) return <></>;
  console.log(windowHeight);
  return (
    <Page title="Dan and Adriana" description="Details on our upcoming wedding">
      <div className="flex justify-center">
        <div
          style={{
            height: windowHeight,
            textAlign: "center",
            overflowY: "scroll",
          }}
          className="bg-white flex-col"
        >
          <p className="font-serif text-6xl px-10 py-4">Dan & Adriana</p>
          <hr />
          <p className="font-serif text-5xl pb-6 pt-4">May 13th 2023</p>
          <div className="p-8 bg-stone-100" style={{ position: "sticky" }}>
            <p className="text-2xl">
              Come join us to celebrate the marrige of Dan & Adriana this
              upcoming sprint.{" "}
            </p>
          </div>
          <div className="py-4 flex justify-center">
            <div>
              <p className="font-serif text-4xl pb-3">Wedding Details</p>

              <div className="p-10 pt-3 mt-4 bg-stone-100">
                <p className="font-serif text-4xl pb-3">Church</p>
                <p className="text-2xl pb-3">
                  Fourth Presbyterian Church, Chicago, IL
                </p>
                <img
                  src="fourth.jpeg"
                  style={{ width: 1200, height: 600, objectFit: "cover" }}
                  className="pb-4"
                />
                <p className="text-xl pb-3" style={{ textAlign: "left" }}>
                  <strong>Ceremony</strong>: 4:30pm - 5:45pm
                </p>
                <p className="text-xl pb-3" style={{ textAlign: "left" }}>
                  <strong>Parking</strong>: There are a number of paid parking
                  lots and street parking spots near the church,
                  <br /> we encourage guests to plan ahead and carpool with
                  family members to make parking easy. <br /> You can reserve
                  spots via SportHero to revieve the best rates.
                </p>
                <p className="text-xl pb-3" style={{ textAlign: "left" }}>
                  <strong>Arriving</strong>: Guests can entrance via the main
                  sancuatuary doors on Michigan Avenue.
                </p>
                <p className="text-xl pb-3" style={{ textAlign: "left" }}>
                  <strong>Etiquette</strong>: We kindly asks guests to refrain
                  from using their phones and using any cameras during the
                  cermony.
                </p>
              </div>
              <div className="p-10 pt-3 mt-4 bg-stone-100">
                <p className="font-serif text-4xl pb-3">Venue</p>
                <p className="text-2xl pb-3">
                  Carnivale, Chicago, Presbyterian IL
                </p>
                <img
                  src="carnivale.jpeg"
                  style={{ width: 1200, height: 600, objectFit: "cover" }}
                  className="pb-4"
                />
                <p className="text-xl pb-3" style={{ textAlign: "left" }}>
                  <strong>Cocktail Hour</strong>: 6:00pm - 7:00pm
                  <br />
                  Cocktail hour will start promptly after the ceremony. Guests
                  can arrive any time during cocktail, with dinner starting
                  promptly at 7pm
                </p>
                <p className="text-xl pb-3" style={{ textAlign: "left" }}>
                  <strong>Parking</strong>: We encourage guests to plan ahead and carpool with
                  family members to make parking easy. <br /> You can reserve
                  spots via SportHero to revieve the best rates.
                </p>
                <p className="text-xl pb-3" style={{ textAlign: "left" }}>
                  <strong>Arriving</strong>: There will be signs directing guests, the reception is on the second floor of the restraunt.
                </p>
                <p className="text-xl pb-3" style={{ textAlign: "left" }}>
                  <strong>Bar</strong>: There will be a full bar, it is encouraned to bring cash to tip the bar tenders.
                </p>
                <p className="text-xl pb-3" style={{ textAlign: "left" }}>
                  <strong>Food</strong>: Buffet style food will be served with including vegetarian options.
                </p>
                <p className="text-xl pb-3" style={{ textAlign: "left" }}>
                  <strong>Etiquette</strong>: We kindly asks guests to refrain
                  from using their phones and using any cameras during the
                  cermony.
                </p>
              </div>
              <div className="p-10 pt-3 mt-4 mb-4 bg-stone-100">
                <p className="font-serif text-4xl pb-3">Hotels</p>
                <ul>
                  <li>
                    <a
                      href="https://www.hilton.com/en/hotels/chiwxhx-hampton-chicago-downtown-west-loop/?SEO_id=GMB-AMER-HX-CHIWXHX&y_source=1_MzgxMDg4OC03MTUtbG9jYXRpb24ud2Vic2l0ZQ=="
                      className="text-2xl pb-3 underline text-blue-500"
                    >
                      Hampton Inn Chicago Downtown West Loop
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.hyatt.com/en-US/hotel/illinois/hyatt-house-chicago-west-loop-fulton-market/chixl?src=corp_lclb_gmb_seo_chixl"
                      className="text-2xl pb-3 underline text-blue-500"
                    >
                      Hyatt House Chicago / West Loop-Fulton Market
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://thehoxton.com/chicago/?utm_source=google&utm_medium=local&utm_campaign=hotel-thehoxtonchicago"
                      className="text-2xl pb-3 underline text-blue-500"
                    >
                      The Hoxton
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.marriott.com/en-us/hotels/chimm-courtyard-chicago-downtown-magnificent-mile/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                      className="text-2xl pb-3 underline text-blue-500"
                    >
                      Courtyard by Marriott
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-10 pt-3 mt-4 mb-4 bg-stone-100">
                <p className="font-serif text-4xl pb-3">RSVP</p>
                <p className="text-2xl pb-3">Coming Soon</p>
              </div>
              <div className="p-10 pt-3 bg-stone-100">
                <img
                  src="4.jpeg"
                  style={{ width: 1200, height: 600, objectFit: "cover" }}
                />
                <p
                  className="font-serif text-4xl pb-3 pt-2"
                  style={{ textAlign: "left" }}
                >
                  {
                    '"People are weird. When we find someone with a weirdness that is compatible with ours, we team up and call it love." - Dr. Suess'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Event;
