import React, { useState } from "react";
import { IoCartSharp } from "react-icons/io5";
import { AiOutlineBars, AiOutlineUser } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { keran, opencart } from "../features/Keranjangslice";

function Navbar() {
  const [openn, setopenn] = useState(false);
  const [bukalogin, setbukalogin] = useState(false);
  const keranopen = useSelector(keran);
  const dispatch = useDispatch();

  const openccart = () => {
    dispatch(opencart());
  };



  return (
    <div className="bg-white flex justify-center w-full h-14 ">
      <div className="grid grid-cols-3 w-11/12">
        <div className="md:flex hidden">
          <a href="/">
            <img
              src="https://listcarbrands.com/wp-content/uploads/2017/11/Barkas-logo-600x255.png"
              alt=""
              className="w-28 object-contain"
            />
          </a>
        </div>
        <div className={`navbar gap-5 items-center ${openn ? "open" : ""}`}>
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
        </div>
        <div className="md:flex justify-end items-center gap-5 hidden ">
          <div className="relative cursor-pointer" onClick={openccart}>
            {keranopen ? (
              <FaTimes
                className="relative text-2xl text-white"
                style={{ zIndex: "30" }}
              />
            ) : (
              <>
                <IoCartSharp className="relative text-2xl" />
                <h6 className="absolute -top-2 -right-3 text-white  bg-red-500 text-[13px] rounded-full w-5 h-5 text-center font-semibold ">
                  13
                </h6>
              </>
            )}
          </div>
          <div
            className=" cursor-pointer"
            onClick={() => setbukalogin(!bukalogin)}
          >
            <img
              src="https://awsimages.detik.net.id/community/media/visual/2020/08/13/avatar-the-last-airbender.webp?w=700&q=90"
              alt=""
              className="rounded-full h-6 w-6"
            />
            <div
              className={`absolute top-14 w-20 right-3 p-2 cursor-pointer bg-stone-300 ${
                bukalogin ? "flex" : "hidden"
              }`}
            >
              <a href="Login">
                <div className="flex items-center gap-2">
                  <AiOutlineUser /> <h6>Login</h6>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="md:hidden flex  justify-start items-center gap-5">
          <div className="relative cursor-pointer">
            <IoCartSharp className="relative text-2xl z-0" />
            <h6 className="absolute -top-2 -right-3 text-white  bg-red-500 text-[13px] rounded-full w-5 h-5 text-center font-semibold ">
              13
            </h6>
          </div>
        </div>
        <div className="flex md:hidden  justify-center  ">
          <img
            src="https://listcarbrands.com/wp-content/uploads/2017/11/Barkas-logo-600x255.png"
            alt=""
            className="w-28 object-contain"
          />
        </div>
        <div
          className="md:hidden flex items-center justify-end cursor-pointer "
          onClick={() => setopenn(!openn)}
        >
          {openn ? (
            <FaTimes className="z-10 transition-all duration-150" />
          ) : (
            <AiOutlineBars className="z-10" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
