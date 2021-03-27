import React from "react";
import css from "./style.module.css";
import { Link } from "react-scroll";
import { CgProfile } from "react-icons/cg";
import { useHistory } from "react-router-dom";
const NavItem = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/adminpanel");
  };
  const handleClick1 = () => {
    history.push("/");
  };
  return (
    <div className={css.Container}>
      <Link
        to="category"
        spy={true}
        smooth={true}
        offset={-340}
        duration={500}
        className={css.Link}
        onClick={handleClick1}
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
        onClick={handleClick1}
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
        onClick={handleClick1}
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
        onClick={handleClick1}
      >
        Холбоо барих
      </Link>
      <div onClick={handleClick} className={css.profileContainer}>
        <CgProfile className={css.profileIcon} />
      </div>
    </div>
  );
};
export default NavItem;
