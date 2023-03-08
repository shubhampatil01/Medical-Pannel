import "./App.css";
import MainNavigation from "./Components/Layout/MainNavigation";
import { Fragment, useState } from "react";
import AddMedicine from "./Components/Medicines/AddMedicine";
import MedicineList from "./Components/Medicines/MedicineList";
import Cart from "./Components/Cart/Cart";

function App() {
  const [medicineList, setMedicineList] = useState([]);
  const addMedicineHandler = (mName, des, qty) => {
    setMedicineList((prevMedicineList) => {
      return [
        ...prevMedicineList,
        {
          medicine: mName,
          description: des,
          amount: qty,
          id: Math.random().toString(),
        },
      ];
    });
  };
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      <MainNavigation onShowCart={showCartHandler} />
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <AddMedicine onAddMedicine={addMedicineHandler} />
      <MedicineList medicines={medicineList} />
    </Fragment>
  );
}

export default App;
