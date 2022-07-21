/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { HompageGrid } from '../components/HomepageGrid';
import { Home as HomePage } from '../components/Home';
import { OurStory } from "../components/OurStory";
import { Navigation } from "../components/Navigation";
import { Wedding } from "../components/Wedding";
import { TheWedding } from "../components/TheWedding";

const Home: NextPage = () => {
  const photoIds = [1, 2, 3, 4, 5, 6];
  const [currentPhoto, setCurrentPhoto] = useState(photoIds[1]);

  return (
    <Page
      title="Dan and Adriana 2023"
      description="Details on our upcoming wedding"
    >
      <div
        className="scroll-container noscroll h-screen"
        style={{ scrollSnapType: "y mandatory", overflowY: "scroll" }}
      >
        <Navigation />
        <HomePage />
        <section
          className="one h-screen flex justify-center"
          style={{
            scrollSnapAlign: "start",
            background: "url(2.jpeg)",
            backgroundSize: "cover",
          }}
        >
          <OurStory />
        </section>
        <section
          className="one h-screen flex justify-center"
          style={{
            scrollSnapAlign: "start",
            background: "url(1.jpeg)",
            backgroundSize: "cover",
          }}
        >
          <TheWedding />
        </section>
      </div>
    </Page>
  );
};

export default Home;
