import React from "react";
import css from "./style.module.css";
import { Link } from "react-scroll";
const NavItem = () => {
  return (
    <div className={css.Container}>
      <Link
        to="category"
        spy={true}
        smooth={true}
        offset={-340}
        duration={500}
        className={css.Link}
      >
        Төрөл
      </Link>
      <Link
        to="bodytext"
        spy={true}
        smooth={true}
        offset={-240}
        duration={500}
        className={css.Link}
      >
        Танилцуулга
      </Link>
      <Link
        to="lastadded"
        spy={true}
        smooth={true}
        offset={-140}
        duration={500}
        className={css.Link}
      >
        Сүүлд нэмэгдсэн
      </Link>
      <Link
        to="contact"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className={css.Link}
      >
        Холбоо барих
      </Link>
    </div>
  );
};
export default NavItem;
