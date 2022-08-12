import Head from "next/head";
import { Menu } from "./Menu";

export const Page: React.FC<{
  children: React.ReactElement;
  title: string;
  description: string;
}> = ({ children, title, description }) => {
  return (
    <div id="outer">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <div id="page-wrap">
        {children}
      </div>
    </div>
  );
};
