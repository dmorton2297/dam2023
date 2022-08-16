  /* eslint-disable @next/next/no-img-element */
  import type { NextPage } from "next";
  import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
  import { Page } from "../components/Page";
  import HomeContent from "../components/HomeContent";

const Home: NextPage = () => {
  return (
    <Page
      title="Dan and Adriana 2023"
      description="Details on our upcoming wedding"
    >
     <HomeContent />
    </Page>
  );
};

export default Home;
