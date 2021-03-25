import React from "react";
import css from "./style.module.css";
import Zurag from "../../img/f2.jpg";

const Card = (props) => {
  return (
    <div className={css.Container}>
      <img className={css.img} src={Zurag} alt="f1" />
      <div className={css.Text}>
        <div>Олдворын нэр: {props.ner}</div>
        <div>Бүртгэлийн дугаар:</div>
        <div>Тоо, Ширхэг:</div>
      </div>
    </div>
  );
};
export default Card;
