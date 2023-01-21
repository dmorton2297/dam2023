import Head from "next/head";
import { Menu } from "./Menu";

export const Page: React.FC<{
  children: React.ReactElement;
  title: string;
  description: string;
  noHeightRestriction?: boolean;
}> = ({ children, title, description, noHeightRestriction }) => {
  return (
    <div id={noHeightRestriction ? "no-set-height" : "outer"}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:image" content="1.jpg" />
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <Menu />
      <div id={noHeightRestriction ? "no-wrap" : "page-wrap"}>{children}</div>
    </div>
  );
};
