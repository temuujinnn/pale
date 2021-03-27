import React, { useState } from "react";

import css from "./style.module.css";
import Navbar from "../../component/Navbar";
import ResetIc from "../../img/reset.svg";
import Dot from "../../img/three-dots-svgrepo-com.svg";
import UserCard from "../../component/userCard";
import ModalWindow from "../../component/Modal";
import Modal from "react-modal";
import { Fragment } from "react";
const customStyles = {
  content: {
    left: "50%",
    top: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    height: "80%",
    boxShadow: "0 0 10px rgb(0, 0, 0, 0.25)",
  },
};
Modal.setAppElement("#root");
const AdminPanel = (props) => {
  const [display, setDisplay] = useState(false);
  const close = () => {
    setDisplay(false);
  };
  return (
    <Fragment>
      <Modal
        isOpen={display}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setDisplay(false)}
        style={customStyles}
      >
        <ModalWindow close={close} />
      </Modal>
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
              <button
                onClick={() => setDisplay(true)}
                className={css.Bttn}
                type="submit"
              >
                Хэрэглэгч Нэмэх
              </button>
            </div>
            <div className={css.restart}>
              <img className={css.img} src={ResetIc} alt="icon" />
            </div>
            <div className={css.option}>
              <img className={css.Dot} src={Dot} alt="dot" />
            </div>
          </div>
          <div className={css.middleContainer}>
            <div className={css.Text}>№</div>
            <div className={css.Text}>Овог Нэр</div>
            <div className={css.Text}>И-Мэйл</div>
            <div className={css.Text}>Хэрэглэгч ID</div>
            <div className={css.Text}>Утасны Дугаар</div>
            <div className={css.Text}>Бүртгүүлсэн Огноо</div>
          </div>
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </div>
    </Fragment>
  );
};

export default AdminPanel;
