import React from "react";
import css from "./style.module.css";
import ScrollAnimation from "react-animate-on-scroll";

const LastAddCard = (props) => {
  return (
    <div className={css.Container}>
      <img className={css.img} src={props.zurag} alt="f1" />
      <div className={css.Text}>
        <div>Олдворын нэр:</div>
        <div>Бүртгэлийн дугаар:</div>
        <div>Агууламж:</div>
        <div>Сан хөмрөгийн байршил:</div>
        <div>Тоо, дүрс:</div>
      </div>
    </div>
  );
};
export default LastAddCard;
