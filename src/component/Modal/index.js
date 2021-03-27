import React from "react";
import css from "./style.module.css";
const Modal = (props) => {
  return (
    <div className={css.Container}>
      <button type="submit" onClick={props.close}>
        Буцах
      </button>
    </div>
  );
};
export default Modal;
