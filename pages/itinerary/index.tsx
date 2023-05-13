import React, { useEffect, useState } from "react";
import { Page } from "../../components/Page";
import { Header } from "../../components/core/Header";
import { InfoCard } from "../../components/core/InfoCard";
import { SubHeader } from "../../components/core/SubHeader";
import { Seperator } from "../../components/core/Seperator";
import { Text } from "../../components/core/Text";
import Timeline from "../../components/core/Timeline";
import { TIMELINE_DATA } from "../../timelineData";

export const Itinerary = () => {

  const [timelineData, setTimelineData] = useState(TIMELINE_DATA)
  const [key, setKey] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => setKey(Math.random() * 1000), 5000)

    return () => clearInterval(interval)
  })

  return (
    <Page
      title="Timeline"
      description="A play by play for what is going on with the wedding"
      noHeightRestriction
    >
      <>
        <div className=" flex w-full justify-center">
          <InfoCard
            title="Adriana & Dan"
            
            style={{
              border: "none",
              width: "unset",
              textAlign: "center",
              paddingRight: 10,
              paddingLeft: 10,
            }}
            largeTitle
            noToggle
          >
            <Text><strong>Day of Wedding tracker</strong></Text>
          </InfoCard>
        </div>
        <div className=" flex w-full justify-center">
          <div>
            <Timeline key={key} items={timelineData} />
          </div>
        </div>
      </>
    </Page>
  );
};

export default Itinerary;
