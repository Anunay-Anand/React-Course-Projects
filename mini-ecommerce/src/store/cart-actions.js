// importing axios for http requests (http clinet promise based)
import axios from "axios";

// Import actionKeys generated by Redux toolkit for UI
import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

// Creating a thunk for fetch cart data
export const fetchCartData = () => {
  // it returns a function which take dispatch as a param
  return async (dispatch) => {
    try {
      // sending an http request from axios
      const res = await axios.get(
        "https://task-8e5d7-default-rtdb.firebaseio.com/cart.json"
      );
      console.log(res.data.items);
      // dispatch the received data as an action to update the cart
      // 2) We need to make the data we pass into our reducer is not undefined
      dispatch(
        cartActions.replaceCart({
          items: res.data.items || [],
          totalQuantity: res.data.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: `There was some error: ${error.message}`,
        })
      );
    }
  };
};

// Creating a thunk or action creator
export const sendCartData = (cart) => {
  return async (dispatch) => {
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
        JSON.stringify({
          items: cart.cartItems,
          totalQuantity: cart.totalQuantity,
        })
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
          message: `There was some error: ${error.message}`,
        })
      );
    }
  };
};
