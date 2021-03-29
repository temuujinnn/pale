import React from "react";
import css from "./style.module.css";
const AddModal = (props) => {
  return (
    <div className={css.Container}>
      <form className={css.ModalBox}>
        <h1 className={css.text}>Олдвор Бүртгэх</h1>
        <label> Зураг</label>
        <div className={css.zurag}>
          <input className={css.fileInput} type="file" />
          <img className={css.myPreview} alt="Image Pre" />
        </div>
        <label>Нэгдсэн Дугаар:</label>
        <input className={css.input} type="text"></input>
        <label>Хүрээний Дугаар:</label>
        <input className={css.input} type="text"></input>
        <label>СӨТ-д бүртгэсэн огноо:</label>
        <input className={css.input} type="text"></input>
        <label>Дэлгэрэнгүй бүртгэлийн Дугаар:</label>
        <input className={css.input} type="text"></input>
        <label>Төрөлжүүлсэн Дугаар:</label>
        <input className={css.input} type="text"></input>
        <label>Бүртгэлийн Дугаар:</label>
        <input className={css.input} type="text"></input>
        <label>Нэвтрэх Дугаар:</label>
        <input className={css.input} type="text"></input>
        <label>Олдворын овгийн болон зүйлийн нэрс:</label>
        <input className={css.input} type="text"></input>
        <label>Нас:</label>
        <input className={css.input} type="text"></input>
        <label className={css.label}>Олдсон он:</label>
        <input className={css.input} type="text"></input>
        <label className={css.label}>
          Олдворт агуулагдаж байгаа ясны байдал:
        </label>
        <input className={css.input} type="text"></input>
        <label className={css.label}>Олсон хүний нэр:</label>
        <input className={css.input} type="text"></input>
        <label className={css.label}>Тодорхойлосон хүний нэр:</label>
        <input className={css.input} type="text"></input>
        <label className={css.label}>
          Олдвор хадгалагдаж байгаа газрын байршил:
        </label>
        <input className={css.input} type="text"></input>
        <label className={css.label}>Анхны хэвлэгдсэн материал:</label>
        <input className={css.input} type="text"></input>
        <label className={css.label}>Анги:</label>
        <input className={css.input} type="text"></input>
        <label className={css.label}>Бүртгэлийн дугаар өгөгдсөн огноо:</label>
        <input className={css.input} type="text"></input>
        <label className={css.label}>Нэмэлт тайлбар:</label>
        <input className={css.input} type="text"></input>
        <div className={css.buttonContainer}>
          <button className={css.button} type="submit" onClick={props.close}>
            хадгалах
          </button>
          <button className={css.button} type="submit" onClick={props.close}>
            Буцах
          </button>
        </div>
      </form>
    </div>
  );
};
export default AddModal;
