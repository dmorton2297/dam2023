import Link from "next/link";
import { useEffect, useState } from "react";
import { slide as Slide } from "react-burger-menu";
import { Seperator } from "./core/Seperator";

export const Menu: React.FC = () => {
  return (
    <Slide width={300} pageWrapId="page-wrap" outerContainerId="outer">
      <Link id="home" className="p-8 menu-item font-serif" href="/">
        Home
      </Link>
      <Seperator />
      <Link id="wedding" className="p-8 menu-item font-serif" href="/event">
        Wedding
      </Link>
      <Seperator />

      <Link id="wedding-party" className="p-8 menu-item font-serif" href="/people">
        Wedding Party
      </Link>
      <Seperator />

      <Link
        id="registry"
        className="p-8 menu-item font-serif"
        href="https://www.crateandbarrel.com/gift-registry/adriana-dan-morton/r6551952"
      >
        Registry
      </Link>
      <Seperator />
      <Link
        id="invitation"
        className="p-8 menu-item font-serif"
        href="/invitation.pdf"
        download="Invitation"
      >
        Invitation
      </Link>
    </Slide>
  );
};
