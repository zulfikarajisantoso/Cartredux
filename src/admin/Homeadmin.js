import React, { useEffect, useState } from "react";
import Add from "./Add";
import {Link} from 'react-router-dom'
import View from "./View";

function Homeadmin() {
  const [select, setselect] = useState("view");
  const [datanya, setdatanya] = useState();

  const listsidebar = [
    {
      name: "add",
    },
   
    {
      name: "view",
    },
  ];

  useEffect(() => {
    switch (select) {
      case "add":
        setdatanya(<Add />);
        break;
      case "view":
        setdatanya(<View />);
        break;
      default:
        setdatanya(<View />);
    }
  }, [select]);

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Link className="w-5/12 bg-slate-500 text-white font-bold text-center py-3" to="/">Back Home</Link>
      <div className=" w-full md:w-9/12 flex gap-3 mt-3">
        <div className="flex flex-col items-center border-r-4 w-4/12">
            <img src="https://st2.depositphotos.com/6489488/9384/v/600/depositphotos_93842998-stock-illustration-space-rocket-startup-icon.jpg" alt="" />
          <div className=" space-y-3 ">
            {listsidebar.map((tem, index) => (
              <h6
                key={index}
                onClick={() => setselect(tem.name)}
                className="cursor-pointer hover:text-white font-semibold hover:bg-stone-500 transition-all duration-300 w-full py-3 px-7  flex items-center justify-center "
              >
                {tem.name}
              </h6>
            ))} 
          </div>
        </div>
        {datanya}
      </div>
    </div>
  );
}

export default Homeadmin;
 