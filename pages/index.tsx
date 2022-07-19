/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { Banner } from "../components/Banner";
import { HompageGrid } from "../components/HomepageGrid";

const Home: NextPage = () => {
  const photoIds = [1, 2, 3, 4, 5, 6];
  const [currentPhoto, setCurrentPhoto] = useState(photoIds[1]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto(currentPhoto < 6 ? currentPhoto + 1 : 1);
    }, 10000);

    return () => clearInterval(interval);
  });

  const blobclasses = "p-2";
  return (
    <Page
      title="Dan and Adriana 2023"
      description="Details on our upcoming wedding"
    >
      <>
        <div className="full-screen-overlay text-ease-in flex" style={{ zIndex: 1, justifyContent: "center"  }}>
            <div style={{ width: 1366 }}>
              <Banner />
              <HompageGrid />
            </div>
        </div>

        <div className="full-screen-overlay" style={{ zIndex: 0 }}>
          <Carousel
            showThumbs={false}
            showArrows={false}
            selectedItem={currentPhoto - 1}
          >
            {[1, 2, 3, 4, 5, 6].map((x) => {
              return (
                <div key={x}>
                  <img
                    height="100vh"
                    style={{ objectFit: "cover", height: "100vh" }}
                    src={`${x}.jpeg`}
                    alt="image"
                  />
                </div>
              );
            })}
          </Carousel>
        </div>
      </>
    </Page>
  );
};

export default Home;
