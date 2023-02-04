import React from "react";
import { useEffect, useState } from "react";
import AddPaper from "./AddPaper/AddPaper";
import AddStudent from "./AddStudent/AddStudent";
import { io } from "socket.io-client";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import './admin.css'

let socket;
export default function Admin() {
    const [userName, setUserName] = useState("");
    const [sockett, setSockett] = useState(null);
    const ENDPOINT = "http://localhost:5000";
    const data = useLocation();
    useEffect(() => {
      const { userName } = queryString.parse(data.search);
      socket = io(ENDPOINT);
      setSockett(socket);
      setUserName(userName);
      return () => {
        socket.emit("disconnect");
        socket.off();
      };
    }, [data.search, ENDPOINT]);
  
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Welcome {userName} add paper for examination
      </h1>
      
      <div className="adminCon">
        <div className="paper">
           <AddPaper socket={sockett}/>
        </div>

        <div className="student">
            <AddStudent socket={sockett}/>
        </div>
      </div>
       
    </div>
  );
}
