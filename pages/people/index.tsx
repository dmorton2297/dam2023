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
          <div style={{ maxWidth: 1000, flexGrow: 1 }}>
            <InfoCard title="The Couple" open={true}>
              <Text>Dan Morton & Adriana Davila</Text>
            </InfoCard>
            <InfoCard title="The Bridemaids" open={true}>
              <Text>Dan Morton & Adriana Davila</Text>
            </InfoCard>
            <InfoCard title="The Groomsman" open={true}>
              <Text>Dan Morton & Adriana Davila</Text>
            </InfoCard>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Event;
