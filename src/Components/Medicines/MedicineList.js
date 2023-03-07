import React from "react";

import Card from "../UI/Card";
import classes from "./MedicineList.module.css";

const MedicineList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.medicines.map((medicines) => (
          <li key={medicines.id}>
            {medicines.name} ({medicines.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MedicineList;
