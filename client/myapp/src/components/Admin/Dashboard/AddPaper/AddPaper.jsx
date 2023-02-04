import React from "react";
import { useState } from "react";
export default function AddPaper(props) {
  const [addQuestion, setAddQuestion] = useState(false);
  const [paper, setPaper] = useState("");
  const socket = props.socket;


  const addPaper = (e) => {
    e.preventDefault();
     socket.emit("addPaper", {paper});
  };

  const handleAddQuestions = () => {
    setAddQuestion((prev) => !prev);
  };
  return (
    <div>
      <form>
        <h1>Add Paper</h1>
        <input
          type="text"
          placeholder={"Paper Name"}
          onChange={(e) => setPaper(e.target.value)}
        />
        <button onClick={(e)=>addPaper(e)} >Submit Paper</button>
      </form>

      <div className="Questions">
        <button onClick={handleAddQuestions}>Add a question</button>

        {addQuestion && (
          <div>
            <input type="text" placeholder="question number" />
            <input type="text" placeholder="Question" />
            <input type="text" placeholder="answer1" />
            <input type="text" placeholder="answer2" />
            <input type="text" placeholder="answer2" />
            <input type="text" placeholder="answer4" />
            <button>Submit Question</button>
          </div>
        )}
      </div>
    </div>
  );
}
