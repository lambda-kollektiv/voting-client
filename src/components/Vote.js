import React from "react/addons";

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
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
      className: "voting "
    },
                         this.getPair()
           .map(entry =>
             React.DOM.button({
               key:entry,
               onClick: () => this.props.vote(entry),
               disabled: this.isDisabled(),
               className: "mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
             },
                              entry,
                              this.hasVotedFor(entry) ?
                              React.DOM.div({className:"label"}, "Voted"):
                              null)
       )
    );
  }
});
