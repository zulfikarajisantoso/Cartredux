import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";
import { db } from "../firebase";

function View() {
  const [datanya, setdatanya] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "barang"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setdatanya(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="overflow-x-auto md:overflow-hidden w-full">
      <table>
        <tr>
          <th>Nama Barang</th>
          <th>Harga</th>
          <th>Merek</th>
          <th>Deskripsi</th>
          <th>Gambar</th>
          <th>Aksi</th>
        </tr>

        {datanya.map((haha) => (
          <tbody key={haha.id} className='p-1 '>
            <td>{haha.data().namabarang}</td>
            <td>{haha.data().harga}</td>
            <td>{haha.data().merek}</td>
            <td>{haha.data().deskripsi}</td>
            <td>
              <img src={haha.data().image} alt="" />
            </td>
            <td className="flex items-center gap-3">
              <button className="bg-yellow-600 text-[13px] text-center font-semibold  text-white px-4 py-2 ">
                Edit
              </button>
              <button>
                {" "}
                <FaTimesCircle />{" "}
              </button>
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default View;
