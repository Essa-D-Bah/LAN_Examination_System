import React from "react";
import { useEffect } from "react";
import AddPaper from "./AddPaper/AddPaper";
import AddStudent from "./AddStudent/AddStudent";
import './admin.css'


export default function Admin() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Welcome Admin add paper for examination
      </h1>
      
      <div className="adminCon">
        <div className="paper">
           <AddPaper/>
        </div>

        <div className="student">
            <AddStudent/>
        </div>
      </div>
       
    </div>
  );
}
