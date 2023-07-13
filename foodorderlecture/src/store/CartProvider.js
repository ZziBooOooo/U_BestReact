import React, { useContext, useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemsIndex];

    let updatedItems;

    // 데이터가 이미 존재하는 경우
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      // 기존배열을 건드리지 않고 새 배열을 만든다.
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    } else {
      // concat은 새 배열 반환 - 기존메모리에 저장된 데이터 변형 X
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    // const updatedTotalAmount = state.totalAmount;
    // const updatedItems = state.items.map((item) => {
    //   if (item.id === action.id) {
    //     item.amount = item.amount - 1;
    //   }
    // });
    // console.log(updatedItems);
    // return {
    //   items: updatedItems,
    //   totalAmount: updatedTotalAmount,
    // };

    const existingCartItemsIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemsIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemsIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  //   const ctx = useContext(CartContext);
  //   console.log(ctx);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
