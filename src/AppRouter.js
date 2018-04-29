//@flow
import React from "react";
import InfinityScroll from "./components/pages/InfinityScroll";
import RenderProps from "./components/pages/RenderProps";
import OfficeUIFablic from "./components/pages/OfficeUIFablic";
import Mobx from "./components/pages/Mobx";
import ReduxEffectsSteps from "./components/pages/ReduxEffectsSteps";
import { BrowserRouter, Route, Link } from "react-router-dom";

const AppIndex = () => {
  return (
    <div>
      <header>
        <h1>Index</h1>
      </header>
      <ul>
        <li>
          <Link to="/infinity-scroll">infinity scroll</Link>
        </li>
        <li>
          <Link to="/render-props">render props</Link>
        </li>
        <li>
          <Link to="/office-ui-fablic">office-ui-fablic</Link>
        </li>
        <li>
          <Link to="/mobx">Mobx</Link>
        </li>
        <li>
          <Link to="/redux-effects-steps">redux-effects-steps</Link>
        </li>
      </ul>
    </div>
  );
};

const AppRouter = (props: any) => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={AppIndex} />
        <Route
          path="/infinity-scroll"
          render={() => <InfinityScroll {...props} />}
        />
        <Route path="/render-props" render={() => <RenderProps {...props} />} />
        <Route
          path="/office-ui-fablic"
          render={() => <OfficeUIFablic {...props} />}
        />
        <Route path="/mobx" render={() => <Mobx {...props} />} />
        <Route
          path="/redux-effects-steps"
          render={() => <ReduxEffectsSteps {...props} />}
        />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
