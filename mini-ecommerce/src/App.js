// import hooks from redux toolkit and react-redux
import { useSelector } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  // Using useSelector to import the specific state property or state from the state slice object
  const isCartVisible = useSelector((state) => state.ui.isCartVisible);

  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
