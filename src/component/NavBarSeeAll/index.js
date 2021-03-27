import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import searchIc from "../../img/search.svg";

const Navbar = () => {
  return (
    <div className={css.Container}>
      <div className={css.Logo}>
        <Logo className={css.realLogo} />
      </div>

      <div className={css.search}>
        <input
          className={css.input}
          type="text"
          placeholder="Та хайх зүйлээ оруулна уу..."
        ></input>
        <button type="submit" className={css.button}>
          <img className={css.img} src={searchIc} alt="s" />
        </button>
      </div>
    </div>
  );
};
export default Navbar;
