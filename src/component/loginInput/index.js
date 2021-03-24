import React from "react";
import css from "./style.module.css";
const LoginInput = () => {
  return (
    <div className={css.box}>
      <label>
        <strong>Таны хэрэглэгчийн дугаар</strong>
      </label>

      <input
        placeholder="Та хэрэглэгчийн дугаар оруулна уу"
        className={css.input}
      ></input>
      <label>
        <strong>Нууц үг</strong>
      </label>

      <input placeholder="Нууц үг оруулна уу" className={css.input}></input>
      <div className={css.check}>
        <input type="checkbox" />
        <label>Намайг сана</label>
      </div>
      <button className={css.Bttn}>Нэвтрэх</button>
    </div>
  );
};
export default LoginInput;
