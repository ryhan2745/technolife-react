import { Link } from "react-router-dom";

import { FcRating } from "react-icons/fc";
import { useEffect, useState } from "react";
const SimillarCardSlide = ({
  id,
  name,
  image,
  category,
  price,
  offprice,
  offpercent,
  brand,
  rate,
  isTime,
  technooff,
  endTime,
}) => {
  const toPersianNumber = (num) => {
    const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
    return num.toString().replace(/\d/g, (x) => persianDigits[parseInt(x)]);
  };

  // state تایمر
  const [timer, setTimer] = useState({
    hours: "۰۰",
    minutes: "۰۰",
    seconds: "۰۰",
  });

  // تایمر
  useEffect(() => {
    if (isTime !== "true") return;

    // یه تاریخ تست برای امتحان (تا ۲۴ ساعت دیگه)
    const testEndTime = new Date();
    testEndTime.setHours(testEndTime.getHours() + 24);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const end = testEndTime.getTime();
      const diff = end - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimer({ hours: "۰۰", minutes: "۰۰", seconds: "۰۰" });
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimer({
          hours: toPersianNumber(hours.toString().padStart(2, "0")),
          minutes: toPersianNumber(minutes.toString().padStart(2, "0")),
          seconds: toPersianNumber(seconds.toString().padStart(2, "0")),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isTime]);

  return (
    <>
      <Link to={`/products/${name}`}>
        {technooff == "true" ? (
          <div
            className="border-l border-gray-300  flex justify-center flex-col items-center"
            style={{ fontFamily: "font" }}
          >
            <div
              className={`flex flex-col justify-between items-center p-2 w-11/12  ${offpercent ? "pb-4" : "pb-9"}`}
            >
              <img src={image} alt="" style={{ width: "70%" }} />
              <p
                className="text-center sm:w-9/12 w my-3 text-xs max-h-10 lg:max-h-10 xl:max-h-full"
                style={{ direction: "rtl" }}
              >{`${name.slice(0, 38)}...`}</p>
              <div className="flex justify-between w-full p-1 gap-1 text-xs">
                {offpercent ? (
                  <div className="bg-red-500  flex justify-center items-center me-4 text-white px-2 rounded-2xl">
                    <span className="text-xs">{offpercent}</span>
                  </div>
                ) : (
                  ""
                )}
                <div className="flex gap-1 justify-start items-center">
                  <span className="text-xs">{price}</span>
                  <p className="m-0 text-xs">تومان</p>
                </div>
              </div>
              {offprice ? (
                <div className="flex justify-end w-full gap-1 px-1 ms-6 text-slate-500">
                  <p className="text line-through  text-xs">{offprice}</p>
                  <p className="text-xs">تومان</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        ) : (
          <div
            className="border-l border-gray-300  flex justify-center flex-col items-center"
            style={{ fontFamily: "font" }}
          >
            {isTime == "true" ? (
              <div className="border-b-4 border-red-700 text-red-700 flex justify-between items-center mb-2 sm:w-9/12 w-8/12 mx-auto">
                <p className="text-xs">تکنوآف</p>
                <div className="text-xs">
                  <span>{timer.hours}</span>
                  <span>:</span>
                  <span>{timer.minutes}</span>
                  <span>:</span>
                  <span>{timer.seconds}</span>
                </div>
              </div>
            ) : (
              <div className="mt-7"></div>
            )}
            <div
              className={`flex flex-col justify-between items-center p-2 w-11/12  ${offpercent ? "pb-4" : "pb-9"}`}
            >
              <img src={image} alt="" style={{ width: "70%" }} />
              <p
                className="text-center sm:w-9/12 w my-3 text-xs max-h-10 lg:max-h-10 xl:max-h-full"
                style={{ direction: "rtl" }}
              >{`${name?.slice(0, 30)}...`}</p>
              <div className="flex justify-end w-full p-1 gap-1 text-xs">
                {offpercent ? (
                  <div className="bg-red-500 fixed bottom-9 sm:right-4 right-1 me-4 flex justify-center items-center text-white px-1.5 sm:px-2 rounded-2xl">
                    <span className="text-xs">{offpercent}</span>
                  </div>
                ) : (
                  ""
                )}
                <div className="flex gap-1 justify-start items-center">
                  <span className="text-xs">{price}</span>
                  <p className="m-0 text-xs">تومان</p>
                </div>
              </div>
              {offprice ? (
                <div className="flex justify-end w-full gap-1 px-1 text-slate-500">
                  <p className="text line-through  text-xs">{offprice}</p>
                  <p className="text-xs">تومان</p>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        )}
      </Link>
    </>
  );
};

export default SimillarCardSlide;
