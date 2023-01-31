/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React, { useEffect, useState } from "react";
import { Page } from "../../components/Page";
import { InfoCard } from "../../components/core/InfoCard";
import { Text } from "../../components/core/Text";
import { SubHeader } from "../../components/core/SubHeader";
import { Seperator } from "../../components/core/Seperator";
import { Link } from "../../components/core/Link";
import NextLink from "next/link";
import { Subtext } from "../../components/core/Subtext";
import { Button } from "../../components/core/Button";
import { useRouter } from "next/router";

const Event: NextPage = () => {
  const { asPath, push } = useRouter();
  const [focusedSection, setFocusedSection] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const focused = asPath.split("#")[1];
    setFocusedSection(focused);
  }, [asPath]);

  return (
    <Page
      title="Adriana & Dan"
      description="Join us to celebrate the wedding of Adriana Davila and Dan Morton"
      noHeightRestriction
    >
      <div style={{ width: "100%" }}>
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
            <InfoCard
              title="Ceremony"
              open={
                (focusedSection && focusedSection === "Ceremony") ||
                !focusedSection
              }
              hidden={
                !(focusedSection && focusedSection === "Ceremony") &&
                !!focusedSection
              }
            >
              <Subtext>
                Fourth Presbyterian Church -{" "}
                <Link
                  href="https://goo.gl/maps/RgvFaCsqZTBSzxAq9"
                  className="text-neutral-50"
                >
                  126 E Chestnut St, Chicago, IL 60611
                </Link>
              </Subtext>
              <Subtext>Time: 4:30 PM - 5:45 pm</Subtext>
              <img
                src="fourth.jpeg"
                style={{ width: 1200, height: 600, objectFit: "cover" }}
                alt="Church"
                className="pb-4"
              />
              <Text>
                <strong>Parking</strong>: There are a number of paid parking
                lots and street parking near the church,
                <br /> we encourage guests to plan ahead and carpool with family
                members to make parking easy. <br /> You can reserve spots via
                SportHero to recieve the best rates.
              </Text>
              <Seperator />
              <Text>
                <strong>Arriving</strong>: Guests can enter via the main
                sancuatuary doors on Michigan Avenue.
              </Text>
              <Seperator />
              <Text>
                <strong>Etiquette</strong>: We kindly asks guests to refrain
                from using cell phones and cameras during the cermony.
              </Text>
            </InfoCard>
            <InfoCard
              title="Reception"
              open={
                (focusedSection && focusedSection === "Reception") ||
                !focusedSection
              }
              hidden={
                !(focusedSection && focusedSection === "Reception") &&
                !!focusedSection
              }
            >
              <Subtext>
                Carnivale -{" "}
                <Link
                  href="https://goo.gl/maps/xDx8dQ1k6gjFw4qL8"
                  className="text-white"
                >
                  702 W Fulton St, Chicago, IL 60661
                </Link>
              </Subtext>
              <Subtext>Time: 6:00 PM - 12:00 AM</Subtext>
              <img
                src="carnivale.jpeg"
                style={{ width: 1200, height: 600, objectFit: "cover" }}
                className="pb-4"
                alt="Carnivale"
              />
              <Text>
                <strong>Cocktail Hour</strong>: 6:00pm - 7:00pm
                <br />
                Cocktail hour will start promptly after the ceremony. Guests can
                arrive starting at 6pm, with dinner starting promptly at 7pm.
              </Text>
              <Seperator />
              <Text>
                <strong>Parking</strong>: We encourage guests to plan ahead and
                carpool with family members to make parking easy. You can
                reserve spots via SportHero to revieve the best rates.
              </Text>
              <Seperator />
              <Text>
                <strong>Arriving</strong>: There will be signs directing guests,
                the reception is on the second floor of the restraunt.
              </Text>
              <Seperator />
              <Text>
                <strong>Bar</strong>: There will be a full bar, it is encouraned
                to bring cash to tip the bar tenders.
              </Text>
              <Seperator />
              <Text>
                <strong>Food</strong>: Buffet style food will be served
                including vegetarian options.
              </Text>
              <Seperator />
            </InfoCard>
            <InfoCard
              title="Hotels"
              open={
                (focusedSection && focusedSection === "Hotels") ||
                !focusedSection
              }
              hidden={
                !(focusedSection && focusedSection === "Hotels") &&
                !!focusedSection
              }
            >
              <Text>
                The following hotels are in close proximity to the reception.{" "}
                <br /> <br />
                We have negotiated a rates for the dates May 12th - 14th 2023.{" "}
                <br /> Clicking either link will get you access to the group
                rates.
              </Text>
              <Seperator />
              <ul>
                <Subtext>
                  <Link href="https://www.marriott.com/events/start.mi?id=1670446546264&key=GRP">
                    Courtyard by Marriott Chicago Downtown/Magnificent Mile
                  </Link>
                  <br style={{ marginBottom: 5 }} />
                  <Link href="https://goo.gl/maps/e9ATF9hV75hdRwnHA">
                    View on Google Maps
                  </Link>
                  <br />
                  <strong>More affordable</strong>
                </Subtext>
                <Subtext>
                  <Link href="https://book.passkey.com/gt/219062776?gtid=ee328a1dbda0eb1b0308321891c7b6d&mobile=true&dw=428">
                    The Westin Chicago River North
                  </Link>
                  <br style={{ marginBottom: 5 }} />
                  <Link href="https://goo.gl/maps/pxGKHEMJbvhrQoV59">
                    View on Google Maps
                  </Link>
                </Subtext>
              </ul>
              <Text>
                You are also welcome to stay at any hotel in the Chicago area.
                There are many great options, we recommend staying close to the
                River North / West loop neighborhoods.
              </Text>
            </InfoCard>
            <InfoCard title="Rsvp" hidden={!!focusedSection}>
              <Text>
                Click the button below and have your invitation handy to update
                your RSVP.
              </Text>
              <Seperator />
              <NextLink href="/rsvp" className="pb-3 underline text-blue-500">
                <Button style={{ marginTop: 10 }}>Retrieve my RSVP</Button>
              </NextLink>
            </InfoCard>
            <InfoCard title="Wedding Party" hidden={!!focusedSection}>
              <Text>Click the button below to view the wedding party</Text>
              <Seperator />
              <NextLink href="/people" className="pb-3 underline text-blue-500">
                <Button style={{ marginTop: 10 }}>Wedding Party</Button>
              </NextLink>
            </InfoCard>
            <Button
              onClick={() => push(
                {
                  hash: ''
                },
                undefined,
                { shallow: true }
              )}
              style={{ marginLeft: 10, marginBottom: 30 }}
            >Return to full website</Button>
            <InfoCard title="Registry" hidden={!!focusedSection}>
              <Text>Click the button below to view the couples registry</Text>
              <Seperator />
              <a
                style={{ color: "black" }}
                href="https://www.crateandbarrel.com/gift-registry/adriana-dan-morton/r6551952"
                className="pb-3 underline text-blue-500"
              >
                <Button style={{ marginTop: 10 }}>Registry</Button>
              </a>
            </InfoCard>
          </div>
          <div style={{ height: 100 }} />
        </div>
      </div>
    </Page>
  );
};

export default Event;
