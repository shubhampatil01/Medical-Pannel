import "./App.css";
import MainNavigation from "./Components/Layout/MainNavigation";
import { Fragment } from "react";
import AddMedicine from "./Components/Medicines/AddMedicine";

function App() {
  return (
    <Fragment>
      <MainNavigation />
      <AddMedicine />
    </Fragment>
  );
}

export default App;
