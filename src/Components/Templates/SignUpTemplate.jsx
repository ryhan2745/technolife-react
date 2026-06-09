import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
const SignUpTemplate = () => {
  let {users , addUser} = useAuth();
  let navigate = useNavigate();
  let [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  let changeHandler1 = (e) => {
    let { value, name } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
  let changeHandler2 = (e) => {
    let { value, name } = e.target;
    setFormData({ ...FormData, [name]: value });
  };
  let submitHandler = async (e) => {
    e.preventDefault();
    try {
      addUser(FormData);
      navigate("/login"); 
    } catch (error) {
      alert("خطا در ثبت نام");
    }
  };
  return (
    <div className="w-full flex m-0" style={{ fontFamily: "font" }}>
      <div className="md:w-7/12 lg:w-9/12 w-full">
        <img
          src="/images/static_loginBg2LastNew.webp"
          alt=""
          className="h-screen w-full"
        />
      </div>
      <div className="inline-flex flex-col items-center md:w-5/12 lg:w-3/12 w-full mx-auto py-5 lg:inset-0 fixed md:static inset-0 z-50  justify-center p-4 bg-black/70 opacity-100 md:bg-white">
        <div className="md:w-8/12 mx-auto md:flex justify-center mt-10 w-0">
          <img
            src="/images/static_logo_techno_new.svg"
            alt=""
            className="w-7/12"
          />
        </div>
        <div className="my-10 flex items-center justify-around w-6/12 md:text-black text-white">
          <p className="text-lg">ثبت نام</p>
          <span className="text-lg">|</span>
          <p className="text-lg">ورود</p>
        </div>
        <form
          action=""
          onSubmit={submitHandler}
          className="form flex flex-col justify-center items-center mx-auto md:w-11/12 w-8/12"
        >
          <input
            type="text"
            name="email"
            value={FormData.email}
            className="bg-slate-200 w-11/12 p-5 rounded-lg border-none text-xs text-end my-5"
            onChange={changeHandler1}
            placeholder="ایمیل"
          />
          <input
            type="text"
            name="password"
            value={FormData.password}
            className="bg-slate-200 w-11/12 p-5 rounded-lg border-none text-xs text-end my-5"
            onChange={changeHandler2}
            placeholder="پسوورد"
          />
          <div className="flex w-10/12 justify-around items-center">
            <Link to={"/login"}>
              <p className="md:text-blue-900 text-blue-500">ورود</p>
            </Link>
            <p className="md:text-black text-white">حساب کاربری دارید ؟</p>
          </div>
          <input
            type="submit"
            value="ثبت نام"
            className="bg-blue-900 text-white w-10/12 rounded-xl py-4 mt-16"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUpTemplate;
