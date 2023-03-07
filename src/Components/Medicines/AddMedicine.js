import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddMedicine.module.css";

const AddMedicine = () => {
  return (
    <React.Fragment>
      <Card className={classes.input}>
        <form>
          <label htmlFor="username">Medicines </label>
          <input id="username" type="text" />
          <label htmlFor="age">Description</label>
          <input id="age" type="textarea" />
          <label htmlFor="college">Quantity</label>
          <input id="college" type="text"></input>
          <Button type="submit">Add +</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};
export default AddMedicine;
