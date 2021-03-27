import React from "react";
import css from "./style.module.css";
import Hero from "../../img/hero.jpg";
const Main = () => {
  return (
    <div className={css.Container} id="main">
      <img src={Hero} alt="hero" />
    </div>
  );
};
export default Main;
