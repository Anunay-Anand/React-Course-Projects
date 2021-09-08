// Importing hooks from React
import { Fragment, useEffect } from "react";

// import hooks from redux toolkit and react-redux
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "./store/ui-slice";
import axios from "axios";

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

  // Check if there is a change in cart item added or removed
  useEffect(() => {
    // Sending an asynchornous Request to the server
    const sendCartData = async () => {
      // Loading Starts Here (dispatching notification to redux or state slice)
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "Sending cart Data",
        })
      );
      // Sending put request to the server with axios
      try {
        await axios.put(
          "https://task-8e5d7-default-rtdb.firebaseio.com/cart.json",
          JSON.stringify(cart)
        );
        // Dispatching success message on succesful run of function
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!",
            message: "Sent cart data successfully!",
          })
        );
      } catch (error) {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: "Error!",
            message: error.message,
          })
        );
      }
    };
    if (isInitial) {
      isInitial = false;
      return;
    }

    // Run the async function
    sendCartData();
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
