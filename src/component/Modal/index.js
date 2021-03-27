import React from "react";
import css from "./style.module.css";
const Modal = (props) => {
  return (
    

      <div className={css.ModalBackdrop}>
        <div className={css.ModalBox}>
        <div className={css.inputlName}>
                <strong className={css.label}>Овог</strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" Хэрэглэгчийн овог"
                />
        </div>  
        <div className={css.inputfName}>
                <strong className={css.label}>Нэр </strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" Хэрэглэгчийн нэр"
                />
        </div>  
        <div className={css.inputName}>
                <strong className={css.label}>Хэрэглэгчийн ID </strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" Хэрэглэгчийн ID оруулнуу"
                />
              </div>
        <div className={css.inputpass}>
                <strong className={css.label}>Нууц үг </strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" Нууц үг"
                />
        </div>    
        <div className={css.inputpass}>
                <strong className={css.label}>Нууц үг давтах </strong>
                <input
                  className={css.input}
                  type="text"
                  placeholder=" Нууц үг "
                />
        </div>    
        
        <div className = {css.inputSelect}>
          <strong className ={css.label}>Хандалтын төрөл</strong>
          <select className ={css.select}  name="position" id="position" >
          <option className ={css.option} value="Admin">Админ</option>
          <option className ={css.option} value="researcher">Судлаач</option>
          <option className ={css.option} value="editor">Эрхлэгч</option>
          <option className ={css.option} value="sanhomrogch">Сан хөтрөгч</option>
          </select>
        </div>
        <button className={css.button} type="submit" onClick={props.close}>
          Буцах
        </button>
        <button className={css.button} type="submit" onClick={props.close}>
          Хадгалах
        </button>


        </div>
      </div>

    
  );
};
export default Modal;
