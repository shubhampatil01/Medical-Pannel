import React, { useState, useRef, Fragment } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddMedicine.module.css";

const AddMedicine = (props) => {
  const medicineInputRef = useRef();
  const descriptionInputRef = useRef();
  const quantityInputRef = useRef();

  const [error, setError] = useState();

  const addMedicineHandler = (event) => {
    event.preventDefault();
    const enteredMedicine = medicineInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    if (
      enteredMedicine.trim().length === 0 ||
      enteredDescription.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredQuantity < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }
    props.onAddMedicine(enteredMedicine, enteredDescription, enteredQuantity);
    medicineInputRef.current.value = "";
    descriptionInputRef.current.value = "";
    quantityInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addMedicineHandler}>
          <label htmlFor="medicine">Medicine Name</label>
          <input id="medicine" type="text" ref={descriptionInputRef} />
          <label htmlFor="description">Description</label>
          <input id="description" type="textarea" ref={quantityInputRef} />
          <label htmlFor="quantity">Quantity</label>
          <input id="quantity" type="number" ref={quantityInputRef} />
          <Button type="submit">Add Medicine</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddMedicine;
