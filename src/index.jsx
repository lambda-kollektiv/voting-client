import React from "react";
import Voting from "./components/Voting";

console.log("Greetings Lord Kordano");

const pair = ["Saron", "Masala"];

React.render(
  <Voting pair={pair} winner="Trainspotting" />,
  document.getElementById("app")
);
