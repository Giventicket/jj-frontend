import React from "react";
import Header from "../components/Header";
import BlogPanelContainer from "../containers/BlogPanelContainer";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <>
      <Header />
      <BlogPanelContainer navigator={true} />
      <Footer />
    </>
  );
};

export default BlogPage;
