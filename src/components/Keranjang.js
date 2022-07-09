import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, deleteitem, removeitem } from "../features/Cartslice";

function Keranjang() {
  const item = useSelector((state) => state.cart.cartItems);
  const totalamo = useSelector((state) => state.cart.totamount);
  const totalqua = useSelector((state) => state.cart.totquantity);

  const dispatch = useDispatch();

  const tambahkeranjang = (item) => {
    dispatch(addtocart(item));
  };

  const kurang = (ker) => {
    dispatch(removeitem(ker));
  };

  const hilang = (ker) => {
    dispatch(deleteitem(ker))
  }

  return (
    <div>
      {item.map((ker, i) => (
        <div key={ker.id} style={{ display: "flex", gap: "10px" }}>
          <h3>{ker.title}</h3>
          <h3>{ker.price}</h3>

          <p style={{ marginLeft: "10px" }}>{ker.totalprice}</p>
          <button onClick={() => tambahkeranjang(ker)}>Tambah</button>
          <p>{ker.quan}</p>
          <button onClick={() => kurang(ker)}>kurang</button>

          <button onClick={() =>hilang(ker)}>Remove</button>
        </div>
      ))}
      <h1>{totalamo}</h1>
      <p>{totalqua}</p>
    </div>
  );
}

export default Keranjang;
