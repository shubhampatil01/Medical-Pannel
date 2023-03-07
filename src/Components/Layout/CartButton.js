import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";
const CartButton = (props) => {
  //   const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
  //     return currNumber + item.amount;
  //   }, 0);
  return (
    <button className={classes.button}>
      <span className={classes.icon}></span>
      <CartIcon />
      <span>Your Cart</span>
      <span className={classes.badge}></span>
    </button>
  );
};

export default CartButton;
