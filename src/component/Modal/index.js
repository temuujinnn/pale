import React from "react";
import css from "./style.module.css";
const Modal = (props) => {
  return (
    <div className={css.Container}>

      <div className={css.ModalBackdrop}>
        <div className={css.ModalBox}>
        <div className={css.inputPass}>
                <strong className={css.label}>Овог</strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder="   Та нэвтрэх нууц үгээ оруулна уу"
                />
        </div>  
        <div className={css.inputName}>
                <strong className={css.label}>Нэр </strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder="   Та нэвтрэх ID-аа бичнэ үү"
                />
        </div>  
        <div className={css.inputName}>
                <strong className={css.label}>Таны ID </strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" Та нэвтрэх ID-аа бичнэ үү"
                />
        </div>    
        <div className={css.inputName}>
                <strong className={css.label}>Таны ID </strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" Та нэвтрэх ID-аа бичнэ үү"
                />
              </div>
        <div className = {css.inputSelect}>
          <select name="position" id="position" >
          <option value="Admin">Админ</option>
          <option value="researcher">Судлаач</option>
          <option value="editor">Эрхлэгч</option>
          <option value="sanhomrogch">Сан хөтрөгч</option>
          </select>
        </div>
          <button type="submit" onClick={props.close}>
            Буцах
          </button>
        </div>
      </div>

      <button type="submit" onClick={props.close}>
        Буцах
      </button>

    </div>
  );
};
export default Modal;
