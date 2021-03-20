import React from "react";
import css from "./style.module.css";
import NavItem from "../../component/NavbarItem";
const Navbar = () => {
  return (
    <div>
      <div className={css.Container}>
        <div className={css.Logo}>Logo sda nabaaaa jhbvlhkvui</div>
        <div className={css.items}>
          <NavItem />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
