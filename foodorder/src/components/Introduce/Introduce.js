import React from "react";

import Card from "../../UI/Card/Card";

import style from "./Introduce.module.css";

const Introduce = () => {
  return (
    <div className={style.introduce_Box}>
      <Card className={style.intro_card}>
        <h2>Delicious Food, Delivered To You </h2>
        <p>
          Choose your favorite meal from our broad selection of availavle meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All out meals are cooked with high-quality ingredients, just-in-time
          and or course by experienced chefs!
        </p>
      </Card>
    </div>
  );
};

export default Introduce;
