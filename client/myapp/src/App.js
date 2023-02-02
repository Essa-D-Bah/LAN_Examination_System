import React from "react";
import { Route, Routes } from "react-router-dom";
import Chat from "./components/Paper/Chat";
import Join from './components/Join/Join'
import SignIn from "./components/Admin/Auth/SignIn";
import Admin from "./components/Admin/Dashboard/Admin";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Join/>}/>
        <Route path="/chat" element={<Chat />} />
        <Route path="/adminSignIn" element={<SignIn/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}
