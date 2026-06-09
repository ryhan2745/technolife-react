import { useRef, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { categoryElemFetch } from "../Hooks/UseFetch";

const Header = () => {
  let navigate = useNavigate();
  let [searchValue, setSearchValue] = useState("");

  let changeHandler = (e) => {
    let value = e.target.value;
    setSearchValue(value);
  };
  let handleKey = (e) => {
    if (e.key === "Enter") {
      navigate(`/?queries=${searchValue}`);
    }
  };
  let submitHandler = (e) => {
    e.preventDefault();
    navigate(`/?queries=${searchValue}`)
  }
  let inputsm = useRef();
  let clickHandler1 = () => {
    inputsm.current.classList.toggle("max-h-full");
    inputsm.current.classList.toggle("overflow-visible");
  };
  let clickHandler2 = () => {
    inputsm.current.classList.toggle("max-h-0");
    inputsm.current.classList.toggle("overflow-hidden");
  };
  let [isCategoryOpen, setisCategoryOpen] = useState(false);
  let categoryElement = useRef();
  let clickHandler3 = () => {
    setisCategoryOpen(!isCategoryOpen);
  };
  let { data: categoryElem } = useQuery({
    queryKey: ["categoryElem"],
    queryFn: categoryElemFetch,
  });

  let clickHandler4 = (value) => {
    setisCategoryOpen(false);
    navigate(`/categories/${value}`);
  };
  return (
    <>
      <div className="flex flex-col" style={{ fontFamily: "font" }}>
        <img src="/images/head banner.gif" alt="" className="w-full" />
        <div className="flex flex-col-reverse sm:flex-row items-center justify-around gap-3  mt-0 p-4 ">
          <div className="login lg:flex hidden lg:w-3/12 xl:w-2/12 md:w-3/12 sm:w-3/12 w-full justify-between lg:justify-center gap-5">
            <Link to={"/shoping"}>
              <div className="p-2 bg-slate-50 rounded-lg flex justify-center items-center border-2 border-gray-300">
                <FaCartShopping size={18} />
              </div>
            </Link>
            <Link
              to={"/login"}
              className="bg-slate-50 rounded-md px-2 flex justify-center items-center border-2 border-gray-300 text-sm"
            >
              ورود و ثبت نام
            </Link>
          </div>
          <div className="flex items-center md:justify-end justify-between sm:flex-row lg:w-7/12 xl:w-9/12 md:w-9/12  w-full gap-2">
            <button
              onClick={clickHandler1}
              className="border border-gray-500 rounded-lg p-2 col-5/12 sm:hidden"
            >
              <FaSearch size={20} color="gray" />
            </button>
            <div
              ref={inputsm}
              className="fixed top-0 left-0 w-full h-screen z-50 bg-white max-h-0 overflow-hidden"
            >
              <form
                action=""
                className="flex gap-2 w-full h-full p-5 border-b-2 border-gray-200 flex-col"
              >
                <label
                  htmlFor=""
                  className="flex items-center justify-center rounded-lg bg-slate-200 w-full "
                >
                  <div className="flex items-center justify-center p-2">
                    <FaSearch size={20} color="gray" />
                  </div>
                  <input
                    type="text"
                    className="bg-slate-200 w-full p-5 rounded-lg border-none outline-none text-xs"
                    placeholder="جستجو ..."
                  />
                </label>
                <button
                  onClick={clickHandler2}
                  className="cross flex justify-center items-center p-1 mt-3"
                >
                  <FaTimes color="gray" size={18} />
                </button>
              </form>
            </div>
            <form action="" className="form xl:w-6/12 sm:flex hidden w-full" onSubmit={submitHandler}>
              <label htmlFor="" className=" w-full">
                <input
                  type="text"
                  className="bg-slate-200 w-full p-5 rounded-lg border-none outline-none text-xs text-end"
                  onChange={changeHandler}
                  onKeyDown={handleKey}
                  placeholder="محصول و برند و یا دسته مورد نظرتان را جستجو کنید"
                />
              </label>
            </form>
            <img
              src="/images/static_logo_techno_new.svg"
              alt=""
              style={{ width: "80px", height: "50px" }}
            />
          </div>
        </div>
        <nav className="nav1 w-full lg:flex py-2 px-4 gap-3 justify-end hidden">
          <div className="p-1 flex justify-center items-center gap-1">
            <a href="#">
              <span className="text-xs">فروشنده شو</span>
            </a>
          </div>
          <div className="p-1 flex justify-center items-center gap-1">
            <a href="#">
              <span className=" text-xs">خرید طلای دیجیتال</span>
              <i className="fa-solid fa-coins"></i>
            </a>
          </div>
          <div className="p-1 flex justify-center items-center gap-1">
            <a href="#">
              <span className=" text-xs">خرید اقساطی</span>
              <i className="fa-solid fa-sack-dollar"></i>
            </a>
          </div>
          <div className="p-1 flex justify-center items-center gap-1">
            <a href="#">
              <span className=" text-xs">کارت هدیه</span>
              <i className="fa-solid fa-gift"></i>
            </a>
          </div>
          <div className="p-1 flex justify-center items-center gap-1">
            <a href="#">
              <span className=" text-xs">خرید سازمانی</span>
              <i className="fa-solid fa-basket-shopping"></i>
            </a>
          </div>
          <div className="p-1 flex justify-center items-center gap-1">
            <a href="#">
              <span className=" text-xs">تونل زمان</span>
              <i className="fa-solid fa-percent"></i>
            </a>
          </div>
          <div className="product">
            <button
              className="product p-1 flex justify-center items-center gap-1"
              onClick={clickHandler3}
            >
              <a href="#">
                <span className=" text-xs">دسته بندی محصولات</span>
                <i className="fa-solid fa-bars"></i>
              </a>
            </button>
          </div>
        </nav>
        <nav className="nav2 w-full flex items-center justify-around gap-1 bg-white border border-gray-600 p-5  fixed bottom-0 z-50 md:hidden">
          <div>
            <Link
              to={"/shoping"}
              className="flex justify-center items-center gap-3 flex-col "
            >
              <span
                className=" text-xs"
                style={{ color: "grey", fontSize: "10px" }}
              >
                سبد خرید
              </span>
            </Link>
          </div>
          <div>
            <Link
              to={"/login"}
              className="flex justify-center items-center gap-3 flex-col "
            >
              <span
                className=" text-xs"
                style={{ color: "grey", fontSize: "10px" }}
              >
                حساب
              </span>
            </Link>
          </div>
          <div>
            <Link className="flex justify-center items-center gap-3 flex-col ">
              <span
                className=" text-xs"
                style={{ color: "grey", fontSize: "10px" }}
              >
                بلاگ
              </span>
            </Link>
          </div>
          <button onClick={clickHandler3} className=" product2">
            <Link className="flex justify-center items-center gap-3 flex-col ">
              <span
                className=" text-xs"
                style={{ color: "grey", fontSize: "10px" }}
              >
                دسته بندی
              </span>
            </Link>
          </button>
          <div>
            <Link
              to={"/"}
              className="flex justify-center items-center gap-3 flex-col "
            >
              <span
                className=" text-xs"
                style={{ color: "grey", fontSize: "10px" }}
              >
                خانه
              </span>
            </Link>
          </div>
        </nav>
      </div>

      <div
        ref={categoryElement}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${isCategoryOpen ? "bg-black/90 opacity-100" : " pointer-events-none"}`}
      >
        <div
          className={`bg-white rounded-3xl shadow-2xl lg:w-5/12 w-10/12 md:w-7/12 transform transition-all duration-300 ${isCategoryOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-10"}`}
        >
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <button
              onClick={clickHandler3}
              className="p-2 hover:bg-gray-100 rounded-xl"
            >
              <FaTimes size={20} className="text-gray-500" />
            </button>
            <h3
              className="text-lg font-bold text-gray-700"
              style={{ fontFamily: "font" }}
            >
              دسته بندی محصولات
            </h3>
          </div>
          <div className="p-6 grid grid-cols-2 gap-4">
            {categoryElem?.map((item) => (
              <button
                onClick={() => clickHandler4(item.category)}
                key={item.id}
              >
                <div className="p-4 rounded-2xl hover:bg-gray-50 hover:shadow-lg transition-all cursor-pointer ">
                  <img
                    src={item.image}
                    alt=""
                    className="w-20 h-20 mx-auto rounded-2xl shadow-lg hover:scale-105 mb-3"
                  />
                  <p className="text-center text-gray-700 text-sm">
                    {item.category}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
