import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./join.css";

export default function Join() {
  const [name, setName] = useState("");
  const [matNo, setMatNo] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading"> Student Join Exam</h1>
        <form action="" className="form">
          <div>
            <input
              type="text"
              placeholder="Mat Number"
              className="joinInput"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Paper"
              className="joinInput mt-20"
              onChange={(event) => setMatNo(event.target.value)}
            />
          </div>
          <Link
          className="btnLink"
            onClick={(event) =>
              !name || !matNo ? event.preventDefault() : null
            }
            to={`/chat?name=${name}&matNo=${matNo}`}
          >
            <button className="btn mt-20 button" type="submit">
              Sign In
            </button>
          </Link>
        </form>

        <Link to={'/adminSignIn'}>
          Admin Sign In Here
        </Link>
      </div>
    </div>
  );
}
