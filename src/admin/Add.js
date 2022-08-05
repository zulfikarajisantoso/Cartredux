import React, { useRef, useState } from "react";
import { AiFillCamera } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

import {
  collection,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import  {db, storage } from "../firebase";

import { ref, getDownloadURL, uploadString } from "firebase/storage";

function Add() {
  const imagaref = useRef(null);
  const [namabrng, setnamabrng] = useState("");
  const [harga, setharga] = useState("");
  const [merek, setmerek] = useState("");
  const [deskripsi, setdeskripsi] = useState("");
  const [loading, setloading] = useState(false);
  const [select, setselect] = useState(null);

  const user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();

  const addfileimage = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (e) => {
      setselect(e.target.result);
    };
  };
  console.log(user.displayName)

  const upload = async () => {
    if (loading) return;

    setloading(true)

    const docref = await addDoc(collection(db, "barang"), {
      nama: user.email,
      fotoprofile: user.photoURL,
      namabarang: namabrng,
      harga: harga,
      merek: merek,
      deskripsi: deskripsi,
      timestamp: serverTimestamp(),
    })
    const gambaref = ref(storage, `barang/${docref.id}/image`);

    await uploadString(gambaref, select, "data_url")
    .then(async (snapshot) => {
      const downloadurl = await getDownloadURL(gambaref);
      await updateDoc(doc(db, "barang", docref.id), {
        image: downloadurl,
      });
     })
     setselect(null);
     setnamabrng("");
     setharga("");
     setmerek("");
     setloading(false)
     setdeskripsi("");
 
  };

  return (
    <div className="w-8/12">
      <div className=" p-2 md:p-6">
        <h1 className="font-light">• Tambah Barang</h1>
        <div className="grid  md:grid-cols-2 mt-3 gap-3">
          <input
            className="border-b-2 border-x-2 p-3 focus:outline-none"
            type="text"
            value={namabrng}
            onChange={(e) => setnamabrng(e.target.value)}
            placeholder="Nama Barang"
          />
          <input
            className="border-b-2 border-x-2 p-3 focus:outline-none"
            type="number"
            value={harga}
            onChange={(e) => setharga(e.target.value)}
            placeholder="Harga"
          />
        </div>
        <div className="grid  md:grid-cols-2 gap-3 mt-6">
          <input
            className="border-b-2 border-x-2 p-3 focus:outline-none"
            type="text"
            value={merek}
            onChange={(e) => setmerek(e.target.value)}
            placeholder="Merek"
          />
          <input
            className="border-b-2 border-x-2 p-3 focus:outline-none"
            type="text"
            value={deskripsi}
            onChange={(e) => setdeskripsi(e.target.value)}
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
        {select && (
          <div className="w-full flex justify-center mt-3 ">
            <button
              onClick={upload}
              type="submit"
              className="h-10 bg-slate-400 text-white font-semibold w-8/12 md:w-3/12 p-3 flex items-center justify-center "
            >
              {loading ? 'Menambahkan...' : 'Tambah Barang'}  
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Add;
