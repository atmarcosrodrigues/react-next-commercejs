import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductListing from "../components/ProductListing";
import { getProducts } from "./api/getProducts";

export async function getStaticProps() {
  const { merchant, products } = await getProducts();

  return {
    props: {
      merchant,
      products,
    },
  };
}

const Index = ({ merchant, products }) => (
  <div>
    <Header merchant={merchant} />
    <Banner />
    <ProductListing products={products} />
  </div>
);

export default Index;
