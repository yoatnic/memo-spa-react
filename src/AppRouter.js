//@flow
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";

const AppRouter = (props: any) => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
