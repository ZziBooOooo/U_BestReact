import React, { useContext, useRef } from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import CartContext from "../../store/CartData";

import style from "./FoodList.module.css";

const DUMMY_MEALS = [
  { id: "m1", name: "Sushi", des: "Finest fish and veggles", price: 22.99 },
  { id: "m2", name: "Schnitzel", des: "A germaan specialty!", price: 16.5 },
  {
    id: "m3",
    name: "Barbecue Burger",
    des: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    des: "Healthy, green",
    price: 18.99,
  },
];

const FoodList = (props) => {
  const cartCtx = useContext(CartContext);

  function addAmount(e) {
    const itemId = e.target.id;

    // input의 value값 찾기
    const inputElement = document.getElementById(`amount-${itemId}`);
    const amount = parseInt(inputElement.value);

    // 버튼 클릭시 해당하는 데이터찾기
    const selectData = DUMMY_MEALS.filter((item) => item.id == itemId);

    //context에서 이미 있는 값 있는지 판별
    const existData = cartCtx.cartData.filter((item) => item.id == itemId);
    console.log(existData);

    if (!existData.length) {
      // 저장될 데이터에 개수도 같이 저장 (데이터 새로 추가)
      selectData[0].amount = amount;
      cartCtx.setCartData((prev) => {
        return [...prev, ...selectData];
      });
    } else {
      // 기존데이터가 있다면 개수 증가
      const existDataAmount = parseInt(existData[0].amount);
      existData[0].amount = existDataAmount + amount;
    }
  }
  return (
    <Card className={style.foodlist}>
      <ul>
        {DUMMY_MEALS.map((foodList) => {
          return (
            <div key={foodList.id}>
              <li>
                <div>
                  <p>{foodList.name}</p>
                  <p>{foodList.des}</p>
                  <p>{foodList.price}</p>
                </div>
                <div>
                  <div>
                    <span>Amount</span>
                    <input
                      type="number"
                      defaultValue="1"
                      id={`amount-${foodList.id}`}
                    ></input>
                  </div>
                  <Button
                    className={style.addBtn}
                    onClick={addAmount}
                    id={foodList.id}
                  >
                    +Add
                  </Button>
                </div>
              </li>
              <hr />
            </div>
          );
        })}
      </ul>
    </Card>
  );
};

export default FoodList;
