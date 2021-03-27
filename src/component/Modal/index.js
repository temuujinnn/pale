import React from "react";
import css from "./style.module.css";
const Modal = (props) => {
  return (
    <div className={css.Container}>
      <div className={css.ModalBackdrop}>
        <div className={css.ModalBox}>
          <button type="submit" onClick={props.close}>
            Буцах
          </button>
        </div>
      </div>
    </div>
  );
};
export default Modal;
