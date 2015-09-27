import React from "react";

export default React.createClass({
  render : function() {
    return React.DOM.div({className:"winner"},
                         "Winner is "+ this.props.winner + "!");
  }
});
