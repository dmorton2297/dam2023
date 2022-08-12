/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { useState } from "react";
import { Page } from "../../components/Page";

const Event: NextPage = () => {
  return (
    <Page
      title="Dan and Adriana 2023"
      description="Details on our upcoming wedding"
    >
      <p>Test</p>
    </Page>
  );
};

export default Event;
