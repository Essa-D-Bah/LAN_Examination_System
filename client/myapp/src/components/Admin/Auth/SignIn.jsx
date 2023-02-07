import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../../../styles/index.css";
import adminImg from "../../../img/background-mini.jpg";
import { io } from "socket.io-client";

let socket;

export default function SignIn() {
  const ENDPOINT = "http://localhost:5000";

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(false);

  const signIn = () => {
    socket = io(ENDPOINT);
    socket.emit("signIn", { userName, password });
    socket.on("adminExist", ({ exist }) => {
      setValidUser(exist);
    });
  };
  return (
    // Global container
    <div className="background-img flex justify-center items-center min-h-screen bg-rose-50">
      {/* Card-container */}
      <div className="flex flex-col m-6 bg-white rounded-2xl shadow-2xl md:flex-row md:m-0">
        {/* left-side */}
        <div className="flex flex-col space-y-4 p-6 md:p-10">
          <h2 className="mb-5 text-4xl text-center font-bold px-6">
            Admin Sign In
          </h2>
          <input
            type="text"
            className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type={"password"}
            className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* button */}
          <Link
            className="bg-sky-400 px-2 py-4 rounded-md text-white text-center font-bold text-lg tracking-wider hover:scale-105 hover:bg-sky-600 transition-all duration-200 hover:shadow-md"
            onClick={(event) => !validUser ? event.preventDefault() : null}
            to={`/admin?username=${userName}`}
          >
            <button className="" type="submit" onClick={signIn}>
              Sign In
            </button>
            Sign In
          </Link>
        </div>
        {/* right-side */}
        <img
          src={adminImg}
          alt=""
          className="w-[420px] hidden md:block rounded-r-2xl"
        />
      </div>
    </div>
  );
}
