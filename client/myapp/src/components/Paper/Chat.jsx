import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";
import { useLocation } from "react-router";

let socket;

export default function Chat({ location }) {
  const [name, setName] = useState("");
  const [matNo, setMatNo] = useState("");
  const ENDPOINT = "http://localhost:5000";
  const data = useLocation();
  useEffect(() => {
    const { name, matNo } = queryString.parse(data.search);
    socket = io(ENDPOINT);
    setName(name);
    setMatNo(matNo);
    socket.emit("join", { name, matNo });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [data.search, ENDPOINT]);

  return (
    <div>
      <h1>
        Welcome {name} in room {matNo}
      </h1>
    </div>
  );
}
