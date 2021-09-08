// importing hooks from react-redux & cartActions to dispatch
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { id, title, price, description } = props;

  // dispatch action to add the product in cart
  const dispatch = useDispatch();

  const addItemHandler = () => {
    // JavaScript will automatically seperate keys and value with same name
    const item = { id, title, price, description };
    // Now pass this item as payload
    dispatch(cartActions.addItemToCart(item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
