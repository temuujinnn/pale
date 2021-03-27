import React from "react";
import css from "./style.module.css";
import ScrollAnimation from "react-animate-on-scroll";
const CategoryCard = (props) => {
  return (
    <ScrollAnimation animateIn={css.fadeIn} animateOut={css.fadeOut}>
      <div className={css.Container} offset={css.offset}>
        <div>
          <img className={css.img} src={props.sda} alt="c1" />
          <div className={css.textToo}>{props.number}</div>
          <div className={css.AmitanNer}>{props.text}</div>
        </div>
      </div>
    </ScrollAnimation>
  );
};
export default CategoryCard;
