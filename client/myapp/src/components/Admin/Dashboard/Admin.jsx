import React from "react";
import { useEffect, useState } from "react";
import AddPaper from "./AddPaper/AddPaper";
import AddStudent from "./AddStudent/AddStudent";
import "./admin.css";
import { io } from "socket.io-client";
import queryString from "query-string";
import { useLocation } from "react-router-dom";

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
    <div className="min-h-screen bg-blue-50">
      <div className="min-h-[10vh] text-center p-10 text-4xl font-semibold">
        <h2>Welcome, {userName}</h2>
      </div>
      <div className="flex flex-row">
        <div className="min-h-[90vh] w-1/2 py-10 px-20 flex flex-col items-center justify-center">
          <AddPaper socket={sockett} />
        </div>
        <div className="min-h-[90vh] w-1/2 py-10 px-20 flex flex-col items-center justify-center">
          <AddStudent socket={sockett} />
        </div>
      </div>
    </div>
  );
}
