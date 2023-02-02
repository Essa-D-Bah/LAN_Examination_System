import React from "react";
import { useState } from "react";

export default function AddStudent() {
  const [studentName, setStudentName] = useState("");
  const [studentMat, setStudentMat] = useState("");
  const [paper, setPaper] = useState("");
  const [studentData, setStudentData] = useState({
    name:'',
    matNo:'',
    paper:''
  })

  const handleStudentData=(e)=>{
       e.preventDefault();
      setStudentData({
        name:studentName,
        matNo:studentMat,
        paper:paper
      })
  }

  return (
    <div>
        <h1>Add Student</h1>
      <form action="">
        <input
          type="text"
          placeholder="Student Name"
          id="studentName"
          onChange={(e) => setStudentName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mat Number"
          id="StudentMat"
          onChange={(e) => setStudentMat(e.target.value)}
        />

        <h3>Select Paper for Student</h3>
        <select name="" id="paper" onChange={(e) => setPaper(e.target.value)}>
          <option value="English">English</option>
          <option value="English">English</option>
        </select>
        <button onClick={(e)=>handleStudentData(e)}>Add Student</button>
      </form>
    </div>
  );
}
