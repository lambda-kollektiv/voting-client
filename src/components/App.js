import React from "react";
import {RouteHandler} from "react-router";
import {List, Map} from "immutable";

const pair = List.of("Saron", "Masala");
const tally = Map({"Saron": 3, "Masala": 5})
const vote = (entry) => votedWith = entry;

export default React.createClass({
  render: function() {
    return React.createElement(RouteHandler, {pair: pair, tally: tally, vote: vote});
  }
});
