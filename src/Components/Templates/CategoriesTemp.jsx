import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryCard from "../Modules/Category/CategoryCard";
import { productFetch } from "../Hooks/UseFetch";
import { useQuery } from "@tanstack/react-query";

const brandsCategory = {
  mobile: ["samsung", "xiaomi", "iphone", "honor"],
  laptop: ["asus", "hp", "acer", "lenovo"],
  instrument: ["رونیکس", "ویوارکس", "براشلس", "اکو"],
  furniture: ["snowa", "xvision"],
  refrigerator: ["snowa", "xvision", "dipoint"],
  accessory: ["samsung", "xiaomi","qcy"]
};

const brandFarsi = {
  samsung: "سامسونگ",
  xiaomi: "شیائومی",
  iphone: "آیفون",
  honor: "آنر",
  asus: "ایسوس",
  hp: "اچ پی",
  acer: "ایسر",
  lenovo: "لنوو",
  snowa: "اسنوا",
  xvision: "ایکس ویژن",
  dipoint: "دیپوینت",
  رونیکس: "رونیکس",
  ویوارکس: "ویوارکس",
  براشلس: "براشلس",
  اکو: "اکو",
  qcy: "کیو سی وای"
};

const CategoriesTemp = ({ searchItems, searchQuery }) => {
  const { key } = useParams();
  const [filter, setFilter] = useState({ brand: "All" });
  
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: productFetch,
  });

  const result = products?.filter(
    (pro) => pro.category?.[0] === key || pro.category?.[1] === key
  );

  const filterproducts = result?.filter((pro) => filter.brand === "All" || pro.brand === filter.brand );

  if (result?.length === 0) {
    return (
      <div className="px-2 py-14 flex justify-center items-center border border-gray-500 my-10 w-5/12 rounded-2xl mx-auto"  style={{fontFamily:"font"}}>
        <p>محصولی یافت نشد</p>
      </div>
    );
  }

  const brandsList = brandsCategory[key] || [];

  return (
    <div className="p-2 flex sm:flex-row flex-col-reverse">
      <div className="grid xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 p-3 w-12/12 sm:w-10/12 my-5"  style={{fontFamily:"font"}}>
        {(searchQuery ? searchItems : filterproducts)?.map((product) => (
          <CategoryCard key={product.id} {...product} />
        ))}
      </div>

      <div className="p-3 w-10/12 mx-auto sm:w-2/12"  style={{fontFamily:"font"}}>
        {brandsList.length > 0 && (
          <select
            className="border border-gray-400 p-3 rounded-2xl w-full mt-10 mx-auto"
            value={filter.brand}
            onChange={(e) => setFilter({ brand: e.target.value })}
          >
            <option value="All">همه برندها</option>
            {brandsList.map((brand) => (
              <option key={brand} value={brand}>
                {brandFarsi[brand] || brand}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
};

export default CategoriesTemp;