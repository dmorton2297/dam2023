import Link from "next/link";
import { useEffect, useState } from "react";
import { slide as Slide } from "react-burger-menu";

export const Menu: React.FC = () => {
  return (
    <Slide width={300} pageWrapId="page-wrap" outerContainerId="outer">
      <Link id="home" className="p-8 menu-item" href="/">
        Home
      </Link>
      <Link id="home" className="p-8 menu-item" href="/event">
        Wedding
      </Link>
      <Link id="home" className="p-8 menu-item" href="/event">
        Wedding Party
      </Link>
      <Link
        id="home"
        className="p-8 menu-item"
        href="https://www.crateandbarrel.com/gift-registry/adriana-dan-morton/r6551952"
      >
        Registry
      </Link>
      <Link
        id="home"
        className="p-8 menu-item"
        href="/invitation.pdf"
        download="Invitation"
      >
        Invitation PDF
      </Link>
    </Slide>
  );
};
