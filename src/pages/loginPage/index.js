import React, { Fragment } from "react";
import css from "./style.module.css";
import Img from "../../img/login.jpg";
import Logo from "../../component/Logo";
import LoginInput from "../../component/loginInput";

const LoginPage = () => {
  return (
    <div className={css.imageContainer}>
      <img className={css.img} src={Img} alt="right" />
      <div className={css.sda}></div>
      <div className={css.input}>
        <div className={css.form}>
          <LoginInput />
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
