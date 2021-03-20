import React from "react";
import css from "./style.module.css";
import CategoryCard from "../CategoryCard";
import Logo1 from "../../img/c1.png";
import Logo2 from "../../img/c2.png";
import Logo3 from "../../img/c3.png";
import Logo4 from "../../img/c4.png";
import Logo5 from "../../img/c5.png";
import Logo6 from "../../img/c6.png";
import Logo7 from "../../img/c7.png";
import Logo8 from "../../img/c8.png";
const Category = (props) => {
  return (
    <div className={css.Container}>
      <div className={css.Card}>
        <CategoryCard sda={Logo1} text="Үлэг Гүрвэл" number="956" />
        <CategoryCard sda={Logo2} text="Шувуу" number="811" />
        <CategoryCard sda={Logo3} text="Хөхтөн" number="455" />
        <CategoryCard sda={Logo4} text="Яст Мэлхий" number="637" />
        <CategoryCard sda={Logo5} text="Загас" number="744" />
        <CategoryCard sda={Logo6} text="Ургамал" number="956" />
        <CategoryCard sda={Logo7} text="Шавж" number="845" />
        <CategoryCard sda={Logo8} text="Өндөг" number="569" />
      </div>
    </div>
  );
};
export default Category;
