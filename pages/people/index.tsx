/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import { Page } from "../../components/Page";
import { InfoCard } from "../../components/core/InfoCard";
import { Text } from "../../components/core/Text";
import { SubHeader } from "../../components/core/SubHeader";
import { Seperator } from "../../components/core/Seperator";
import { Header } from "../../components/core/Header";

const Event: NextPage = () => {
  return (
    <Page
      title="Adriana & Dan"
      description="Details on our upcoming wedding"
      noHeightRestriction
    >
      <div>
        <InfoCard
          title="Adriana & Dan"
          style={{ marginLeft: 80, border: "none" }}
          largeTitle
          noToggle
        >
          <SubHeader>May 13th, 2023</SubHeader>
          <Seperator />
          <Text>
            Join us to celebrate the marriage of Adriana Davila and Dan Morton.
          </Text>
        </InfoCard>
        <div className="flex justify-center">
          <div style={{ margin: "0 80px", flexGrow: 1, maxWidth: 1400 }}>
            <InfoCard title="The Bridemaids" open={true}>
              <div className="p-4 flex justify-center">
                <div>
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Kellina Heylek <strong>(Maid of Honor)</strong>
                  </Text>
                  <img
                    src="kelli.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="kelli"
                  />
                </div>
              </div>
              <div className="flex" style={{ flexWrap: "wrap" }}>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Heather Davila
                  </Text>
                  <img
                    src="heather.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="heather"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Kaylyn Fales
                  </Text>
                  <img
                    src="kaylyn.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="Kaylyn Fales"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    William Iacullo
                  </Text>
                  <img
                    src="william.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="natalie"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Natalie Beihl
                  </Text>
                  <img
                    src="natalie.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="natalie"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Madison Houle
                  </Text>
                  <img
                    src="madison.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="natalie"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Katina Nicholes
                  </Text>
                  <img
                    src="katina.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="natalie"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Mckenzie Stagnito
                  </Text>
                  <img
                    src="mckenzie.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="kasey"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Kasey Tumilty
                  </Text>
                  <img
                    src="kasey.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="kasey"
                  />
                </div>
              </div>
            </InfoCard>
            <InfoCard title="The Groomsman" open={true}>
              <div className="p-4 flex justify-center">
                <div>
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Mike Morton <strong>(Best man)</strong>
                  </Text>
                  <img
                    src="mike.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="mike"
                  />
                </div>
              </div>
              <div className="flex" style={{ flexWrap: "wrap" }}>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Kevin Morton
                  </Text>
                  <img
                    src="kevin.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="Kevin"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Sean Morton
                  </Text>
                  <img
                    src="sean.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="sean"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Angel Davila
                  </Text>
                  <img
                    src="angel.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="angel"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Matt Robinson
                  </Text>
                  <img
                    src="matt.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="matt"
                  />
                </div>
                <div
                  className="p-4"
                  style={{ textAlign: "center", marginBottom: 10 }}
                >
                  <Text>Griffin Flack</Text>
                  <img
                    src="griffin.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="griffin"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Jon Reitz
                  </Text>
                  <img
                    src="jon.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="jon"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Parker Larson
                  </Text>
                  <img
                    src="parker.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="parker"
                  />
                </div>
                <div className="p-4">
                  <Text style={{ textAlign: "center", marginBottom: 10 }}>
                    Rory Ahern
                  </Text>
                  <img
                    src="rory.jpg"
                    height={300}
                    width={300}
                    style={{ borderRadius: 10000 }}
                    alt="rory"
                  />
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Event;
