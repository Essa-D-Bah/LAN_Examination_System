import React, { useEffect, useState } from "react";
import queryString from "query-string";
import { io } from "socket.io-client";
import { useLocation } from "react-router";

let socket;
export default function Paper({ location }) {
  const [paperName, setName] = useState("");
  const [studentMat, setMatNo] = useState("");
  const [questons, setQuestions] = useState([]);
  const [answers, setAnswer] = useState([]);
  const ENDPOINT = "http://localhost:5000";
  const data = useLocation();
  useEffect(() => {
    const { paper, studentMat } = queryString.parse(data.search);
    socket = io(ENDPOINT);
    setName(paper);
    setMatNo(studentMat);
    socket.emit("join", { paperName, studentMat });
    socket.on("getPaper", ({ questions }) => {
      setQuestions(questions);
    });
  }, [data.search, ENDPOINT, paperName, studentMat]);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setAnswer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitAnswers = (e) => {
    e.preventDefault();
    socket.emit("addAnswer", { answers, studentMat });
  };

  return (
    <div>
      <h1 className="text-center text-blue-600 text-2xl ">
        Paper: {paperName} <br></br>
        StudentID: {studentMat}
      </h1>
      <div className="">
        {questons.map((question) => (
          <div className="my-4">
            <p className="text-xl">
              {question.questionNumber}) {question.question}
            </p>
            <div className="flex">
              <div className="mx-2">
                <input
                  className=""
                  type="radio"
                  name={question.questionNumber}
                  value={question.ans1}
                  onClick={(e) => handleChange(e)}
                />
                <span>{question.ans1}</span>
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  name={question.questionNumber}
                  value={question.ans2}
                  onClick={(e) => handleChange(e)}
                />
                <span>{question.ans2}</span>
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  name={question.questionNumber}
                  value={question.ans3}
                  onClick={(e) => handleChange(e)}
                />
                <span>{question.ans3}</span>
              </div>
              <div className="mx-2">
                <input
                  type="radio"
                  name={question.questionNumber}
                  value={question.ans4}
                  onClick={(e) => handleChange(e)}
                />
                <span>{question.ans4}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={(e) => submitAnswers(e)}
        className="btn border-2 border-blue-300 p-2"
      >
        Submit Answer
      </button>
    </div>
  );
}
