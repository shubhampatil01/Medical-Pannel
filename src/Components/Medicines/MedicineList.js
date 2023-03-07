import React from "react";

import Card from "../UI/Card";
import classes from "./MedicineList.module.css";

const MedicineList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.medicines.map((medicines) => (
          <li key={medicines.id}>
            {`${medicines.Medicine} ${medicines.Description} Quantity
            ${medicines.Quantity}`}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MedicineList;
