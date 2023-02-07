import React, { useState } from "react";

export default function AddQuestion(props) {
  const [question, setQuestion] = useState({});
  const [response, setResponse] = useState("");
  const [papers, setPapers] = useState([]);
  const socket = props.socket;

  const submitQuestion = (e) => {
    e.preventDefault();
    socket.emit("addQuestion", { question });
    socket.on("questionAdded", ({ res }) => {
      setResponse(res);
    });
  };

  const handleFetchPapers = () => {
    socket.emit("getAllPapers");
    socket.on("sendPapers", ({ papers }) => {
      setPapers(papers);
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setQuestion((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  return (
    <div>
      <form className='flex flex-col space-y-6 'data-aos="fade-down">
        <h3 className="font-sans font-semibold text-xl text-center">
          Select Paper To Add Questions To
        </h3>
        <select
          className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm appearance-none "
          name=""
          id="paperName"
          onChange={(e) => handleChange(e)}
          onFocus={handleFetchPapers}
        >
          {papers.map((paper) => (
            <option value={paper.paperName}>{paper.paperName}</option>
          ))}
        </select>
        <input
          type="text"
          id="questionNumber"
          onChange={(e) => handleChange(e)}
          className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm"
          placeholder="Question Number"
        />
        <input
          type="text"
          id="question"
          onChange={(e) => handleChange(e)}
          className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm"
          placeholder="Enter Question"
        />
        <input
          type="text"
          id="ans1"
          onChange={(e) => handleChange(e)}
          className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm"
          placeholder="Answer 1"
        />
        <input
          type="text"
          id="ans2"
          onChange={(e) => handleChange(e)}
          className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm"
          placeholder="Answer 2"
        />
        <input
          type="text"
          id="ans3"
          onChange={(e) => handleChange(e)}
          className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm"
          placeholder="Answer 3"
        />
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          id="ans4"
          className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm"
          placeholder="Answer 4"
        />
        <button
          onClick={(e) => submitQuestion(e)}
          className="bg-sky-400 px-2 py-4 rounded-md text-white text-center font-bold font-mono tracking-wider hover:scale-105 hover:shadow-md hover:bg-sky-600 transition-all duration-200 "
        >
          Submit
        </button>
      </form>
      <p>{response}</p>
    </div>
  );
}
