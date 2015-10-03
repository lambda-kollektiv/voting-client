import React from "react";
import Router, {Route, DefaultRoute} from "react-router";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import io from "socket.io-client";
import reducer from "./reducer";
import {setState} from "./action_creators";
import remoteActionMiddleware from "./remote_action_middleware";
import App from "./components/App";
import {VotingContainer} from "./components/Voting";
import {ResultsContainer} from "./components/Results";

const socket = io(`${location.protocol}//${location.hostname}:8090`);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(reducer);

socket.on("state", state =>
          store.dispatch(setState(state)));


const routes = React.createElement(
  Route,
  {handler: App},
  React.createElement(
    DefaultRoute,
    {handler: VotingContainer}
  ),
  React.createElement(
    Route,
    {path:"/results", handler: ResultsContainer}
  )
);

Router.run(routes, (Root) => {
  React.render(
    React.createElement(Provider, {store: store}, () => React.createElement(Root)),
    document.getElementById("app")
  );
})
