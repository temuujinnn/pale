import React from "react";
import Navbar from "../../component/Navbar";
import Main from "../../component/main";
import css from "./style.module.css";
import Category from "../../component/category";
import BodyText from "../../component/bodyText";
import LastAdded from "../../component/LastAdded";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer";
const HomePage = () => {
  return (
    <div className={css.Container}>
      <div className={css.main}>
        <Main />
      </div>
      <div className={css.Nav}>
        <Navbar />
      </div>

      <div className={css.layer}>
        <b>temka sda</b>
      </div>

      <div className={css.Category}>
        <Category />
      </div>
      <div className={css.BodyText}>
        <BodyText />
      </div>
      <div className={css.LastAdded}>
        <LastAdded />
      </div>
      <div className={css.Contact}>
        <Contact />
      </div>
      <div className={css.footer}>
        <Footer />
      </div>
    </div>
  );
};
export default HomePage;
