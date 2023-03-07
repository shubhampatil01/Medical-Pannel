import classes from "./MainNavigation.module.css";
import { Fragment } from "react";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Medical Admin Pannel</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
    </Fragment>
  );
};

export default Header;
