//@flow
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Editor from "./components/pages/Editor";

const AppRouter = (props: any) => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/edit" component={Editor} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
