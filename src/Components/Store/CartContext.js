import React from "react";

const CartContect = React.createContext({
  items: [],
  amount: "",
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContect;
