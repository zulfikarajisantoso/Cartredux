import React from "react";
import { keran, opencart } from "../features/Keranjangslice";
import { useDispatch, useSelector } from "react-redux";
import { FaTimes } from "react-icons/fa";

function Keranjang() {
  
  const keranopen = useSelector(keran);
  
  const dispatch = useDispatch();

  const keluarkan = () => {
   
      dispatch(opencart());
  
  };


  return (
    <div className={` ${keranopen ? "opencart" : "hidden"} `} >
      <div className=" w-full flex justify-end items-end px-10" onClick={keluarkan}>
        <div className="w-4/12 top-3 bg-white p-3"  onClick={e => e.stopPropagation()}>
          <h5 className="text-center font-extralight ">Keranjang</h5>
          <div className="flex justify-between items-center mt-3">
            <div className="">
              <img
                className="w-14 h-14"
                src="https://w7.pngwing.com/pngs/962/856/png-transparent-jeans-trouser-s-jeans-trouser-png-transparent-images-trousers.png"
                alt=""
              />
              <h6 className="font-semibold text-[11px] text-center mt-1">
                Celana Jeans
              </h6>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-center">Jumlah</h4>
              <div className="flex items-center gap-3">
                <button className="bg-stone-900 p-[1px] h-6 w-6 rounded-full text-[14px] text-white">+</button>
                <h6 className="text-center mt-1">3x</h6>
                <button className="bg-stone-900 p-[1px] h-6 w-6 rounded-full text-[14px] text-white">-</button>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold">Total</h4>
              <h6 className="text-center mt-1 text-[13px]">Rp 30.000</h6>
            </div>
            <div className="flex items-end">
              <button className="text-thin"> <FaTimes /> </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-3">
            <div className="">
              <img
                className="w-14 h-14"
                src="https://w7.pngwing.com/pngs/962/856/png-transparent-jeans-trouser-s-jeans-trouser-png-transparent-images-trousers.png"
                alt=""
              />
              <h6 className="font-semibold text-[11px] text-center mt-1">
                Celana Jeans
              </h6>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-center">Jumlah</h4>
              <div className="flex items-center gap-3">
                <button className="bg-stone-900 p-[1px] h-6 w-6 rounded-full text-[14px] text-white">+</button>
                <h6 className="text-center mt-1">3x</h6>
                <button className="bg-stone-900 p-[1px] h-6 w-6 rounded-full text-[14px] text-white">-</button>
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-bold">Total</h4>
              <h6 className="text-center mt-1 text-[13px]">Rp 30.000</h6>
            </div>
            <div className="flex items-end">
              <button className="text-thin"> <FaTimes /> </button>
            </div>
          </div>
         <div className="flex justify-between items-center p-3">
          <h4 className="font-bold text-5px">Total: Rp10.000 </h4>
         <button className="py-1 px-5 text-white  bg-slate-500 font-bold text-5px">Checkout</button>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Keranjang;
