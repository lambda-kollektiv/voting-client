import React from "react/addons";
import {connect} from "react-redux";
import Winner from "./Winner";
import Vote from "./Vote";

export const Voting = React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    return React.DOM.div(null,
                         this.props.winner ?
                         React.createElement(Winner, {ref:"winner",
                                                      winner:this.props.winner}) :
                         React.createElement(Vote, this.props)
    );
  }
});

function mapStateToProps(state) {
  return {
    pair: state.getIn(["vote", "pair"]),
    winner: state.get("winner")
  }
}

export const VotingContainer = connect(mapStateToProps)(Voting);
