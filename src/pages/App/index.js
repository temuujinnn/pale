import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../homePage";
import LoginPage from "../loginPage";
import AdminPanel from "../adminPanel";
import SeeAll from "../seeAllPage";

function App() {
  return (
    <Fragment>
      <Switch>
        <Route path="/loginpage" component={LoginPage} />
        <Route path="/adminpanel" component={AdminPanel} />
        <Route path="/seeall" component={SeeAll} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </Fragment>
  );
}

export default App;
