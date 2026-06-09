import { Link } from "react-router-dom";
import { FcRating } from "react-icons/fc";
import ShpoingCard from "../Modules/ShpoingCard";
import { useshop } from "../Context/ShopContext";

const ShopingTemp = () => {
  let { shopings, addShoping, deletShoping, isIn } = useshop();
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-1 items-centerjustify-between sm:w-11/12 w-full mx-auto my-10">
      {shopings && shopings.length >= 1 ? (
        shopings.map((shop) => {
          return (
            <div key={shop.id}>
              <ShpoingCard {...shop} />
            </div>
          );
        })
      ) : (
        <div className="bg-amber-200 mx-auto w-6/12 rounded-2xl py-10 flex justify-center my-20">
          <p className="text-xl" style={{ fontFamily: "font" }}>
            سبد خرید خالی است
          </p>
        </div>
      )}
    </div>
  );
};

export default ShopingTemp;
