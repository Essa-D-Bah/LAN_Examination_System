import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Join() {
  const [name, setName] = useState("");
  const [matNo, setMatNo] = useState("");

  return <div className="joinOuterContainer">
     <div className="joinInnerContainer">
         <h1 className="heading">Join</h1>
         <div>
             <input type="text" placeholder="Name" className="joinInput" onChange={(event)=>setName(event.target.value)}/>
         </div>
         <div>
             <input type="text" placeholder="Room" className="joinInput mt-20" onChange={(event)=> setMatNo(event.target.value)}/>
         </div>
         <Link onClick={event=> (!name || !matNo)?event.preventDefault():null} to={`/chat?name=${name}&matNo=${matNo}`}>
           <button className="btn mt-20" type="submit">Sign In</button>
         </Link>
     </div>
  </div>;
}
