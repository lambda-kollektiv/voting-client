import React from "react";

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },
  render: function() {
    return React.DOM.div({
      className: "voting"
    }, this.getPair()
           .map(entry =>
             React.DOM.button({
               key:entry,
               onClick:() =>this.props.vote(entry),
               disabled:this.isDisabled()
             },
                              React.DOM.h1(null, entry),
                              this.hasVotedFor(entry) ?
                              React.DOM.div({className:"label"}, "Voted"):
                              null)
       )
    );
  }
});
