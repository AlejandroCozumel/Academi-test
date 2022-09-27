import * as React from "react";
import "../styles/main.scss";
import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import CollapsableImage from "../components/CollapsableImage";
import BGImages from "../components/BGImages";
import ImageText from "../components/ImageText";
import Gallery from "../components/Gallery";
import StickyText from "../components/StickyText";

const IndexPage = () => {
  return (
    <>
      <Hero2 />
      {/* <CollapsableImage /> */}
      {/* <BGImages /> */}
      {/* <ImageText /> */}
      <StickyText />
      {/* <Gallery /> */}
    </>
  );
};

export default IndexPage;
