import { useEffect, useState } from "react";
/* eslint-disable @next/next/no-img-element */
import gsap from "gsap";
import Link from "next/link";

const HomeContent: React.FC = () => {
  const photoIds = [1, 2, 3, 4, 5, 6];
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
    }
  });

  if (!windowHeight || !windowWidth) return <></>;

  return (
    <>
      <div
        className="flex text-stone-50 "
        style={{
          flexDirection: "column",
          position: "absolute",
          pointerEvents: "none",
        }}
      >
        <p id="home-page-content" style={{ width: 300 }} className="font-serif">
          Celebrating
        </p>
        <p id="home-page-content" style={{ width: 300 }} className="font-serif">
          Adriana &
        </p>

        <p id="home-page-content" style={{ width: 300 }} className="font-serif">
          Dan
        </p>
        <p id="home-page-content" style={{ width: 300 }} className="font-serif">
          May 13th, 2023
        </p>
      </div>
      <div
        className="flex"
        style={{ position: "absolute", bottom: 10, right: 10 }}
      >
        <Link href="/event">
          <div
            className="mr-1 text-stone-100 flex flex-col justify-center cursor-pointer hover:bg-red-600"
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              backgroundColor: "rgba(135, 157, 186)",
            }}
          >
            <p className="font-serif text-2xl" style={{ alignSelf: "center" }}>
              Details
            </p>
          </div>
        </Link>
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
          className="one h-full flex justify-center"
          style={{
            scrollSnapAlign: "start",
            background:
              windowWidth < 750 ? "url(1-skinny.jpeg)" : "url(1.jpeg)",
            backgroundSize: "cover",
            boxShadow: "inset 0 0 0 100000px rgba(0,0,0,0.2)",
          }}
        ></section>
        <section
          className="one h-full flex justify-center"
          style={{
            scrollSnapAlign: "start",
            background:
              windowWidth < 750 ? "url(2-skinny.jpeg)" : "url(2.jpeg)",
            backgroundSize: "cover",
            boxShadow: "inset 0 0 0 100000px rgba(0,0,0,0.2)",
          }}
        ></section>
        <section
          className="one h-full"
          style={{
            scrollSnapAlign: "start",
            background:
              windowWidth < 750 ? "url(3-skinny.jpeg)" : "url(3.jpeg)",
            backgroundSize: "cover",
            boxShadow: "inset 0 0 0 100000px rgba(0,0,0,0.2)",

            zIndex: 2,
          }}
        ></section>
      </div>
    </>
  );
};

export default HomeContent;
