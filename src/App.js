import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import SignUpPage from "./pages/signupPage";

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Route component={HomePage} path="/" exact />
        <Route component={LoginPage} path="/loginpage" />
        <Route component={RegisterPage} path="/registerpage" />
        <Route component={SignUpPage} path="/signuppage" />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
