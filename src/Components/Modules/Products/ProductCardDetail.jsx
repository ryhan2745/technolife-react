import { BsShare } from "react-icons/bs";
import { FaScaleUnbalanced } from "react-icons/fa6";
import { FcRating } from "react-icons/fc";
import { GrFormPrevious } from "react-icons/gr";
import { IoMdHeartEmpty } from "react-icons/io";
import { LuBellRing, LuMessageSquareMore } from "react-icons/lu";
import Slider from "../../Ui/Slider";
import { useNavigate } from "react-router-dom";
import { useshop } from "../../Context/ShopContext";
import { useCallback } from "react";

const ProductCardDetail = ({
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
  simillars,
}) => {
  let { shopings, addShoping, deleteShoping, isIn } = useshop();
  let navigate = useNavigate();

  let clickHandler = useCallback(() => {
    if (isIn(id)) {
      navigate("/shoping");
    } else {
      addShoping(
        {
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
          simillars,
        },
        [isIn],
      );
    }
  });
  return (
    <>
      <div
        className="flex lg:flex-row flex-col-reverse justify-around items-center py-3 w-full mb-10"
        style={{ fontFamily: "font" }}
      >
        <div className="lg:w-3/12 w-full p-4 flex flex-col border border-gray-400 rounded-2xl">
          <div className="flex justify-between p-4 rounded-md">
            <div className="flex justify-center items-center">
              <GrFormPrevious />
              <span>نمایش جزییات</span>
            </div>
            <p>بیمه به کالا اضافه شد</p>
          </div>
          <div className="">
            <div className="flex justify-between items-center w-6/12 mx-auto">
              <p className="text-lg ">{price}</p>
              <p className="line-through text-slate-500 ">{offprice}</p>
            </div>
            <div className=" flex justify-center my-3">
              <button
                className="btn btn-lg px-10 py-3 text-center rounded-lg border-2 border-blue-900 flex items-center justify-between text-blue-900"
                onClick={clickHandler}
              >
                <GrFormPrevious />
                {isIn(id) ? "مشاهده سبد خرید" : "افزودن به سبد خرید"}
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-7/12 w-full p-4 flex md:flex-row flex-col border-gray-400 border rounded-2xl">
          <div className=" w-full md:w-6/12 p-4 flex flex-col items-center">
            <div className="w-full p-1 flex justify-between mb-4">
              <div className="p-2 flex items-center justify-center rounded-sm border-2 border-gray-400 shadow-2xl">
                <IoMdHeartEmpty color="red" size={18} />
              </div>
              <div className="p-2 flex items-center justify-center rounded-sm border-2 border-gray-400 shadow-2xl">
                <FaScaleUnbalanced size={16} />
              </div>
              <div className="p-2 flex items-center justify-center rounded-sm border-2 border-gray-400 shadow-2xl">
                <LuBellRing className="-scale-x-100" />
              </div>
              <div className="p-2 flex items-center justify-center rounded-sm border-2 border-gray-400 shadow-2xl">
                <LuMessageSquareMore />
              </div>
              <div className="p-2 flex items-center justify-center rounded-sm border-2 border-gray-400 shadow-2xl">
                <BsShare className="-scale-x-100" />
              </div>
            </div>
            <div className="mx-auto ">
              <img src={image} alt="" className="w-xs md:w-9/12 mx-auto" />
            </div>
          </div>
          <div className=" w-full md:w-6/12 p-4 flex flex-col">
            <div>
              <p style={{ direction: "rtl" }} className="mb-3">
                {name}
              </p>
            </div>
            <div className=" flex gap-2 justify-end lg:flex-row flex-col">
              <button className="bg-gray-300 btn btn-md p-2 rounded-md text-gray-700 text-sm flex justify-between gap-1 items-center">
                {" "}
                <GrFormPrevious />
                ۴۷ دیدگاه
              </button>
              <button className="bg-blue-200 btn btn-md p-2 rounded-md text-blue-950 text-sm flex justify-between gap-1 items-center">
                {" "}
                <GrFormPrevious />
                خلاصه دیدگاه کاربران
              </button>
            </div>
          </div>
        </div>
      </div>

      {simillars?.length == 0 ? (
        ""
      ) : (
        <div className="w-11/12 mx-auto my-16 flex flex-col">
          <p
            className="text-xl font-bold text-right mb-10"
            style={{ fontFamily: "font" }}
          >
            محصولات مشابه
          </p>
          <Slider slides={simillars} name={"isflagproduct"} />
        </div>
      )}
    </>
  );
};

export default ProductCardDetail;
