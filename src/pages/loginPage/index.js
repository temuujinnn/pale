import React, { Fragment } from "react";
import css from "./style.module.css";
<<<<<<< HEAD
import Background from "../../img/login.jpg"
import Logo from "../../component/Logo"
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className = {css.all}>
      <img  className = { css.img} src = {Background} alt ="zurag"/>
      <div className = {css.naba}>
          <div className={css.Container}>
            <div className = {css.section}>
                  <div className={css.logo}>
                  <Logo/>
                  </div>
                  <div className = {css.form}>
                    <p>Нэвтрэх</p>
                    <b>Таны нэр:</b>
                    <input type="text" className={css.input} placeholder="Та нэвтрэх нэрээ бичнэ үү" />
                    <b>Нууц үг:</b>  
                    <input type="text" className={css.input} placeholder="Та нууц үгээ оруулна уу"/>
                    <label className={css.checkbox}>
                    <input type="checkbox"  />
                    Намайг сана
                    </label>
                    <Link className={css.Link} to="/"> Нэвтрэх</Link>
                  </div>
            </div>
            <p className = {css.p}>Хэрвээ та анх удаа нэвтэрч байгаа бол мэдээллийн ажилтантай холбогдож бүртгүүлнэ үү.</p> 
          </div>
      </div>
    
    </div>
=======
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
                  placeholder=" &#61447;  Та нэвтрэх ID-аа бичнэ үү"
                />
              </div>
              <div className={css.inputPass}>
                <strong className={css.label}> Нууц үг</strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" &#61475;  Та нэвтрэх нууц үгээ оруулна уу"
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
>>>>>>> 80fca2820348758b72b2103bf53a81a2965370c9
  );
};
export default LoginPage;
