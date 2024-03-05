import Image from "next/image";
import arrowRight from "../assets/arrow-right.svg";

const ProductItem = ({ product }) => {
  return (
    <div className="product">
      <img
        className="product__image"
        src={product.image.url}
        alt={product.name}
      />
      <div className="product__info">
        <h2 className="product__name"> {product.name}</h2>
        <Image
          className="product__icon"
          src={arrowRight}
          alt="More"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
};

export default ProductItem;
