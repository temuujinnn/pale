import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Logo from "./component/Logo";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import SignUpPage from "./pages/signupPage";
import LastAdded from "./component/LastAdded";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Route component={HomePage} path="/" exact />
        <Route component={LoginPage} path="/loginpage" />
        <Route component={LastAdded} path="/lastadded" />
        <Route component={SignUpPage} path="/signuppage" />
        <Route component={Logo} path="/logo" />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
