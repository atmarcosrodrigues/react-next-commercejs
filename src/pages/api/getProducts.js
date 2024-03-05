import { commerce } from "../../lib/commerce";

export async function getProducts() {
  const merchant = await commerce.merchants.about();
  const { data: products } = await commerce.products.list();

  return {
    merchant,
    products,
  };
}
