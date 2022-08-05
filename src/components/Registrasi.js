import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
  
function Registrasi() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cek, setcek] = useState([])
  const ii = (e) => {
    e.persist();
    setcek({...setcek, [e.target.name]: e.target.checked})
}

console.log(cek)

  const daftarEP = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, pass).then((res) => {});
    navigate("/login");
  };

  
//   const reg = (e) => {
//     e.preventDefault();
//     const data = {
//         name: name,
//         email: email,
//         password: regis.password,
//         role_as: cek.role_as ? '1' : '0',

//     }

//     console.log(data)
//     axios.get('/sanctum/csrf-cookie').then(response => {
//         axios.post(`/api/register`, data)
//         .then(res => {
//             if(res.data.status === 200 )
//             {
//                 localStorage.setItem('auth_token' , res.data.token)
//                 localStorage.setItem('auth_name' , res.data.username)
//                 swal("Success", res.data.message, "success");
//                 history.push('/')
//             }else{
//                 setregis({...regis, error_list: res.data.validation_errors})
//             }

//         })
        
//     })
       
// }

  return (
    <div className="w-full h-[100vh] flex bg-stone-300 justify-center items-center">
      <div className="bg-white w-4/12 h-4/6 flex py-10 px-3 flex-col items-center">
        <h1 className="font-bold text-[24px] ">Registrasi</h1>
        <div className="border-b-4 w-7/12  border-stone-700 mb-4 mt-2"></div>
        <div className="flex flex-col gap-3  w-7/12">
          <input
            type="email"
            placeholder="Email"
            className="border-2 border-stone-700 p-2 rounded-sm"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            className="border-2 border-stone-700 p-2 rounded-sm"
            placeholder="Password"
            onChange={(e) => setpass(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-end mb-3 align-items-center ">
          <label style={{ fontSize: "9px" }}>Not Required</label>
          <input
            type="checkbox"
            name="role_as"
            style={{
              marginLeft: "2px",
              zIndex: "10",
              backgroudColor: "#000",
              color: "#000",
            }}
            onChange={ii}
            defaultChecked={cek.status === 1 ? true : false}
          />
        </div>

        <button
          type="submit"
          onClick={daftarEP}
          className="mt-4 w-7/12 bg-stone-700 text-white h-10 rounded-sm"
        >
          DAFTAR
        </button>

        <h6 className="text-center text-[13px] mt-6 ">
          Sudah Punya Akun? <a href="login">Masuk</a>
        </h6>
      </div>
    </div>
  );
}

export default Registrasi;
