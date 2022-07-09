import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addtocart } from "../features/Cartslice";
import { deleteprod, getprod, productselect } from "../features/Crudslice";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getprod());
  }, [dispatch]);
  const produt = useSelector(productselect.selectAll);


  const tambahkeranjang = (item) => {
    dispatch(
      addtocart(item)
    );
    navigate("/keranjang");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Link to="add">Add</Link>
      <div style={{ width: "80%" }}>
        {produt.map((item, i) => (
          <div key={item.id} style={{ display: "flex" }}>
            <h6>{item.title}</h6>
            <p>{item.price}</p>
            <Link to={`edit/${item.id}`}>Edit</Link>
            <button onClick={() => tambahkeranjang(item)}></button>
          </div> 
        ))}
      </div>
    </div>
  );
}

export default Home;
