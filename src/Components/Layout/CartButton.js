import classes from "./CartButton.module.css";
const CartButton = (props) => {
  //   const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
  //     return currNumber + item.amount;
  //   }, 0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}></span>
      <span>Your Cart</span>
      <span className={classes.badge}></span>
    </button>
  );
};

export default CartButton;
