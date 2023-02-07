import React from "react";
import { Route, Routes } from "react-router-dom";
import Join from './components/Join/Join'
import SignIn from "./components/Admin/Auth/SignIn";
import Admin from "./components/Admin/Dashboard/Admin";
import Paper from "./components/Paper/Paper";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Join/>}/>
        <Route path="/chat" element={<Paper />} />
        <Route path="/adminSignIn" element={<SignIn/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </div>
  );
}
