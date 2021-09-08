// Importing hooks from React
import { useEffect } from "react";

// import hooks from redux toolkit and react-redux
import { useSelector } from "react-redux";
import axios from "axios";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  // Using useSelector to import the specific state property or state from the state slice object
  const showCart = useSelector((state) => state.ui.isCartVisible);
  // Using useSelector to check if there is a change in cart
  const cart = useSelector((state) => state.cart);

  // Check if there is a change in cart item added or removed
  useEffect(() => {
    // Sending an asynchornous Request to the server
    const itemToServer = async () => {
      await axios.put(
        "https://task-8e5d7-default-rtdb.firebaseio.com/cart.json",
        JSON.stringify(cart)
      );
    };
    // Run the async function
    itemToServer();
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
