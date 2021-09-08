// Importing hooks from react redux and action from redux
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import classes from "./CartButton.module.css";

const CartButton = (props) => {
  // Using useDispatch to dispatch an action for the state slice
  const dispatch = useDispatch();

  // Cart toggle handler
  const cartToggleHandler = () => {
    dispatch(uiActions.showCartToggler());
  };

  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
