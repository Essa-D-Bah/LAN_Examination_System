import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Chat from "./components/Chat/Chat";
// import Join from "./components/Join/Join";
import Question from "./components/Question";

export default function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Join />} />
        <Route path="/chat" element={<Chat />} />
      </Routes> */}

      <Question />
    </div>
  );
}
