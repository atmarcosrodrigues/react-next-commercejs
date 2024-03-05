import Link from "next/link";
import Image from "next/image";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";
import Header from "@/components/Header";
import { getProductInfo, getProductsLink } from "../api/getProductDetails";

export async function getStaticPaths() {
  const paths = await getProductsLink();

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { permalink } = params;
  const product = await getProductInfo(permalink);

  return {
    props: {
      product,
    },
    revalidate: 60,
  };
}

const ProductDetailPage = ({ product }) => {
  return (
    <div>
      <Header />
      <div className="product-detail">
        <img
          className="product-detail__image"
          src={product.image.url}
          alt={product.name}
        />
        <div className="product-detail__info">
          <Link href="/">
            <Image
              className="product__icon"
              src={arrowLeft}
              alt="Back to Products"
              width={48}
              height={48}
            />
            <p>Back to products</p>
          </Link>
          <div className="product-detail__details">
            <h1 className="product-detail__name">{product.name}</h1>
            <div
              className="product-detail__description"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></div>
            <div className="product-detail__price">
              {product.price.formatted_with_symbol}
            </div>
          </div>
        </div>
        <button name="View item" className="product-detail__btn">
          <span>Add to cart</span>
          <Image
            className="product__icon"
            src={arrowRight}
            alt="Add to Cart"
            width={48}
            height={48}
          />
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
