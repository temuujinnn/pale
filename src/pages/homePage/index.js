import React from "react";
import Navbar from "../../component/Navbar";
import Main from "../../component/main";
import css from "./style.module.css";
import Category from "../../component/category";
const HomePage = () => {
  return (
    <div className={css.Container}>
      <div className={css.Nav}>
        <Navbar />
      </div>
      <div className={css.main}>
        <Main />
      </div>
      <div className={css.Category}>
        <Category />
      </div>
    </div>
  );
};
export default HomePage;
