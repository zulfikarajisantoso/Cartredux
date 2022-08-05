import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { adduser, userdapat } from "../features/Userslice";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const masuk = async(e) => {
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, pass).then((res) => {
      dispatch(
        adduser({
          user: res.user,
        })
      );
      localStorage.setItem("user", JSON.stringify(res.user));
    });
    navigate("/");
  };

  const masukgogle = async (e) => {
    e.preventDefault();

    await signInWithPopup(auth, provider).then((res) => {
      dispatch(
        adduser({
          user: res.user,
        })
      );
      localStorage.setItem("user", JSON.stringify(res.user));
    });
    navigate("/");
  };

  return (
    <div className="w-full h-[100vh] flex bg-stone-300 justify-center items-center">
      <div className="bg-white w-4/12 h-4/6 flex py-10 px-3 flex-col items-center">
        <h1 className="font-bold text-[24px] ">Login</h1>
        <div className="border-b-4 w-7/12  border-stone-700 mb-4 mt-2"></div>
        <div className="flex flex-col gap-3  w-7/12">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setemail(e.target.value)}
            className="border-2 border-stone-700 p-2 rounded-sm"
          />
          <input
            type="password"
            onChange={(e) => setpass(e.target.value)}
            className="border-2 border-stone-700 p-2 rounded-sm"
            placeholder="Password"
          />
          <a className="text-[10px] text-end mt-1">Lupa Password ? </a>
        </div>
        <button
          type="submit"
          onClick={masuk}
          className="mt-4 w-7/12 bg-stone-700 text-white h-10 rounded-sm"
        >
          MASUK
        </button>
        <button
          onClick={masukgogle}
          className="mt-4 w-7/12 border-2 border-stone-700 text-dark h-10 rounded-sm "
        >
          MASUK DENGAN GOOGLE
        </button>
        <h6 className="text-center text-[13px] mt-6 ">
          Belum Punya Akun? <a href="regis">Daftar</a>{" "}
        </h6>
      </div>
    </div>
  );
}

export default Login;
