import React from "react";
import css from "./style.module.css";
import fbLogo from "../../img/facebook-circular-logo.svg";
const Contact = () => {
  return (
    <div className={css.Container} id="contact">
      <div className={css.holboos}>
        <h3 className={css.garchig}>Холбоос</h3>
        <p className={css.text}>Нүүр</p>
        <p className={css.text}>Төрөл</p>
        <p className={css.text}>Танилцуулга</p>
        <p className={css.text}>Сүүлд нэмэгдсэн</p>
        <p className={css.text}>Холбоо барих</p>
      </div>
      <div className={css.holbooBarih}>
        <h3 className={css.garchig}>Холбоо барих</h3>
        <p className={css.text}>
          ШУА-ийн Палеонтологийн хүрээлэн Улаанбаатар-15160, Данзангийн гудамж
          3/1, Ш/Х-46/650
        </p>
        <p className={css.text}>Утас: +(976) 70118283</p>
        <p className={css.text}>И-мэйл: paleo@mas.ac.mn</p>
        <p className={css.text}>Вебсайт: paleo.ac.mn</p>
      </div>
      <div className={css.social}>
        <h3 className={css.garchig}>Олон нийтийн сүлжээ</h3>
        <img className={css.img} src={fbLogo} alt="fb" />
      </div>
    </div>
  );
};
export default Contact;
