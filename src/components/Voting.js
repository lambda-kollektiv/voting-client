import React from "react/addons";
import {connect} from "react-redux";
import Winner from "./Winner";
import Vote from "./Vote";
import * as actionCreators from "../action_creators";

export const Voting = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    const winnerData = {ref: "winner", winner: this.props.winner};
    const winnerEl = React.createElement(Winner, winnerData);
    const voteEl = React.createElement(Vote, this.props);
    const votingEl = this.props.winner ? winnerEl : voteEl;
    
    return React.DOM.div(null, votingEl);
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(["vote", "pair"]),
    hasVoted: state.get("hasVoted"),
    winner: state.get("winner")
  }
}

export const VotingContainer = connect(
  mapStateToProps,
  actionCreators
)(Voting);
