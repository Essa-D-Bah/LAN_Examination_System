import React from "react";
import { useState } from "react";

export default function AddPaper() {
    const [addQuestion, setAddQuestion] = useState(false)

    const handleAddQuestions=()=>{
        setAddQuestion(prev=>!prev)
    }
  return (
    <div>
      <div>
        <h1>Add Paper</h1>
        <input type="text" placeholder={"Paper Name"} />
        <button>Submit Paper</button>
      </div>

      <div className="Questions">
        <button onClick={handleAddQuestions}>
            Add a question
        </button>


        {

        addQuestion&&
        <div>
            <input type="text" placeholder="question number"/>
            <input type="text" placeholder="Question"/>
            <input type="text" placeholder="answer1"/>
            <input type="text" placeholder="answer2"/>
            <input type="text" placeholder="answer2"/>
            <input type="text" placeholder="answer4"/>
            <button>Submit Question</button>
        </div>     
}
      </div>
    </div>
  );
}
