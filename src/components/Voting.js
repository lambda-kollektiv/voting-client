import React from "react";
import Winner from "./Winner";
import Vote from "./Vote";

export default React.createClass({
  render: function() {
    return React.DOM.div(null,
    this.props.winner ?
                         React.createElement(Winner, {ref:"winner",
                                                      winner:this.props.winner}) :
                         React.createElement(Vote, this.props)
    );
  }
});
