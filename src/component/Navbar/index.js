import React from "react";
import css from "./style.module.css";
import NavItem from "../../component/NavbarItem";
import Logo from "../Logo";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <div>
      <div className={css.Container}>
        <div className={css.Logo}>
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Logo className={css.realLogo} />
          </Link>
        </div>

        <div className={css.items}>
          <NavItem />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
