import React from "react";
import css from "./style.module.css";
const Footer = () => {
  return (
    <div className={css.Container}>
      <div className={css.line}></div>
      <div className={css.text}>
        ПАЛЕОНТОЛОГИЙН ХҮРЭЭЛЭН <strong>© 2021</strong>. Бүх эрх хуулиар
        хамгаалагдсан.
      </div>
    </div>
  );
};
export default Footer;
