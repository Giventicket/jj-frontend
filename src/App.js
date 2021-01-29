import React from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";
const MainPage = loadable(() => import("./pages/MainPage"));
const BlogPage = loadable(() => import("./pages/BlogPage"));

const App = () => {
  return (
    <>
      <Route exact path="/" render={() => <MainPage />} />
      <Route exact path="/blog" render={() => <BlogPage />} />
    </>
  );
};

export default App;
