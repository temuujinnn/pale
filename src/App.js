import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Logo from "./component/Logo";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import AdminPanel from "./pages/adminPanel";
import SeeAll from "./pages/seeAllPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route component={HomePage} path="/" exact />
          <Route component={LoginPage} path="/loginpage" />
          <Route component={AdminPanel} path="/adminpanel" />
          <Route component={SeeAll} path="/seeall" />
          <Route component={Logo} path="/logo" />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
