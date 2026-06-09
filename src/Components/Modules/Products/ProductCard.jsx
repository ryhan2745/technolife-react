import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCardDetail from "./ProductCardDetail";

import { productFetch } from "../../Hooks/UseFetch";
import { useQuery } from "@tanstack/react-query";

const ProductCard = () => {
  let { key } = useParams();
  let {
    data: products,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["ptoducts"], queryFn: productFetch });
  let result = products?.filter((pro) => pro.name == key);
  let simillarProduct = products?.filter(
    (pro) =>
      pro.brand == result[0].brand &&
      pro.name != result[0].name &&
      pro.category[0] === result[0].category[0] &&
      pro.category[1] === result[0].category[1],
  );
  return (
    simillarProduct &&
    result?.map((pro) => (
      <ProductCardDetail key={pro.id} {...pro} simillars={simillarProduct} />
    ))
  );
};

export default ProductCard;
