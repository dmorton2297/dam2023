/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { HompageGrid } from "../components/HomepageGrid";
import { Home as HomePage } from "../components/Home";
import { OurStory } from "../components/OurStory";
import { Navigation } from "../components/Navigation";
import { Wedding } from "../components/Wedding";
import { TheWedding } from "../components/TheWedding";

const Home: NextPage = () => {
  const photoIds = [1, 2, 3, 4, 5, 6];
  const [currentPhoto, setCurrentPhoto] = useState(photoIds[1]);
  const [windowHeight, setWindowHeight] = useState<number>();
  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
    }
  }, []);

  if (!windowHeight) return <></>;

  return (
    <Page
      title="Dan and Adriana 2023"
      description="Details on our upcoming wedding"
    >
      <div
        className="scroll-container noscroll w-full"
        style={{
          scrollSnapType: "y mandatory",
          overflowY: "scroll",
          overflowX: "hidden",
          height: windowHeight || "100vh",
        }}
      >
        <Navigation />
        <section
          className="one h-full"
          style={{
            scrollSnapAlign: "start",
            background:
              windowHeight < 1100 ? "url(3-skinny.jpeg)" : "url(3.jpeg)",
            backgroundSize: "cover",
          }}
        ></section>
        <section
          className="one h-full flex justify-center"
          style={{
            scrollSnapAlign: "start",
            background:
              windowHeight < 1100 ? "url(2-skinny.jpeg)" : "url(2.jpeg)",
            backgroundSize: "cover",
          }}
        ></section>
        <section
          className="one h-full flex justify-center"
          style={{
            scrollSnapAlign: "start",
            background:
              windowHeight < 1100 ? "url(1-skinny.jpeg)" : "url(1.jpeg)",
            backgroundSize: "cover",
          }}
        ></section>
      </div>
    </Page>
  );
};

export default Home;
