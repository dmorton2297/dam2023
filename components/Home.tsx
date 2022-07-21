import { useEffect, useState } from "react";

export const Home: React.FC = () => {
  const [skinny, setSkinny] = useState(false);
  useEffect(() => {
    if (window) {
        window.innerWidth < 1145 && setSkinny(true);
    }
}, [])
  return (
    <section
      className="one h-screen"
      style={{
        scrollSnapAlign: "start",
        background: "url(3.jpeg)",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          position: "relative",
          top: "-78px",
          left: "calc(100vw - 240px)",
          height: 300,
          overflow: "hidden",
        }}
      >
        <div
          className="blob flex justify-end bg-slate-50 mr-2"
          style={{
            width: 300,
            borderRadius: 600,
            height: 100,
          }}
        >
          <div style={{ borderRadius: "3" }}>
            <p
              className="font-serif text-2xl text-stone-700"
              style={{ marginTop: 45, marginRight: 95 }}
            >
              May 6th 2023
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "sticky",
          top: "calc(100vh - 300px)",
          height: 300,
          overflow: "hidden",
          marginTop: -150,
        }}
      >
        <div
          className="blob flex justify-end mr-2"
          style={{
            width: 1500,
            borderRadius: 600,
            marginLeft: skinny ? -920 : -590,
            height: 2000,
          }}
        >
          <div style={{ borderRadius: "3", paddingRight: 330, paddingTop: 30 }}>
            <p
              className={`font-serif ${skinny ? 'text-4xl' : 'text-8xl'} text-stone-700`}
              style={{ textAlign: "right" }}
            >
              Celebrating
            </p>
            <p className={`font-serif ${skinny ? 'text-4xl' : 'text-8xl'} text-stone-700`}>Dan & Adriana</p>
          </div>
        </div>
      </div>
    </section>
  );
};
