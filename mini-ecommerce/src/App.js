// Importing hooks from React
import { Fragment, useEffect } from "react";

// import hooks from redux toolkit and react-redux
import { useSelector, useDispatch } from "react-redux";
import { sendCartData } from "./store/cart-actions";
import { fetchCartData } from "./store/cart-actions";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

// variable to stop useEffect from running at start
var isInitial = true;

function App() {
  // Imported dispatch to create actions
  const dispatch = useDispatch();
  // Using useSelector to import the specific state property or state from the state slice object
  const showCart = useSelector((state) => state.ui.isCartVisible);
  // Using useSelector to check if there is a change in cart
  const cart = useSelector((state) => state.cart);
  // Using useSelector to show different notification depending on the current status of async request
  const notification = useSelector((state) => state.ui.notification);
  // Using useSelector to check if the cart data was changed by user or simply by firebase
  // const changed = useSelector((state) => state.cart.changed);
  // fetch the cart data when app is loaded
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  // Check if there is a change in cart item added or removed
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    // Check conditionally from useSelector of wether cart changed or not.
    // We do this check to stop dispatch of sending cart data when the card data is fetched
    // for the first time when website is rendered
    if (cart.changed) {
      // Calling user created action or thunk
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
