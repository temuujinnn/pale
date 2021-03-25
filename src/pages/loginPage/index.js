import React, { Fragment } from "react";
import css from "./style.module.css";
import Img from "../../img/login.jpg";
import Logo from "../../component/Logo";
import LoginInput from "../../component/loginInput";

const LoginPage = () => {
  return (
    <>
      <div className={css.imageContainer}>
        <div className={css.sdaLeft}></div>
        <img className={css.img} src={Img} alt="right" />
        <div className={css.sdaRight}></div>

        <div className={css.layer}>
          <div className={css.logo}>
            <Logo />
          </div>
          <div className={css.form}>
            <strong className={css.nevtreh}>Нэвтрэх</strong>
            <div className={css.loginWindow}>
              <div className={css.inputName}>
                <strong className={css.label}>Таны ID </strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" &#61447; Та нэвтрэх ID-аа бичнэ үү"
                />
              </div>
              <div className={css.inputPass}>
                <strong className={css.label}> Нууц үг</strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" &#61475; Та нэвтрэх нууц үгээ оруулна уу"
                />
              </div>
              <div className={css.checkboxContainer}>
                <input className={css.checkbox} type="checkbox" />
                <small className={css.small}>Намайг сана</small>
              </div>
              <div className={css.buttonContainer}>
                <button className={css.button}>Нэвтрэх</button>
              </div>
            </div>
          </div>

          <div className={css.text}>
            Хэрвээ та анх удаа нэвтэрч байгаа бол мэдээллийн ажилтантай
            холбогдож бүртгүүлнэ үү.
          </div>
        </div>
      </div>
      <div className={css.footerText}>
        ПАЛЕОНТОЛОГИЙН ХҮРЭЭЛЭН © 2021. Бүх эрх хуулиар хамгаалагдсан.
      </div>
    </>
  );
};
export default LoginPage;
