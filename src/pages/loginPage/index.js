import React, { Fragment } from "react";
import css from "./style.module.css";
import Img from "../../img/login.jpg";
import Logo from "../../component/Logo";
import LoginInput from "../../component/loginInput";

const LoginPage = () => {
  return (
    <>
      <div className={css.imageContainer}>
        <img className={css.img} src={Img} alt="right" />
        <div className={css.sda}></div>
      </div>
      <div className={css.layer}>
        <div className={css.form}>
          <LoginInput />
        </div>
        <p>naba pro temka suga</p>
      </div>
    </>
  );
};
export default LoginPage;
