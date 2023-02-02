import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./signin.css";
import { useEffect } from "react";
import { io } from "socket.io-client";

let socket;

export default function SignIn() {
  const ENDPOINT = "http://localhost:5000";

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [validUser, setValidUser] = useState(false);

  const signIn =()=>{
    socket = io(ENDPOINT);
    socket.emit("signIn", { userName, password });
  }

  return (
    <div className="adminCon">
      <div className="adminForm">
        <h2 className="aTitle">Admin Sign In</h2>
        <form action="" className="fAdmin">
          <div>
            <input
              type="text"
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div>
            <input
              type={"password"}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            className=""
            onClick={(event) =>
              !validUser? event.preventDefault() : null
            }
             to={`/admin?name=${userName}&matNo=${password}`}
          >
            <button className="btn mt-20 sbtn" type="submit" onClick={signIn}>
              Sign In
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
