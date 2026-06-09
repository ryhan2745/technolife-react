import { useEffect, useMemo, useState } from "react";
import HomeDetail from "../Modules/HomeDetail";
import { useLocation } from "react-router-dom";
import CategoriesTemp from "../Templates/CategoriesTemp";
import { categoryElemFetch } from "../Hooks/UseFetch";
import { useQueries, useQuery } from "@tanstack/react-query";
import {
  BannerFetch,
  brandsFetch,
  categoryFetch,
  FurnitureFetch,
  productFetch,
  vblogFetch,
} from "../Hooks/UseFetch";
const HomeTemp = () => {
  let {
    data: products,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["ptoducts"], queryFn: productFetch });
  let filterData = useMemo(() => {
    if (!products) {
      return {};
    } else {
      return {
        mobileproducts: products?.filter((pro) => pro.isFlagShip == "true"),
        laptop: products?.filter((pro) => pro.category == "laptop"),
        instruments: products?.filter((pro) => pro.category == "instrument"),
        computers: products?.filter((pro) => pro.category == "computer"),
        accessory: products?.filter((pro) => pro.category[0] == "accessory"),
        furnitures: products?.filter((pro) => pro.category[0] == "furniture"),
        technooff: products?.filter((pro) => pro.isTime == "true"),
      };
    }
  });

  let { data: banners } = useQuery({
    queryKey: ["banners"],
    queryFn: BannerFetch,
  });
  let { data: category } = useQuery({
    queryKey: ["category"],
    queryFn: categoryFetch,
  });

  let { data: vblogs } = useQuery({
    queryKey: ["vblogs"],
    queryFn: vblogFetch,
  });

  let { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: brandsFetch,
  });
  let { data: furniturescategory } = useQuery({
    queryKey: ["furniturescategory"],
    queryFn: FurnitureFetch,
  });
  let { search } = useLocation();
  let SearchUrl = new URLSearchParams(search);
  let searchQuery = SearchUrl.get("queries");
  let searchItems = products?.filter((pro) => {
    if (!searchQuery) {
      return false;
    }
    let query = searchQuery.toLocaleLowerCase();
    return (
      pro.name?.toLocaleLowerCase().includes(query) ||
      pro.brand?.toLocaleLowerCase().includes(query) ||
      pro.category?.some((cat) => cat.toLocaleLowerCase().includes(query))
    );
  });
  return searchQuery ? (
    <CategoriesTemp searchItems={searchItems} searchQuery={searchQuery} />
  ) : (
    <HomeDetail
      banners={banners}
      category={category}
      product={filterData.mobileproducts}
      laptop={filterData.laptop}
      instrument={filterData.instruments}
      brands={brands}
      computers={filterData.computers}
      furniturescategory={furniturescategory}
      accessory={filterData.accessory}
      technooff={filterData.technooff}
      furnitures={filterData.furnitures}
      vblogs={vblogs}
    />
  );
};

export default HomeTemp;
