import React from "react";
import LastAddCard from "../LastAddCard";
import css from "./style.module.css";
import f1 from "../../img/f1.jpg";
import f2 from "../../img/f2.jpg";
import f3 from "../../img/f3.jpg";
import f4 from "../../img/f4.jpg";
const LastAdded = (props) => {
  return (
    <div className={css.Container}>
      <LastAddCard zurag={f1} />
      <LastAddCard zurag={f2} />
      <LastAddCard zurag={f3} />
      <LastAddCard zurag={f4} />
    </div>
  );
};
export default LastAdded;
