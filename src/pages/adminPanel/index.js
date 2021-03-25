import React from "react";
import css from "./style.module.css";
import Navbar from "../../component/Navbar";
import ResetIc from "../../img/reset.svg";
import Dot from "../../img/three-dots-svgrepo-com.svg";
const AdminPanel = () => {
  return (
    <div className={css.Container}>
      <div className={css.Nav}>
        <Navbar />
      </div>
      <div className={css.box}>
        <div className={css.TopContainer}>
          <div className={css.search}>
            <input
              className={css.searchInput}
              type="text"
              placeholder="&#61442; Нэр, И-майл, ID, Утасны дугаараар хайна уу"
            ></input>
          </div>
          <div className={css.add}>
            <button className={css.Bttn} type="submit">
              Хэрэглэгч нэмэх
            </button>
          </div>
          <div className={css.reastart}>
            <img className={css.img} src={ResetIc} alt="icon" />
          </div>
          <div className={css.option}>
            <img className={css.Dot} src={Dot} alt="dot" />
          </div>
          <div className={css.middleContainer}> middle container</div>
        </div>
      </div>
    </div>
  );
};
export default AdminPanel;
