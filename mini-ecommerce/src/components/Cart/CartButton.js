// Importing hooks from react redux and action from redux
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  // Using useSelector to get state slice of the total cart quantity
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  // Using useDispatch to dispatch an action for the state slice
  const dispatch = useDispatch();

  // Cart toggle handler
  const cartToggleHandler = () => {
    dispatch(uiActions.showCartToggler());
  };

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
