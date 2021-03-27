import React from "react";
import NavbarSeeAll from "../../component/NavBarSeeAll";
import css from "./style.module.css";
import Card from "../../component/Card";
const dataNer = [
  {
    id: 1,
    name: "temka",
  },
  {
    id: 2,
    name: "naba",
  },
  {
    id: 3,
    name: "suvdaa",
  },
  {
    id: 4,
    name: "urnaa",
  },
  {
    id: 5,
    name: "urnaa",
  },
  {
    id: 6,
    name: "urnaa",
  },
  {
    id: 7,
    name: "urnaa",
  },
  {
    id: 8,
    name: "urnaa",
  },
];

const SeeAll = (props) => {
  return (
    <>
      <div className={css.Nav}>
        <NavbarSeeAll />
      </div>
      <div className={css.Container}>
        <div className={css.box}>
          {dataNer.map((el, ind) => {
            return (
              <div className={css.item}>
                <Card key={el} ner={el.name} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default SeeAll;
