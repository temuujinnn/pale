import React from "react";
import css from "./style.module.css";
import { Link } from "react-router-dom";
const NavItem = () => {
  return (
    <div className={css.Container}>
      <Link className={css.Link} to="/loginpage">
        Төрөл
      </Link>
      <Link className={css.Link} to="/loginpage">
        Танилцуулга
      </Link>
      <Link className={css.Link} to="/loginpage">
        Сүүлд нэмэгдсэн
      </Link>
      <Link className={css.Link} to="/loginpage">
        Холбоо барих
      </Link>
    </div>
  );
};
export default NavItem;
