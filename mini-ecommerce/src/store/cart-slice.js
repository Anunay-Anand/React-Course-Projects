// importing the redux toolkit
import { createSlice } from "@reduxjs/toolkit";

// Defining the initial state object
const cartInitialState = { cartItems: [], totalQuantity: 0 };

// Creating out first slice or redux functions to manage cart actions
const cartReducer = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItemToCart(state, action) {
      // Always increase the quantity by one
      state.totalQuantity++;
      // extracting the item from payload which is in the form of an object
      const newItem = action.payload;
      // Check if the item already exists
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      // If item does not exist then push it
      if (!existingItem) {
        // simply push the item as imux works in back end and will make sure the previous state is not mutated
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        // Longer Method
        // Replace it in state
        // const updatedItem = {
        //   ...existingItem,
        //   quantity: existingItem.quantity++,
        //   totalPrice: existingItem.price + newItem.price,
        // };
        // state[existingItem.id] = updatedItem;
        // Easier Method
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      // Always decrease the item quantity one
      state.totalQuantity--;
      // Extract the id from payload
      const id = action.payload;
      // Check if the item exists
      const existingItem = state.cartItems.find((item) => item.id === id);
      // If only one item exist
      if (existingItem.quantity === 1) {
        // We keep all the item whose id does not match existingItem id
        state.items.filter((item) => item.id !== id);
      } else {
        // If the item exist more than one
        // Decrease the quantity by one and decrease the amount by 1 item
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

// Creating a thunk or action creator
const sendCartData = (cardData) => {
  return (dispatch) => {
    dispatch();
  };
};

// Exporting the action keys for dispatching action from components
export const cartActions = cartReducer.actions;

// Exporting slice reducer for store
export default cartReducer;
