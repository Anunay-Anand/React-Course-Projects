import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  // Creating temporary Products
  const DUMMY_PRODUCTS = [
    {
      id: "p1",
      price: 6,
      title: "Gallelio",
      description: "The one who saw",
    },
    {
      id: "p2",
      price: 10,
      title: "DA Vinci Code",
      description: "Jack of all trades",
    },
    {
      id: "p3",
      price: 8,
      title: "Gulliver Traverls",
      description: "The gaint man",
    },
  ];

  // Rendering all products as a Product item
  const allProducts = DUMMY_PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      title={product.title}
      price={product.price}
      description={product.description}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{allProducts}</ul>
    </section>
  );
};

export default Products;
