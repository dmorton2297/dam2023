import { useEffect, useState } from "react";

export const Navigation: React.FC = () => {
  const handleClick = (item: string) => {
    switch (item) {
      case "registry":
        return window.scrollTo();
      case "our-story":
        return document.getElementById("our-story")?.scrollIntoView();
      case "the-wedding":
        return document.getElementById("the-wedding")?.scrollIntoView();
      case "honeymoon":
        return;
    }
  };
  const [skinny, setSkinny] = useState(false);
  useEffect(() => {
    if (window) {
      window.innerWidth < 1145 && setSkinny(true);
    }
  }, []);
  if (skinny) return <></>;
  return (
    <div
      style={{
        position: "absolute",
        top: -80,
        left: "calc(50vw - 200px)",
        height: 150,
        overflow: "hidden",
      }}
    >
      <div
        className="blob flex justify-center bg-slate-50 mr-2"
        style={{
          width: 400,
          borderRadius: 600,
          height: 100,
        }}
      >
        <div
          className="flex justify-between"
          style={{ borderRadius: "3", width: "90%" }}
        >
          <p
            className="font-serif text-2xl text-stone-700 nav-item"
            style={{ marginTop: 45 }}
            onClick={() => handleClick("our-story")}
          >
            Our story
          </p>
          <p
            className="font-serif text-2xl text-stone-700 nav-item"
            style={{ marginTop: 45 }}
            onClick={() => handleClick("the-wedding")}
          >
            Wedding
          </p>
          <p
            className="font-serif text-2xl text-stone-700 nav-item"
            style={{ marginTop: 45 }}
          >
            Registry
          </p>
        </div>
      </div>
    </div>
  );
};
