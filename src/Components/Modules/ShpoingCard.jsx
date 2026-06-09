import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";

const ShpoingCard = ({
  id,
  name,
  image,
  category,
  price,
  offprice,
  offpercent,
  brand,
  rate,
  isoff,
  isFlagShip,
  isTime,
}) => {
  return (
    <div className="mx-auto sm:w-12/12 w-10/12 rounded-2xl">
      <div
        className=" flex lg:flex-row flex-col-reverse justify-around items-center py-3 w-full"
        style={{ fontFamily: "font" }}
      >
        <div className="md:w-11/12 lg:w-10/12 xl:w-9/12 2xl:w-8/12 w-full p-2 flex items-center border-gray-400 border rounded-xl">
          <div className="w-7/12 md:w-8/12 lg:w-7/12 p-4 flex flex-col items-center">
            <div className="mx-auto">
              <img src={image} alt="" className="mx-auto" />
            </div>
          </div>
          <div className="w-full p-2 flex flex-col">
            <div>
              <p style={{ direction: "rtl" }} className="mb-3 text-xs">
                {name}
              </p>
            </div>
            <div className="flex sm:flex-row flex-row justify-between items-center w-10/12 mx-auto">
              <p className="text-sm">{price}</p>
              <p className="line-through text-slate-500 ">{offprice}</p>
            </div>
            <div className="flex  flex-row gap-3 justify-between items-center">
              <div className="bg-red-500 flex justify-center items-center text-white sm:w-2/12 w-2/12 px-2 mx-auto rounded-4xl my-3">
                <span className="sm:text-xs text-sm">{offpercent}</span>
              </div>
              <div className="flex justify-center items-center my-3">
                <button
                  className="btn btn-lg border-2 border-red-500 sm:px-3 sm:py-2 p-1 text-xs text-center rounded-lg sm:rounded-xl"
                  onClick={() => {
                    deletShoping(id);
                  }}
                >
                  حذف از سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShpoingCard;
