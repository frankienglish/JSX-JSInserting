import React from "react";
import ReactDOM from "react-dom";

const fname = "Frankie";
const lname = "english";
const number = 7;

// can only use statements, not expressions
ReactDOM.render(
  <div>
    <h1>
      Hello {fname} {lname}
    </h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
