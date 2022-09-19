import * as React from "react";
import "../styles/main.scss";
import Hero from "../components/Hero";
import CollapsableImage from "../components/CollapsableImage";
import BGImages from "../components/BGImages";
import ImageText from "../components/ImageText";
import Gallery from "../components/Gallery";
import StickyText from "../components/StickyText";

const IndexPage = () => {
  return (
    <>
      <Hero />
      {/* <CollapsableImage /> */}
      {/* <BGImages /> */}
      {/* <ImageText /> */}
      <StickyText />
      <Gallery />
    </>
  );
};

export default IndexPage;
