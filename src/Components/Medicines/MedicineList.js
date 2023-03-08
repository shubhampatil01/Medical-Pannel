import React, { useContext } from "react";
import CartContext from "../Store/cart-context";

import Card from "../UI/Card";
import classes from "./MedicineList.module.css";

const MedicineList = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <Card className={classes.users}>
      <ul>
        {cartCtx.items.map((medicines) => (
          <li key={medicines.id}>
            {`${medicines.medicine} ${medicines.description} Quantity
            ${medicines.amount}`}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MedicineList;
