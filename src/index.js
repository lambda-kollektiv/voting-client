import React from "react";
import Router, {Route, DefaultRoute} from "react-router";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./reducer";
import App from "./components/App";
import {VotingContainer} from "./components/Voting";
import Results from "./components/Results";

const store = createStore(reducer);

store.dispatch({
  type: "SET_STATE",
  state: {
    vote: {
      pair: ["Saron", "Masala"],
      tally: {Masala: 2}
    }
  }
})

const routes = React.createElement(
  Route,
  {handler: App},
  React.createElement(
    DefaultRoute,
    {handler: VotingContainer}
  ),
  React.createElement(
    Route,
    {path:"/results", handler: Results}
  )
);

Router.run(routes, (Root) => {
  React.render(
    React.createElement(Provider, {store: store}, () => React.createElement(Root)),
    document.getElementById("app")
  );
})
