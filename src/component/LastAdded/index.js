import React from "react";
import LastAddCard from "../LastAddCard";
import css from "./style.module.css";
import f1 from "../../img/f1.jpg";
import f2 from "../../img/f2.jpg";
import f3 from "../../img/f3.jpg";
import f4 from "../../img/f4.jpg";
import ScrollAnimation from "react-animate-on-scroll";
import { HiArrowCircleDown } from "react-icons/hi";
import { AiOutlinePlusCircle } from "react-icons/ai";

const LastAdded = (props) => {
  return (
    <ScrollAnimation
      animateIn={css.fadeIn}
      animateOut={css.fadeOut}
      offset={css.offset}
    >
      <div className={css.Container} id="lastadded">
        <LastAddCard zurag={f1} />
        <LastAddCard zurag={f2} />
        <LastAddCard zurag={f3} />
        <LastAddCard zurag={f4} />
        <button className={css.plusButton}>
          {" "}
          <AiOutlinePlusCircle className={css.plusIcon} />
          <p>Олдвор нэмэх</p>
        </button>
      </div>

      <div className={css.seeAll}>
        <p className={css.text}>Бүх олдворыг харахыг хүсвэл энд дарна уу.</p>
        <HiArrowCircleDown className={css.myIcon} />
      </div>
    </ScrollAnimation>
  );
};
export default LastAdded;
