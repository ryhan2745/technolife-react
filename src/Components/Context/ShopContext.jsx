import React, { useCallback, useContext } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
let shopContext = React.createContext();
export const ShopProvider = ({ children }) => {
  let [shopings, setShopings] = useLocalStorage("shopings", []);
  let addShoping = useCallback((product) => {
    setShopings([...shopings, product]);
  });
  let deletShoping = useCallback((id) => {
    let newshop = shopings.filter((item) => item.id !== id);
    setShopings(newshop);
  });
  let isIn = (id) => shopings?.some((item) => item.id === id);
  return (
    <shopContext.Provider value={{ shopings, addShoping, deletShoping, isIn }}>
      {children}
    </shopContext.Provider>
  );
};

export let useshop = () => useContext(shopContext);
