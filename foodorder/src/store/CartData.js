import React, { useState, useEffect } from "react";

const CartContext = React.createContext({
  cartData: {},
});

export const CartContextProvider = (props) => {
  const [cartData, setCartData] = useState([]);

  return (
    <CartContext.Provider
      value={{ cartData: cartData, setCartData: setCartData }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
