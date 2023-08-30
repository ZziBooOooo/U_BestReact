import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import CartContext from "../../store/CartData";
import axios from "axios";

import style from "./FoodList.module.css";

const FoodList = (props) => {
  const [mealList, setMealList] = useState([]);
  const cartCtx = useContext(CartContext);

  function addAmount(e) {
    const itemId = e.target.id;

    // input의 value값 찾기
    const inputElement = document.getElementById(`amount-${itemId}`);
    const amount = parseInt(inputElement.value);

    // 버튼 클릭시 해당하는 데이터찾기
    const selectData = mealList.filter((item) => item.id == itemId);

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

  const fetchMeals = useCallback(async () => {
    try {
      const response = await axios.get(
        "https://food-order-3f1f6-default-rtdb.firebaseio.com/Meals.json"
      );
      const data = response.data;
      setMealList(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  return (
    <Card className={style.foodlist}>
      <ul>
        {mealList.map((foodList) => {
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
