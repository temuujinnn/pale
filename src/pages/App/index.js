import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../homePage";
import LoginPage from "../loginPage";
import AdminPanel from "../adminPanel";
import SeeAll from "../seeAllPage";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/homepage" component={HomePage} />
        <Route path="/adminpanel" component={AdminPanel} />
        <Route path="/seeall" component={SeeAll} />
        <Route path="/" exact component={LoginPage} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
}

export default App;
