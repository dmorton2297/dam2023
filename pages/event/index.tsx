/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import { Page } from "../../components/Page";
import { InfoCard } from "../../components/core/InfoCard";
import { Text } from "../../components/core/Text";
import { SubHeader } from "../../components/core/SubHeader";
import { Seperator } from "../../components/core/Seperator";
import Link from "next/link";

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
  return (
    <Page
      title="Dan and Adriana"
      description="Details on our upcoming wedding"
      noHeightRestriction
    >
      <div>
        <InfoCard
          title="Dan & Adriana"
          style={{ marginLeft: 80, border: "none" }}
          largeTitle
          noToggle
        >
          <SubHeader>May 13th, 2023</SubHeader>
          <Seperator />
          <Text>
            Join us to celebrate the marriage of Dan Morton and Adriana Davila.
          </Text>
        </InfoCard>
        <div className="flex justify-center">
          <div style={{ maxWidth: 1000, flexGrow: 1 }}>
            <InfoCard title="Ceremony" open>
              <Text> Fourth Presbyterian Church, Chicago, IL</Text>
              <br />
              <img
                src="fourth.jpeg"
                style={{ width: 1200, height: 600, objectFit: "cover" }}
                alt="Church"
                className="pb-4"
              />
              <Text>
                <strong>Parking</strong>: There are a number of paid parking
                lots and street parking spots near the church,
                <br /> we encourage guests to plan ahead and carpool with family
                members to make parking easy. <br /> You can reserve spots via
                SportHero to revieve the best rates.
              </Text>
              <Seperator />
              <Text>
                <strong>Arriving</strong>: Guests can entrance via the main
                sancuatuary doors on Michigan Avenue.
              </Text>
              <Seperator />
              <Text>
                <strong>Etiquette</strong>: We kindly asks guests to refrain
                from using their phones and using any cameras during the
                cermony.
              </Text>
            </InfoCard>
            <InfoCard title="Reception" open>
              <Text>Carnivale, Chicago, Presbyterian IL</Text>
              <br />
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
                arrive any time during cocktail, with dinner starting promptly
                at 7pm
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
                <strong>Food</strong>: Buffet style food will be served with
                including vegetarian options.
              </Text>
              <Seperator />
              <Text>
                <strong>Etiquette</strong>: We kindly asks guests to refrain
                from using their phones and using any cameras during the
                cermony.
              </Text>
            </InfoCard>
            <InfoCard title="Hotels">
              <hr />
              <ul>
                <Text>
                  <a
                    href="https://www.hilton.com/en/hotels/chiwxhx-hampton-chicago-downtown-west-loop/?SEO_id=GMB-AMER-HX-CHIWXHX&y_source=1_MzgxMDg4OC03MTUtbG9jYXRpb24ud2Vic2l0ZQ=="
                    className="pb-3 underline text-blue-500"
                  >
                    Hampton Inn Chicago Downtown West Loop
                  </a>
                </Text>
                <Text>
                  <a
                    href="https://www.hyatt.com/en-US/hotel/illinois/hyatt-house-chicago-west-loop-fulton-market/chixl?src=corp_lclb_gmb_seo_chixl"
                    className="pb-3 underline text-blue-500"
                  >
                    Hyatt House Chicago / West Loop-Fulton Market
                  </a>
                </Text>
                <Text>
                  <a
                    href="https://thehoxton.com/chicago/?utm_source=google&utm_medium=local&utm_campaign=hotel-thehoxtonchicago"
                    className="pb-3 underline text-blue-500"
                  >
                    The Hoxton
                  </a>
                </Text>
                <Text>
                  <a
                    href="https://www.marriott.com/en-us/hotels/chimm-courtyard-chicago-downtown-magnificent-mile/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                    className="pb-3 underline text-blue-500"
                  >
                    Courtyard by Marriott
                  </a>
                </Text>
              </ul>
            </InfoCard>
            <InfoCard title="RSVP">
              <Text style={{ textDecoration: 'underline', color: 'blue' }} onClick={(e) => e.stopPropagation()}>
                <Link href="/rsvp" className="pb-3 underline text-blue-500">
                  Retrieve my RSVP
                </Link>
              </Text>
            </InfoCard>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Event;
