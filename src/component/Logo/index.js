import React from "react";
import css from "./style.module.css";
import logoPng from "../../img/logo.png";

const Logo = () => {
  return (
    <>
      <div className={css.wrapper}>
        <img className={css.logo} src={logoPng} alt="Naba god logo" />
        <div className={css.myText}>
          <div className={css.smallText}>
            МОНГОЛ УЛСЫН ШИНЖЛЭХ УХААНЫ АКАДЭМИ
          </div>
          <div className={css.bigText}> ПАЛЕОНТОЛОГИЙН ХҮРЭЭЛЭН</div>
        </div>
      </div>
    </>
  );
};

export default Logo;
