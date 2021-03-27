import React from "react";
import Navbar from "../../component/Navbar";
import Main from "../../component/main";
import css from "./style.module.css";
import Category from "../../component/category";
import BodyText from "../../component/bodyText";
import LastAdded from "../../component/LastAdded";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";

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
        <p className={css.middleText}>
          Монгол улсын шинжлэх ухааны академи <br /> Палеонтологийн хүрээлэн
        </p>
        <p className={css.san}>бүртгэлийн нэгдсэн сан</p>
        <Link to="loginpage">
          <button className={css.Bttn}>Нэвтрэх</button>
        </Link>
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
