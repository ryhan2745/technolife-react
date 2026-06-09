import { useRef } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  let icon1 = useRef();
  let icon2 = useRef();
  let icon3 = useRef();
  let icon4 = useRef();
  let icon5 = useRef();
  let content1 = useRef();
  let content2 = useRef();
  let content3 = useRef();
  let content4 = useRef();
  let content5 = useRef();
  let clickHandler = (contentRef, icon) => {
    contentRef.current.classList.toggle("max-h-100");
    contentRef.current.classList.toggle("overflow-visible");
    icon.current.classList.toggle("rotate-180");
  };
  return (
    <>
      <div
        className="bg-blue-800 rounded-lg p-10 w-full mx-auto"
        style={{ fontFamily: "font" }}
      >
        <div className="flex flex-row justify-between items-center sm:mb-20 mb-10 sm:gap-0 gap-5">
          <button className="flex bg-white sm:p-5 p-2 items-center justify-center md:gap-5 gap-1 rounded-xl">
            <IoIosArrowDown className="-scale-100" />
            <p className="text-xs">بازگشت به بالا</p>
          </button>
          <img
            className="lg:w-1/12 md:w-2/12 sm:w-3/12 w-4/12"
            src="/images/static_white_logo_techno.svg"
            alt=""
          />
        </div>
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 py-10 justify-center text-white border-y-2 border-white">
          <div className="access">
            <button
              onClick={() => clickHandler(content1, icon1)}
              className="accesstitle w-full flex sm:border-none border-2 border-gray-400 rounded-md p-3 sm:py-0 justify-between sm:justify-end items-center"
            >
              <IoIosArrowDown
                size={20}
                ref={icon1}
                className="transition-all duration-500 rounded-md sm:hidden"
              />
              <h4 className="sm:text-lg text-xs">پس از خرید</h4>
            </button>
            <div
              ref={content1}
              className="accesslist flex flex-col items-end pe-2 transition-all duration-500  sm:overflow-visible sm:max-h-100 max-h-0 overflow-hidden"
            >
              <a href="#">
                <p className="mt-3  text-xs">تضمین رجیستری</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">رویه‌های بازگرداندن کالا</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">سوالات متداول رجیستری</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">رهگیری سفارش‌ها</p>
              </a>
            </div>
          </div>
          <div className="access">
            <button
              onClick={() => clickHandler(content2, icon2)}
              className="accesstitle w-full flex sm:border-none border-2 border-gray-400 rounded-md p-3 sm:py-0 justify-between sm:justify-end items-center"
            >
              <IoIosArrowDown
                size={20}
                ref={icon2}
                className="transition-all duration-500 rounded-md sm:hidden"
              />
              <h4 className="sm:text-lg text-xs">پیش از خرید</h4>
            </button>
            <div
              ref={content2}
              className="accesslist flex flex-col items-end pe-2 transition-all duration-500  sm:overflow-visible sm:max-h-100 max-h-0 overflow-hidden"
            >
              <a href="#">
                <p className="mt-3  text-xs">راهنمای خرید اقساطی</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">خرید سازمانی</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">راهنمای خرید از تکنولایف</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">روش های خرید از تکنولایف</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">ضمانت هفت‌روزه تکنولایف</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">شیوه‌ها و هزینه ارسال</p>
              </a>
            </div>
          </div>

          <div className="access">
            <button
              onClick={() => clickHandler(content3, icon3)}
              className="accesstitle w-full flex sm:border-none border-2 border-gray-400 rounded-md p-3 sm:py-0 justify-between sm:justify-end items-center"
            >
              <IoIosArrowDown
                size={20}
                ref={icon3}
                className="transition-all duration-500 rounded-md sm:hidden"
              />
              <h4 className="sm:text-lg text-xs">قوانین و مقررات</h4>
            </button>
            <div
              ref={content3}
              className="accesslist flex flex-col items-end pe-2 transition-all duration-500  sm:overflow-visible sm:max-h-100 max-h-0 overflow-hidden"
            >
              <a href="#">
                <p className="mt-3  text-xs">قوانین و مقررات</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">حریم خصوصی کاربران</p>
              </a>
              <a href="#">
                <p className="mt-3 text-xs">از زبان مشتریان تکنولایف</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">چرا تکنولایف؟</p>
              </a>
            </div>
          </div>
          <div className="access">
            <button
              onClick={() => clickHandler(content4, icon4)}
              className="accesstitle w-full flex sm:border-none border-2 border-gray-400 rounded-md p-3 sm:py-0 justify-between sm:justify-end items-center"
            >
              <IoIosArrowDown
                size={20}
                ref={icon4}
                className="transition-all duration-500 rounded-md sm:hidden"
              />
              <h4 className="sm:text-lg text-xs">درباره ما</h4>
            </button>
            <div
              ref={content4}
              className="accesslist flex flex-col items-end pe-2 transition-all duration-500  sm:overflow-visible sm:max-h-100 max-h-0 overflow-hidden"
            >
              <a href="#">
                <p className="mt-3  text-xs">تکنولایف در یک نگاه</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">اهداف و تعهدهای ما</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">سوالات متداول</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">فروشگاه های حضوری</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">تماس با ما</p>
              </a>
            </div>
          </div>

          <div className="access">
            <button
              onClick={() => clickHandler(content5, icon5)}
              className="accesstitle w-full flex sm:border-none border-2 border-gray-400 rounded-md p-3 sm:py-0 justify-between sm:justify-end items-center"
            >
              <IoIosArrowDown
                size={20}
                ref={icon5}
                className="transition-all duration-500 rounded-md sm:hidden"
              />
              <h4 className="sm:text-lg text-xs">دسترسی سریع</h4>
            </button>
            <div
              ref={content5}
              className="accesslist flex flex-col items-end pe-2 transition-all duration-500  sm:overflow-visible sm:max-h-100 max-h-0  overflow-hidden"
            >
              <a href="#">
                <p className="mt-3  text-xs">بلاگ</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">خرید گوشی</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">گوشی سامسونگ</p>
              </a>
              <a href="#">
                <p className="mt-3 text-xs">گوشی آیفون</p>
              </a>
              <a href="#">
                <p className="mt-3   text-xs">گوشی شیائومی</p>
              </a>
              <a href="#">
                <p className="mt-3   text-xs">گوشی پوکو</p>
              </a>
              <a href="#">
                <p className="mt-3   text-xs">مقایسه گوشی</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">خرید لپ تاپ</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">هندزفری بلوتوثی</p>
              </a>
              <a href="#">
                <p className="mt-3  text-xs">لپ تاپ ایسوس</p>
              </a>
            </div>
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse justify-between md:items-center items-end px-5 gap-10 text-white border-b-2 border-white py-20 mt-10">
          <div className="download flex flex-col  gap-10 items-end">
            <h4>دانلود اپلیکیشن ما از:</h4>
            <div className="flex xl:flex-row flex-col gap-5 ">
              <a
                href="#"
                className="bg-white rounded-md px-10 py-3  flex justify-center"
              >
                <img src="/images/footerMayket.webp" alt="" />
              </a>
              <a
                href="#"
                className="bg-white rounded-md px-10 py-3   flex justify-center"
              >
                <img src="/images/footerSibapp.webp" alt="" />
              </a>
              <a
                href="#"
                className="bg-white rounded-md px-10 py-3   flex justify-center"
              >
                <img src="/images/footerBazzar.webp" alt="" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-5 items-end ">
            <h4>شبکه های اجتماعی</h4>
            <div className="flex gap-5">
              <a href="#">
                <img src="/images/footerImgsnd3HZ.webp" alt="" />
              </a>
              <a href="#">
                <img src="/images/footerImgLueLo3.webp" alt="" />
              </a>
              <a href="#">
                <img src="/images/footerImgcHi6f1.webp" alt="" />
              </a>
              <a href="#">
                <img src="/images/footerImg7ujbp2.webp" alt="" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <h4>ارتباط با ما</h4>
            <div className="flex gap-5 mt-3 sm:flex-row">
              <span>
                <a href="02191077500">۰۲۱-۹۱۰۷۷۵۰۰</a>
              </span>
              <span>
                <a href="02158424000">۰۲۱-۵۸۴۲۴۰۰۰</a>
              </span>
              <p>: تلفن</p>
            </div>
            <div className="flex gap-5 sm:flex-row">
              <span>info@technolife.com</span>
              <p>: ایمیل</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
