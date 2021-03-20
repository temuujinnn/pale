import React from "react";
import css from "./style.module.css";

const CategoryCard = (props) => {
  return (
    <div className={css.Contaner}>
      <div>
        <img className={css.img} src={props.sda} alt="c1" />
        <div className={css.textToo}>{props.number}</div>
        <div className={css.AmitanNer}>{props.text}</div>
      </div>
    </div>
  );
};
export default CategoryCard;
