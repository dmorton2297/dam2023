/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import { Page } from "../../components/Page";
import { InfoCard } from "../../components/core/InfoCard";
import { Text } from "../../components/core/Text";
import { SubHeader } from "../../components/core/SubHeader";
import { Seperator } from "../../components/core/Seperator";
import { Link } from "../../components/core/Link";
import NextLink from "next/link";
import { Subtext } from "../../components/core/Subtext";
import { Button } from "../../components/core/Button";

const Event: NextPage = () => {
  return (
    <Page
      title="Adriana & Dan"
      description="Details on our upcoming wedding"
      noHeightRestriction
    >
      <div style={{ width: '100%' }}>
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
            <InfoCard title="Ceremony" open>
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
                SportHero to revieve the best rates.
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
            <InfoCard title="Reception" open={true}>
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
            <InfoCard title="Hotels" open={true}>
              <Text>
                The following hotels are in close proximity to the reception.
              </Text>
              <Seperator />
              <ul>
                <Subtext>
                  <Link href="https://www.hilton.com/en/hotels/chiwxhx-hampton-chicago-downtown-west-loop/?SEO_id=GMB-AMER-HX-CHIWXHX&y_source=1_MzgxMDg4OC03MTUtbG9jYXRpb24ud2Vic2l0ZQ==">
                    Hampton Inn Chicago Downtown West Loop
                  </Link>
                </Subtext>
                <Subtext>
                  <Link href="https://www.hyatt.com/en-US/hotel/illinois/hyatt-house-chicago-west-loop-fulton-market/chixl?src=corp_lclb_gmb_seo_chixl">
                    Hyatt House Chicago / West Loop-Fulton Market
                  </Link>
                </Subtext>
                <Subtext>
                  <Link href="https://thehoxton.com/chicago/?utm_source=google&utm_medium=local&utm_campaign=hotel-thehoxtonchicago">
                    The Hoxton
                  </Link>
                </Subtext>
                <Subtext>
                  <Link href="https://www.marriott.com/en-us/hotels/chimm-courtyard-chicago-downtown-magnificent-mile/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0">
                    Courtyard by Marriott
                  </Link>
                </Subtext>
              </ul>
            </InfoCard>
            <InfoCard title="Rsvp">
              <Text>
                Click the button below and have your invitation handy to update
                your RSVP.
              </Text>
              <Seperator />
              <NextLink href="/rsvp" className="pb-3 underline text-blue-500">
                <Button style={{ marginTop: 10 }}>Retrieve my RSVP</Button>
              </NextLink>
            </InfoCard>
            <InfoCard title="Wedding Party">
              <Text>Click the button below to view the wedding party</Text>
              <Seperator />
              <NextLink href="/people" className="pb-3 underline text-blue-500">
                <Button style={{ marginTop: 10 }}>Wedding Party</Button>
              </NextLink>
            </InfoCard>
            <InfoCard title="Registry">
              <Text>Click the button below to view the couples registry</Text>
              <Seperator />
              <a style={{ color: 'black' }} href="https://www.crateandbarrel.com/gift-registry/adriana-dan-morton/r6551952" className="pb-3 underline text-blue-500">
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
