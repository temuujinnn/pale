import React from "react";
import css from "./style.module.css";
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
  );
};
export default LoginPage;
