import React from "react";
import css from "./style.module.css";
import Background from "../../img/login.jpg"
import Logo from "../../component/Logo"
const LoginPage = () => {
  return (
    <div className = {css.all}>
      <div className={css.Container}>
        <img  className = { css.img} src = {Background} alt ="zurag"/>
         <div className={css.logo}>
          <Logo/>
          </div>
        <div className = {css.form}>
          <p>Нэвтрэх</p>
          <b>Таны нэр:</b>
            <input type="text" className={css.input} placeholder="Та нэвтрэх нэрээ бичнэ үү" />
           <b>Нууц үг:</b>  
            <input type="text" className={css.input} placeholder="Та нууц үгээ оруулна уу"/>
          </div>
          <p className = {css.p}>Хэрвээ та анх удаа нэвтэрч байгаа бол мэдээллийн ажилтантай холбогдож бүртгүүлнэ үү.</p>
      </div>
    </div>
  );
};
export default LoginPage;
