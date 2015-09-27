import React from "react";
import Voting from "./components/Voting";

console.log("Greetings Lord Kordano");

const pair = ["Saron", "Masala"];

React.render(
  React.createElement(Voting, {pair: pair}),
  document.getElementById("app")
);
