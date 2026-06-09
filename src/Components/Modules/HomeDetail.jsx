import { GrFormPrevious } from "react-icons/gr";
import Slider from "../Ui/Slider";
import { Link } from "react-router-dom";
import FurnituresCard from "../Elements/FurnituresCard";

const HomeDetail = ({
  banners,
  category,
  product,
  laptop,
  instrument,
  brands,
  computers,
  furniturescategory,
  accessory,
  technooff,
  furnitures,
  vblogs,
}) => {
  return (
    <>
      <div className="my-5 w-full">
        <Slider slides={banners} name={"banner"} />
      </div>
      <div className="w-11/12 mx-auto my-5">
        <Slider slides={category} name={"category"} />
      </div>
      <div
        className="w-11/12 border border-gray-400 my-10 rounded-2xl mx-auto flex flex-col items-end pt-3 px-3 gap-1"
        style={{ fontFamily: "font" }}
      >
        <div className="flex w-full justify-between items-center md:px-12 px-2 py-3 rounded-2xl bg-red-700 text-white">
          <Link to={`/technooff`}>
            <div className="flex justify-between items-center">
              <GrFormPrevious />
              <p className="md:text-sm text-xs">نمایش همه</p>
            </div>
          </Link>
          <h3 className="md:text-lg text-xs font-bold">تکنواف</h3>
        </div>
        <div className="w-12/12 mx-auto pb-3 mt-5">
          <Slider
            slides={technooff}
            name={"isflagproduct"}
            technooff={"true"}
          />
        </div>
      </div>
      <div className="flex justify-between gap-5 lg:flex-row flex-col w-11/12 mx-auto my-14">
        <img
          src="/images/images3.webp"
          alt=""
          className="rounded-2xl lg:w-2/6 w-full"
        />
        <img
          src="/images/images2.webp"
          alt=""
          className="rounded-2xl lg:w-2/6 w-full"
        />
        <img
          src="/images/images1.webp"
          alt=""
          className="rounded-2xl lg:w-2/6 w-full"
        />
      </div>
      <div
        className="w-11/12 border border-gray-400 my-10 rounded-2xl mx-auto flex flex-col items-end pt-5 gap-1"
        style={{ fontFamily: "font" }}
      >
        <div className="flex w-full justify-between items-center md:px-12 px-2">
          <Link to={`/categories/mobile`}>
            <div className="flex justify-between items-center">
              <GrFormPrevious />
              <p className="md:text-sm text-xs">نمایش همه</p>
            </div>
          </Link>
          <h3 className="md:text-lg text-xs font-bold">پرچمداران هوشمند</h3>
        </div>
        <div className="w-12/12 mx-auto pb-3 mt-5">
          <Slider slides={product} name={"isflagproduct"} />
        </div>
      </div>
      <div className="flex justify-between gap-5 lg:flex-row flex-col w-11/12 mx-auto my-14">
        <img
          src="/images/images6.webp"
          alt=""
          className="rounded-2xl lg:w-2/6 w-full"
        />
        <img
          src="/images/images5.webp"
          alt=""
          className="rounded-2xl lg:w-2/6 w-full"
        />
        <img
          src="/images/images4.webp"
          alt=""
          className="rounded-2xl lg:w-2/6 w-full"
        />
      </div>

      <div
        className="box3 flex flex-col w-[90%] mx-auto justify-center items-center"
        style={{ fontFamily: "font" }}
      >
        <h4 className="text-xl">برترین های موبایل</h4>
        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 mt-6  w-[80%] mx-auto">
          <Link to={`/brands/xiaomi/mobile`}>
            <div className="flex flex-col justify-center items-center ">
              <img src="/images/static_phone_xiaomi_new.webp" alt="" />
              <p className="text-sm">شیائومی</p>
            </div>
          </Link>
          <Link to={`/brands/honor/mobile`}>
            <div className="flex flex-col justify-center items-center ">
              <img src="/images/static_phone_honor_new.webp" alt="" />
              <p className="text-sm">آنر</p>
            </div>
          </Link>
          <Link to={`/brands/iphon/mobile`}>
            <div className="flex flex-col justify-center items-center">
              <img src="/images/static_phone_iphone_new.webp" alt="" />
              <p className="text-sm">آیفون</p>
            </div>
          </Link>
          <Link to={`/brands/poko/mobile`}>
            <div className="flex flex-col justify-center items-center ">
              <img src="/images/static_phone_poco_new.webp" alt="" />
              <p className="text-sm">پوکو</p>
            </div>
          </Link>
          <Link to="/brands/samsung/mobile">
            <div className="flex flex-col justify-center items-center ">
              <img src="/images/static_phone_samsung_new.webp" alt="" />
              <p className="text-sm">سامسونگ</p>
            </div>
          </Link>
        </div>
      </div>

      <img
        src="/images/banner_SingleFullWidthBanner.webp"
        alt=""
        className="mx-auto w-11/12 rounded-2xl my-22"
      />

      <div
        className="w-11/12 border border-gray-400 my-10 rounded-2xl mx-auto flex flex-col items-end pt-5 gap-1"
        style={{ fontFamily: "font" }}
      >
        <div className="flex w-full justify-between items-center md:px-12 px-2">
          <Link to={`/categories/laptop`}>
            <div className="flex justify-between items-center">
              <GrFormPrevious />
              <p className="md:text-sm text-xs">نمایش همه</p>
            </div>
          </Link>
          <h3 className="md:text-lg text-xs font-bold">
            لپ تاپ ها در تکنولایف
          </h3>
        </div>
        <div className="w-12/12 mx-auto pb-3 mt-5">
          <Slider slides={laptop} name={"isflagproduct"} />
        </div>
      </div>
      <div
        className="box3 flex flex-col w-[90%] mx-auto justify-center items-center"
        style={{ fontFamily: "font" }}
      >
        <h4 className="text-xl">برترین های لپ تاپ</h4>
        <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 mt-6 w-11/12 mx-auto">
          <Link to={`/brands/MSi/laptop`} className="flex justify-center">
            <div className="flex flex-col justify-center items-center w-10/12">
              <img src="/images/static_laptop_MSi.webp" alt="" />
              <p className="text-sm">ام اس آی</p>
            </div>
          </Link>
          <Link to={`/brands/aser/laptop`}>
            <div className="flex flex-col justify-center items-center">
              <img src="/images/static_laptop_aser_new.webp" alt="" />
              <p className="text-sm">ایسر</p>
            </div>
          </Link>
          <Link to={`/brands/lenovo/laptop`}>
            <div className="flex flex-col justify-center items-center ">
              <img src="/images/static_laptop_lenovo_new.webp" alt="" />
              <p className="text-sm">لنوو</p>
            </div>
          </Link>
          <Link to={`/brands/macbook/laptop`} className="flex justify-center">
            <div className="flex flex-col justify-center items-center w-10/12">
              <img src="/images/static_laptop_mac_new.webp" alt="" />
              <p className="text-sm">مک بوک</p>
            </div>
          </Link>
          <Link to={`/brands/hp/laptop`}>
            <div className="flex flex-col justify-center items-center ">
              <img src="/images/static_laptop_hp_new.webp" alt="" />
              <p className="text-sm">اچ پی</p>
            </div>
          </Link>
          <Link to={`/brands/asus/laptop`}>
            <div className="flex flex-col justify-center items-center ">
              <img src="/images/static_laptop_asus_new.webp" alt="" />
              <p className="text-sm">ایسوس</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between gap-5 lg:flex-row flex-col w-11/12 mx-auto my-20">
        <img
          src="/images/images7.webp"
          alt=""
          className="rounded-2xl lg:w-3/6 w-full"
        />
        <img
          src="/images/images8.webp"
          alt=""
          className="rounded-2xl lg:w-3/6 w-full"
        />
      </div>
      <div
        className="w-11/12 border border-gray-400 my-10 rounded-2xl mx-auto flex flex-col items-end pt-5 gap-1"
        style={{ fontFamily: "font" }}
      >
        <div className="flex w-full justify-between items-center md:px-12 px-5">
          <Link to={`/categories/instrument`}>
            <div className="flex justify-between items-center">
              <GrFormPrevious />
              <p className="md:text-sm text-xs">نمایش همه</p>
            </div>
          </Link>
          <h3 className="md:text-lg text-xs font-bold">ابزارآلات</h3>
        </div>
        <div className="w-12/12 mx-auto pb-3 mt-5">
          <Slider slides={instrument} name={"isflagproduct"} />
        </div>
      </div>
      <div
        className="box3 flex flex-col w-[90%] mx-auto justify-center items-center my-14"
        style={{ fontFamily: "font" }}
      >
        <h4 className="text-xl">برترین های هندزفری</h4>
        <div className="grid xl:grid-cols-7 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 mt-6 w-11/12 mx-auto">
          <Link to={`/brands/anker/handsfree`} className="flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <img src="/images/static_handsfree_anker_new.webp" alt="" />
              <p className="text-sm">انکر</p>
            </div>
          </Link>
          <Link to={`/brands/huawei/handsfree`} className="flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <img src="/images/static_handsfree_huawei_new.webp" alt="" />
              <p className="text-sm">هوآوی</p>
            </div>
          </Link>
          <Link to={`/brands/samsung/handsfree`}>
            <div className="flex flex-col justify-center items-center">
              <img src="/images/static_handsfree_samsung_new.webp" alt="" />
              <p className="text-sm">سامسونگ</p>
            </div>
          </Link>
          <Link to={`/brands/apple/handsfree`}>
            <div className="flex flex-col justify-center items-center ">
              <img src="/images/static_handsfree_apple_new.webp" alt="" />
              <p className="text-sm">اپل</p>
            </div>
          </Link>
          <Link to={`/brands/xiaomi/handsfree`} className="flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <img src="/images/static_handsfree_xiaomi_new.webp" alt="" />
              <p className="text-sm">شیائومی</p>
            </div>
          </Link>
          <Link to={`/handsfree/haylou`}>
            <div className="flex flex-col justify-center items-center ">
              <img src="/images/static_handsfree_haylou_new.webp" alt="" />
              <p className="text-sm">هایلو</p>
            </div>
          </Link>
          <Link to={`/brands/qcy/handsfree`}>
            <div className="flex flex-col justify-center items-center ">
              <img src="/images/static_handsfree_qc_new.webp" alt="" />
              <p className="text-sm">کیوسی وای</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-between gap-5 lg:flex-row flex-col w-11/12 mx-auto my-20">
        <img
          src="/images/images10.webp"
          alt=""
          className="rounded-2xl lg:w-3/6 w-full"
        />
        <img
          src="/images/images9.webp"
          alt=""
          className="rounded-2xl lg:w-3/6 w-full"
        />
      </div>

      <div
        className="border-2 border-gray-300 mx-auto my-10 rounded-xl flex sm:flex-row flex-col-reverse w-11/12"
        style={{ fontFamily: "font" }}
      >
        <div className="lg:w-10/12 sm:w-8/12 w-full py-5">
          <Slider slides={brands} name={"brand"} />
        </div>
        <div className="flex flex-col bg-blue-600 justify-around items-center py-5 mb-3 sm:mb-0 sm:w-4/12  lg:w-2/12 w-full rounded-xl">
          <p className="text-white md:text-lg text-xs">برند های منتخب</p>
        </div>
      </div>

      <div
        className="w-11/12 border border-gray-400 my-10 rounded-2xl mx-auto flex flex-col items-end pt-5 gap-1"
        style={{ fontFamily: "font" }}
      >
        <div className="flex w-full justify-between items-center md:px-12 px-2">
          <Link to={`/categories/computer`}>
            <div className="flex justify-between items-center">
              <GrFormPrevious />
              <p className="md:text-sm text-xs">نمایش همه</p>
            </div>
          </Link>
          <h3 className="md:text-lg text-xs font-bold">کامپیوتر و تجهیزات</h3>
        </div>
        <div className="w-12/12 mx-auto pb-3 mt-5">
          <Slider slides={computers} name={"isflagproduct"} />
        </div>
      </div>
      <div className=" grid grid-cols-3 xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 mx-auto my-12 justify-between items-center xl:gap-10 lg:gap-10 gap-5 px-10">
        {furniturescategory?.map((item) => (
          <FurnituresCard key={item.id} {...item} />
        ))}
      </div>
      <div
        className="w-11/12 border border-gray-400 my-10 rounded-2xl mx-auto flex flex-col items-end pt-5 gap-1"
        style={{ fontFamily: "font" }}
      >
        <div className="flex w-full justify-between items-center md:px-12 px-2">
          <Link to={`/categories/accessory`}>
            <div className="flex justify-between items-center">
              <GrFormPrevious />
              <p className="md:text-sm text-xs">نمایش همه</p>
            </div>
          </Link>
          <h3 className="md:text-lg text-xs font-bold">لوازم جانبی منتخب</h3>
        </div>
        <div className="w-12/12 mx-auto pb-3 mt-5">
          <Slider slides={accessory} name={"isflagproduct"} />
        </div>
      </div>
      <div
        className="w-11/12 border border-gray-400 my-10 rounded-2xl mx-auto flex flex-col items-end pt-5 gap-1"
        style={{ fontFamily: "font" }}
      >
        <div className="flex w-full justify-between items-center md:px-12 px-2">
          <Link to={`/categories/furniture`}>
            <div className="flex w-full justify-between items-center">
              <GrFormPrevious />
              <p className="md:text-sm text-xs">نمایش همه</p>
            </div>
          </Link>
          <h3 className="md:text-lg text-xs font-bold">لوازم خانگی تکنولایف</h3>
        </div>
        <div className="w-12/12 mx-auto pb-3 mt-5">
          <Slider slides={furnitures} name={"isflagproduct"} />
        </div>
      </div>
      <div
        className="w-11/12 border border-gray-400 my-10 rounded-2xl mx-auto flex flex-col items-end pt-5 gap-1"
        style={{ fontFamily: "font" }}
      >
        <div className="flex w-full justify-between items-center md:px-12 px-2">
          <Link to={`/blogs`}>
            <div className="flex w-full justify-between items-center">
              <GrFormPrevious />
              <p className="md:text-sm text-xs">نمایش بیشتر در بلاگ</p>
            </div>
          </Link>
          <h3 className="md:text-lg text-xs font-bold">از وبلاگ تکنولایف</h3>
        </div>
        <div className="w-12/12 mx-auto pb-3 mt-5 px-8">
          <Slider slides={vblogs} name={"vblog"} />
        </div>
      </div>
    </>
  );
};

export default HomeDetail;
