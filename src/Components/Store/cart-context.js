import React from "react";

const CartContext = React.createContext({
  items: [],
  amount: "",
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
