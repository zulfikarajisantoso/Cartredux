import React, { useRef, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

function Edit() {
  const imagaref = useRef(null);
  const [select, setselect] = useState(null);

  const addfileimage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (e) => {
      setselect(e.target.result);
    };
  };

  return (
    <div className="w-full">
      <div className="p-6">
        <h1 className="font-light">• Edit Barang</h1>
        <div className="grid  md:grid-cols-2 mt-3 gap-3">
          <input
            className="border-b-2 border-x-2 p-3 focus:outline-none"
            type="text"
            name=""
            id=""
            placeholder="Nama Barang"
          />
          <input
            className="border-b-2 border-x-2 p-3 focus:outline-none"
            type="text"
            placeholder="Harga"
          />
        </div>
        <div className="grid  md:grid-cols-2 gap-3 mt-6">
          <input
            className="border-b-2 border-x-2 p-3 focus:outline-none"
            type="text"
            name=""
            id=""
            placeholder="Merek"
          />
          <input
            className="border-b-2 border-x-2 p-3 focus:outline-none"
            type="text"
            placeholder="Deskripsi"
          />
        </div>
        <div className=" gap-3 mt-6 flex flex-col items-center">
          <input
            ref={imagaref}
            onChange={addfileimage}
            className="border-b-2 border-x-2 p-3 focus:outline-none"
            type="file"
            hidden
          />

          <img src={select} alt="" className="w-72 object-contain" />

          {select ? (
            <div
              onClick={() => setselect(null)}
              className=" cursor-pointer flex gap-3 bg-stone-800 text-white font-bold h-10 p-5 items-center justify-center"
            >
              <FaTimes />
            </div>
          ) : (
            <div
              onClick={() => imagaref.current.click()}
              className=" cursor-pointer flex gap-3 bg-stone-800 text-white font-bold h-10 p-5 items-center justify-center"
            >
              <h5>Masukkan Gambar</h5>
              <AiFillCamera />
            </div>
          )}
        </div>
        {select  && (<div className="w-full flex justify-center mt-3 ">
          <button
            type="submit"
            className="h-10 bg-slate-400 text-white font-semibold w-3/12 p-3 flex items-center justify-center "
          >
            Edit Barang
          </button>
        </div>) }
      </div>
    </div>
  );
}

export default Edit;
