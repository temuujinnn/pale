import React from "react";
import css from "./style.module.css";
const Navbar = () => {
  return (
    <div>
      <div className={css.Container}>
        <div className={css.Logo}>Logo</div>
        <div className={css.items}>items </div>
      </div>
    </div>
  );
};
export default Navbar;
