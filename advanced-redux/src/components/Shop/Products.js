import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const ITEMS = [
  { id: "i1", title: "Book", price: 4, description: "Very nice book!" },
  { id: "i2", title: "Mouse", price: 5, description: "Very nice mounse!" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {ITEMS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
