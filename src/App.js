import React from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";
const MainPage = loadable(() => import("./pages/MainPage"));
const BlogPage = loadable(() => import("./pages/BlogPage"));
const BlogContentPage = loadable(() => import("./pages/BlogContentPage"));
const AboutUsPage = loadable(() => import("./pages/AboutUsPage"));

const App = () => {
  return (
    <>
      <Route exact path="/" render={() => <MainPage />} />
      <Route exact path="/blog" render={() => <BlogPage />} />
      <Route exact path="/blog/:id" render={() => <BlogContentPage />} />
      <Route exact path="/aboutus" render={() => <AboutUsPage />} />
    </>
  );
};

export default App;
