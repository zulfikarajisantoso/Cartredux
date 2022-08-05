import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { opencart } from "../features/Keranjangslice";


import Keranjang from "./Keranjang";
import Navbar from "./Navbar";

function Home() {


  const dispatch = useDispatch();
  const kalausrol = (e) => {
    if ((e.charCode || e.keycode) === 27) {
      dispatch(opencart());
    }

  };
  console.log(kalausrol)

  useEffect(() => {
  document.body.addEventListener('keydown', kalausrol)
  return () => {
    document.body.removeEventListener('keydown', kalausrol)
  }
  }, [])
  
  

  return (
    <div className=" transition-all duration-300">
      <Navbar />
      <div className={`w-full flex flex-col items-center justify-center`}>
        <h1 className=" text-center font-bold text-[30px] py-16">
          Bekas Berkualitas
        </h1>
        <div className="flex gap-2 w-9/12 ">
          <div>
            <div className="">
              <h5 className="italic">Sort By: </h5>
              <select name="" id="" className="w-32 border-2 my-5 py-1">
                <option value="">afa</option>
                <option value="">afa</option>
                <option value="">afa</option>
              </select>
            </div>
            <div>
              <h5 className="italic">Kategory</h5>
              <div className="flex flex-col">
                <div className="flex ml-3 mt-3">
                  <br />
                  <input
                    type="radio"
                    id="html"
                    value=" afa"
                    name="fav_language"
                  />
                  <label className="text-[13px] flex items-center ml-1">
                    Sepatu
                  </label>
                </div>
                <div className="flex ml-3 mt-3">
                  <br />
                  <input
                    type="radio"
                    id="html"
                    value=" afa"
                    name="fav_language"
                  />
                  <label className="text-[13px] flex items-center ml-1">
                    Celana
                  </label>
                </div>
                <div className="flex ml-3 mt-3">
                  <br />
                  <input
                    type="radio"
                    id="html"
                    value=" afa"
                    name="fav_language"
                  />
                  <label className="text-[13px] flex items-center ml-1">
                    Jacket
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 w-full">
            <div className="ha w-full p-3 h-[450px] flex flex-col hover:border-2 ">
              <img
                className="h-18 w-18 items-center img_brang"
                src="https://w7.pngwing.com/pngs/79/391/png-transparent-t-shirt-cargo-pants-clothing-sweatpants-smart-jeans-fashion-clothing-accessories-electric-blue.png"
                alt=""
              />
              <h6 className="mt-3 ">Rp. 30.000</h6>
              <div className="border-b-2 border-stone-300"></div>
              <div className="flex items-center justify-between">
                <h4 className="font-bold mt-1">H&M</h4>
                <h6 className="text-[10px]">Celana Jeans</h6>
              </div>
              <button className="hidden w-full h-12 mt-3 font-semibold border-2 p-3 border-stone-900 hover:bg-stone-900 hover:text-white">
                Masukkan Keranjang
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-7 w-9/12">
          <h3 className="font-bold text-[28px] ">Subscribe Newsletter</h3>
          <h6>Stay updated for new collection & special offer</h6>
          <input
            type="text"
            placeholder="MASUKKAN EMAIL KAMU"
            className="mt-4 w-7/12 border-b-2 focus:outline-none border-stone-700 text-center py-3 "
          />
        </div>
      </div>

      <Keranjang />
    </div>
  );
}

export default Home;
