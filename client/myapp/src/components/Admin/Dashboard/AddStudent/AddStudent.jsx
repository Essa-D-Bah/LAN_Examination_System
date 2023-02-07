import React from "react";
import { useState, useEffect } from "react";

export default function AddStudent(props) {
  const [studentData, setStudentData] = useState({});
  const [response, setResponse] = useState("");
  const [allPapers, setAllPapers] = useState([]);
  const socket = props.socket;

  const handleChange = (e) => {
    e.preventDefault();
    let { id, value } = e.target;
    setStudentData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const submitData = (e) => {
    e.preventDefault();
    socket.emit("addStudent", { studentData });
    socket.on("studentAdded", ({ res }) => {
      setResponse(res);
    });
  };

  const handleFetchPapers = () => {
    socket.emit("getAllPapers");
    socket.on("sendPapers", ({ papers }) => {
      setAllPapers(papers);
    });
  };

  return (
    <div className="flex flex-col m-6 bg-white rounded-2xl shadow-2xl md:flex-row md:m-0 md:min-w-[42rem] min-w-[24rem]">
      <div className="flex flex-col space-y-6 p-6 md:p-10 w-full">
        <h1 className="font-sans font-semibold text-xl text-center">
          Add Student
        </h1>

        <input
          type="text"
          className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm"
          placeholder="Student Name"
          id="studentName"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm"
          placeholder="Mat Number"
          id="studentMat"
          onChange={(e) => handleChange(e)}
        />

        <h3 className="font-sans font-semibold text-xl text-center">
          Select Paper for Student
        </h3>
        <select
          className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm appearance-none "
          name=""
          id="paper"
          onChange={(e) => handleChange(e)}
          onFocus={handleFetchPapers}
        >
          {allPapers.map((paper) => (
            <option value={paper.paperName}>{paper.paperName}</option>
          ))}
        </select>
        <button
          className="bg-sky-400 px-2 py-4 rounded-md text-white text-center font-bold text-lg tracking-wider hover:scale-105 hover:shadow-md hover:bg-sky-600 transition-all duration-200  cursor-pointer"
          onClick={(e) => submitData(e)}
        >
          Add Student
        </button>

        <p>{response}</p>
      </div>
    </div>
  );
}
