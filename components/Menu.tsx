import Link from "next/link";
import { slide as Slide } from "react-burger-menu";

export const Menu: React.FC = () => {
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
