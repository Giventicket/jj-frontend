import React from "react";
import { Route } from "react-router-dom";
import loadable from "@loadable/component";
const MainPage = loadable(() => import("./pages/MainPage"));

const App = () => {
  return (
    <>
      <Route path="/" render={() => <MainPage />} />
    </>
  );
};

export default App;
