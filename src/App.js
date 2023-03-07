import "./App.css";
import MainNavigation from "./Components/Layout/MainNavigation";
import { Fragment, useState } from "react";
import AddMedicine from "./Components/Medicines/AddMedicine";
import Medicines from "./Components/Medicines/MedicineList";
import MedicineList from "./Components/Medicines/MedicineList";

function App() {
  const [medicineList, setMedicineList] = useState([]);

  const addMedicineHandler = (mName, des, qty) => {
    setMedicineList((prevMedicineList) => {
      return [
        ...prevMedicineList,
        {
          Medicine: mName,
          Description: des,
          Quantity: qty,
          id: Math.random().toString(),
        },
      ];
    });
  };
  return (
    <Fragment>
      <MainNavigation />
      <AddMedicine onAddMedicine={addMedicineHandler} />
      <MedicineList medicines={medicineList} />
    </Fragment>
  );
}

export default App;
