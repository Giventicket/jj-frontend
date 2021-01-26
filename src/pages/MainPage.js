import React from "react";
import Header from "../components/header/Header";
import AboutUsPanel from "../components/aboutuspanel/AboutUsPanel";
import BlogPanel from "../components/blogpanel/BlogPanel";
import ContactUsPanel from "../components/contactuspanel/ContactUsPanel";
import Footer from "../components/Footer";
import testImage from "../public/testImage.jpg";
import LoadableImage from "../components/common/LoadableImage";

const LoadableImageStyle = { display: "block", width: "100%" };

const MainPage = () => {
  return (
    <>
      <Header />
      <LoadableImage src={testImage} style={LoadableImageStyle} />
      <AboutUsPanel />
      <BlogPanel />
      <ContactUsPanel />
      <Footer />
    </>
  );
};

export default MainPage;
