import { commerce } from "../../lib/commerce";

export async function getProductDetails() {
  const merchant = await commerce.merchants.about();
  const { data: products } = await commerce.products.list();

  return {
    merchant,
    products,
  };
}

export async function getProductsLink() {
  const { data: products } = await commerce.products.list();

  return products.map((product) => ({
    params: {
      permalink: product.permalink,
    },
  }));
}

export async function getProductInfo(permalink) {
  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return product;
}
