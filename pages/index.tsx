/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useEffect, useState } from "react";
import { Page } from "../components/Page";
import { Navigation } from "../components/Navigation";
import gsap from "gsap";
import Link from "next/link";

const Home: NextPage = () => {
  const photoIds = [1, 2, 3, 4, 5, 6];
  const [currentPhoto, setCurrentPhoto] = useState(photoIds[1]);
  const [windowHeight, setWindowHeight] = useState<number>();
  const [windowWidth, setWindowWidth] = useState<number>();
  const [animationOccurred, setAnimationOccured] = useState(false);

  useEffect(() => {
    if (window) {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (!animationOccurred && document.getElementById("home-page-content")) {
      const tl = gsap.timeline();
      setAnimationOccured(true);
      tl.to("#home-page-content", {
        x: "-100vw",
        y: "10vh",
        fontSize: 50,
        duration: 0,
      });
      tl.to("#home-page-content", {
        x: "50vw - 100px",
        y: "10vh",
        ease: "bounce",
        fontSize: 50,
        duration: 1.5,
        stagger: 0.1,
      });
      tl.from("#test", {
        y: "200px",
        duration: 2,
      });
    }
  });

  if (!windowHeight || !windowWidth) return <></>;

  return (
    <Page
      title="Dan and Adriana 2023"
      description="Details on our upcoming wedding"
    >
      <>
        <div
          className="flex text-stone-50 "
          style={{
            flexDirection: "column",
            position: "absolute",
            pointerEvents: "none",
          }}
        >
          <p
            id="home-page-content"
            style={{ width: 300 }}
            className="font-serif"
          >
            Celebrating
          </p>
          <p
            id="home-page-content"
            style={{ width: 300 }}
            className="font-serif"
          >
            Dan &
          </p>

          <p
            id="home-page-content"
            style={{ width: 300 }}
            className="font-serif"
          >
            Adriana
          </p>
          <p
            id="home-page-content"
            style={{ width: 300 }}
            className="font-serif"
          >
            March 13th, 2021
          </p>
        </div>
        <div
          className="flex"
          style={{ position: "absolute", bottom: 10, right: 10 }}
        >
          <div
            id="test"
            className="mr-1 bg-yellow-400 text-stone-100 flex flex-col justify-center hover:bg-stone-400 cursor-pointer"
            onClick={() =>
              document.getElementById("react-burger-menu-btn")?.click()
            }
            style={{
              width: 100,
              borderRadius: 50,
            }}
          >
            <p className="font-serif text-2xl" style={{ alignSelf: "center" }}>
              <Link href="/event">Details</Link>
            </p>
          </div>
          <div
            id="test"
            className="mr-1 bg-blue-500 text-stone-100 flex flex-col justify-center hover:bg-stone-400 cursor-pointer"
            onClick={() =>
              document.getElementById("react-burger-menu-btn")?.click()
            }
            style={{
              width: 100,
              borderRadius: 50,
            }}
          >
            <p className="font-serif text-2xl" style={{ alignSelf: "center" }}>
              RSVP
            </p>
          </div>
          <div
            id="test"
            className="bg-pink-400 text-stone-100 flex flex-col justify-center hover:bg-stone-400 cursor-pointer"
            onClick={() =>
              document.getElementById("react-burger-menu-btn")?.click()
            }
            style={{
              width: 100,
              borderRadius: 50,
            }}
          >
            <p className="font-serif text-2xl" style={{ alignSelf: "center" }}>
              <Link
                href="https://registry.theknot.com/adriana-davila-dan-morton-september-2023-il/54359222"
              >
                Registry
              </Link>
            </p>
          </div>
        </div>

        <div
          className="scroll-container noscroll w-full"
          style={{
            scrollSnapType: "y mandatory",
            overflowY: "scroll",
            overflowX: "hidden",
            height: windowHeight || "100vh",
          }}
        >
          <section
            className="one h-full"
            style={{
              scrollSnapAlign: "start",
              background:
                windowWidth < 750 ? "url(3-skinny.jpeg)" : "url(3.jpeg)",
              backgroundSize: "cover",
              boxShadow: "inset 0 0 0 100000px rgba(0,0,0,0.4)",

              zIndex: 2,
            }}
          ></section>
          <section
            className="one h-full flex justify-center"
            style={{
              scrollSnapAlign: "start",
              background:
                windowWidth < 750 ? "url(2-skinny.jpeg)" : "url(2.jpeg)",
              backgroundSize: "cover",
              boxShadow: "inset 0 0 0 100000px rgba(0,0,0,0.4)",
            }}
          ></section>
          <section
            className="one h-full flex justify-center"
            style={{
              scrollSnapAlign: "start",
              background:
                windowWidth < 750 ? "url(1-skinny.jpeg)" : "url(1.jpeg)",
              backgroundSize: "cover",
              boxShadow: "inset 0 0 0 100000px rgba(0,0,0,0.4)",
            }}
          ></section>
        </div>
      </>
    </Page>
  );
};

export default Home;
