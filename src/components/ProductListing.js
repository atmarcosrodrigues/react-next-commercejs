import Link from "next/link";
import ProductItem from "./ProductItem";

const ProductListing = ({ products }) => (
  <div className="products" id="products">
    {products.map((product) => (
      <Link href={`/product/${product.permalink}`} key={product.id}>
        <ProductItem product={product} />
      </Link>
    ))}
  </div>
);

export default ProductListing;
