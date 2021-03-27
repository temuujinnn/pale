import React from "react";
import css from "./style.module.css";

const LastAddCard = (props) => {
  return (
    <div className={css.Container}>
      <img className={css.img} src={props.zurag} alt="f1" />
      <div className={css.Text}>
        <div>Олдворын нэр:</div>
        <div>Бүртгэлийн дугаар:</div>
        <div>Тоо, Ширхэг:</div>
      </div>
    </div>
  );
};
export default LastAddCard;
