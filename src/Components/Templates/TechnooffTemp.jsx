import { useState } from "react";
import CategoryCard from "../Modules/Category/CategoryCard";
import { productFetch } from "../Hooks/UseFetch";
import { useQuery } from "@tanstack/react-query";

const TechnooffTemp = () => {
  let {
    data: products,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["ptoducts"], queryFn: productFetch });
  let technooff = products?.filter((pro) => pro.isTime == "true");
  let [filter, setFilter] = useState({ brand: "All" });
  let filterproduct = technooff?.filter((pro) =>
    filter.brand == "All" ? technooff : pro.brand.includes(filter.brand),
  );
  return (
    <div className="p-2 flex sm:flex-row flex-col-reverse" style={{ fontFamily: "font" }}>
      <div className="grid xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 p-3 w-12/12 sm:w-10/12 my-5">
        {filterproduct?.map((product) => (
          <CategoryCard key={product.id} {...product} />
        ))}
      </div>
      <div className="p-3 w-10/12 mx-auto sm:w-2/12">
        <select
          className="border border-gray-400 p-3 rounded-2xl  w-full mt-10 mx-auto"
          value={filter.brand}
          onChange={(e) => setFilter({ ...filter, brand: e.target.value })}
        >
          <option value="All">All</option>
          <option value="samsung">سامسونگ</option>
          <option value="xiaomi">شیائومی</option>
          <option value="iphone">آیفون</option>
          <option value="honor">آنر</option>
          <option value="asus">ایسوس</option>
          <option value="hp">اچ پی</option>
          <option value="aser">ایسر</option>
          <option value="lenovo">لنوو</option>
          <option value="رونیکس">رونیکس</option>
          <option value="ویوارکس">ویوارکس</option>
          <option value="براشلس">براشلس</option>
          <option value="اکو">اکو</option>
        </select>
      </div>
    </div>
  );
};

export default TechnooffTemp;
