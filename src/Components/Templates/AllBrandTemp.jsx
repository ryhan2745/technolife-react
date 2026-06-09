import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../Modules/Category/CategoryCard";
import { productFetch } from "../Hooks/UseFetch";
import { useQuery } from "@tanstack/react-query";

const AllBrandTemp = () => {
  let { brandkey, categorykey } = useParams();
  let { data: products } = useQuery({
    queryKey: ["ptoducts"],
    queryFn: productFetch,
  });
  let result = products?.filter((pro) => {
    if (categorykey === "all") {
      return pro.brand == brandkey;
    } else {
      return pro.brand == brandkey && pro.category == categorykey;
    }
  });
  return result?.length == 0 ? (
    <div
      className="px-2 py-14 flex justify-center items-center border border-gray-500 my-10 w-5/12 rounded-2xl mx-auto"
      style={{ fontFamily: "font" }}
    >
      <p>محصولی یافت نشد</p>
    </div>
  ) : (
    <div>
      <div className="p-2 flex sm:flex-row flex-col-reverse">
        <div className="grid xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 p-3 w-12/12 sm:w-10/12 my-5">
          {result?.map((product) => (
            <CategoryCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};
 
export default AllBrandTemp;
