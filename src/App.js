import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Logo from "./component/Logo";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import LastAdded from "./component/LastAdded";
import Contact from "./component/Contact";
import AdminPanel from "./pages/adminPanel";
import LoginInput from "./component/loginInput";
import SeeAll from "./pages/seeAllPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Route component={HomePage} path="/" exact />
        <Route component={LoginPage} path="/loginpage" />
        <Route component={LastAdded} path="/lastadded" />
        <Route component={AdminPanel} path="/adminpanel" />
        <Route component={Logo} path="/logo" />
        <Route component={Contact} path="/contact" />
        <Route component={LoginInput} path="/lgninput" />
        <Route component={SeeAll} path="/seeall" />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
