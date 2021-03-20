import React from "react";
import css from "./style.module.css";
const NavItem = () => {
  return (
    <div className={css.Container}>
      <div>Төрөл</div>
      <div>Танилцуулга</div>
      <div>Сүүлд нэмэгдсэн</div>
      <div>Холбоо барих</div>
    </div>
  );
};
export default NavItem;
