import Link from "next/link";
import { useEffect, useState } from "react";
import { slide as Slide } from "react-burger-menu";

export const Menu: React.FC = () => {
  return (
    <Slide width={300} pageWrapId="page-wrap" outerContainerId="outer">
      <Link
        id="home"
        className="p-8 menu-item"
        href="https://registry.theknot.com/adriana-davila-dan-morton-september-2023-il/54359222"
      >
        Registry
      </Link>
      <Link
        id="home"
        className="p-8 menu-item"
        href="/"
      >
        Home
      </Link>
    </Slide>
  );
};
