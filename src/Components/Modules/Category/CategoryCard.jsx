import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
const CategoryCard = ({
  name,
  image,
  price,
  offprice,
  offpercent,
  rate,
  isTime,
}) => {
  return (
    <div
      className="flex flex-col justify-center items-center py-3"
      style={{ fontFamily: "font" }}
    >
      <Link to={`/products/${name}`}>
        <div
          className={`md:w-full w-12/12 flex flex-col justify-center items-center p-2 rounded-2xl border border-slate-400 ${offpercent ? "pb-4" : "pb-7"}`}
        >
          {isTime == "true" ? (
            <div className="border-b-4 border-red-700 text-red-700 flex justify-between items-center mb-2 sm:w-9/12 w-10/12 mx-auto">
              <p className="text-xs">تکنوآف</p>
              <div className="text-xs">
                <span>۲۵</span>
                <span>:</span>
                <span>۰۷</span>
                <span>:</span>
                <span>۰۵</span>
              </div>
            </div>
          ) : (
            <div className="mt-7"></div>
          )}
          <img src={image} alt="" className="md:w-7/12 w-6/12" />
          <p
            className="text-center w-full my-3 text-xs"
            style={{ direction: "rtl" }}
          >{`${name.slice(0, 50)} ...`}</p>
          <div className="w-full flex items-center">
            <span className="mx-1 text-sm">{rate}</span>
            <FcRating />
          </div>
          <div className="flex justify-between w-full my-1.5 p-1">
            <div className="flex gap-1 justify-between items-center">
              <p className="m-0 text-xs">تومان</p>
              <span className="">{price}</span>
            </div>
            {offpercent ? (
              <div className="bg-red-500 flex justify-center items-center text-white px-2 rounded-4xl">
                <span>{offpercent}</span>
              </div>
            ) : (
              <div className="mt-6"></div>
            )}
          </div>
          {offprice ? (
            <div className="flex justify-start w-full gap-1 px-1 text-slate-500 mt-1">
              <p className="text-xs">تومان</p>
              <p className="text line-through  text-xs">{offprice}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
