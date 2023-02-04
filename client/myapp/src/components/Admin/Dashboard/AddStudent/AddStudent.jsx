import React from "react";
import { useState } from "react";

export default function AddStudent(props) {
  const [studentData, setStudentData] = useState({});
  const socket = props.socket;

  const handleChange = (e) => {
    e.preventDefault();
    let {id, value} = e.target;
    setStudentData(prevState=>({
        ...prevState,
        [id]:value
    }))
  };

  const submitData = (e) => {
    e.preventDefault();
    socket.emit("addStudent", { studentData });
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form action="">
        <input
          type="text"
          placeholder="Student Name"
          id="studentName"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Mat Number"
          id="studentMat"
          onChange={(e) => handleChange(e)}
        />

        <h3>Select Paper for Student</h3>
        <select name="" id="paper" onChange={(e) => handleChange(e)}>
          <option value="English">English</option>
          <option value="English">English</option>
        </select>
        <button onClick={(e) => submitData(e)}>Add Student</button>
      </form>
      <p>{JSON.stringify(studentData)}</p>
    </div>
  );
}
