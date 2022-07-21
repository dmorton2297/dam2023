import Link from "next/link";
import { useEffect, useState } from "react";
import { slide as Slide } from "react-burger-menu";

export const Menu: React.FC = () => {
  const [skinny, setSkinny] = useState(false);
  useEffect(() => {
    if (window) {
      window.innerWidth < 1145 && setSkinny(true);
    }
  }, []);
  if (!skinny) return;
  return (
    <Slide width={300} pageWrapId="page-wrap" outerContainerId="outer">
      <Link id="home" className="p-8 menu-item" href="/">
        Registry
      </Link>
      <Link id="home" className="p-1 menu-item" href="/event">
        Event details
      </Link>
    </Slide>
  );
};
