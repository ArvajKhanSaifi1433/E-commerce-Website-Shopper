import React from "react";
import { useParams } from "react-router-dom";
import { useShopContext } from "../Context/ShopContext";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/Description/Description";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

function Product() {
  const { productId } = useParams();
  const { all_product } = useShopContext();
  const [product] = all_product.filter((item) => item.id === Number(productId));
  return (
    <>
      <BreadCrum product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProduct />
    </>
  );
}

export default Product;
