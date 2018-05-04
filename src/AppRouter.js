//@flow
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/pages/App";

const AppRouter = (props: any) => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={App} />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
