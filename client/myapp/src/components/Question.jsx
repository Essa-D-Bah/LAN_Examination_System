import React from "react";
import { useState } from "react";

function Question() {
  const paper = [
    {
      id: 1,
      que: "Whats is your name",
      answers: ["Omar", "Modou", "Amat", "Essa"],
    },

    {
      id: 2,
      que: "Where is your name",
      answers: ["Omarq", "Modou", "Amat", "Essa"],
    },
  ];
  const [pap, setPaper] = useState(paper);

  return (
    <div>
      {pap.map((item) => (
        <>
          <p>
            {item.id}){item.que}
          </p>
          {item.answers.map((ans) => (
            <div style={{ display: "flex", alignItems:'center', marginBottom:'1em'}}>
              <input type={"radio"} value={ans} id={ans}  name={item.que}/>
              <label htmlFor={ans} style={{paddingLeft:"6px"}}>{ans}</label>
            </div>
          ))}
        </>
      ))}
    </div>
  );
}

export default Question;
