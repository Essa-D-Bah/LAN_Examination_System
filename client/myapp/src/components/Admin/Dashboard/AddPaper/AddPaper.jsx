import React from "react";
import { useState, useEffect } from "react";
import "../../../../styles/index.css";
import add from "../../../../img/add.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import AddQuestion from "../AddQuestion/AddQuestion";

export default function AddPaper(props) {
  const [addQuestion, setAddQuestion] = useState(false);
  const [paper, setPaper] = useState("");
  const socket = props.socket;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const addPaper = (e) => {
    e.preventDefault();
    socket.emit("addPaper", { paper });
  };

  const handleAddQuestions = () => {
    setAddQuestion((prev) => !prev);
  };
  return (
    <div className="flex flex-col m-6 bg-white rounded-2xl shadow-2xl md:flex-row md:m-0 md:min-w-[42rem] min-w-[24rem]">
      <div className="flex flex-col space-y-6 p-6 md:p-10 w-full">
        <h1 className="font-sans font-semibold text-xl text-center">
          Add Paper
        </h1>
        <input
          type="text"
          className="w-full p-6 border border-grey-500 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-sm"
          placeholder={"Paper Name"}
          onChange={(e) => setPaper(e.target.value)}
        />
        {/* button */}
        <button
          onClick={addPaper}
          className="bg-sky-400 px-2 py-4 rounded-md text-white text-center font-bold text-lg tracking-wider hover:scale-105 hover:shadow-md hover:bg-sky-600 transition-all duration-200 "
        >
          submit
        </button>

        <div>
          <button
            onClick={handleAddQuestions}
            className="flex space-x-2 items-center mb-6 bg-green-400 px-2 py-4 rounded-md text-white font-bold text-lg tracking-wider mx-auto mt-6 hover:scale-105 hover:shadow-md hover:bg-green-600 transition-all duration-200 "
          >
            <span>Add a question</span>
            <img src={add} alt="" className="w-6" />
          </button>

          {addQuestion && (
            <AddQuestion socket={socket}/>
          )}
        </div>
      </div>
    </div>
  );
}
