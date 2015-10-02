import React from "react/addons";
import Winner from "./Winner";

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  getVotes: function(entry) {
    if (this.props.tally && this.props.tally.has(entry)) {
      return this.props.tally.get(entry);
    }
    return 0;
  },
  getPair: function() {
    return this.props.pair || [];
  },
  render: function() {
    return this.props.winner ?
      React.createElement(Winner, {ref: "winner", winner: this.props.winner}) :
      React.DOM.div({className: "results"},
                         React.DOM.div({className: "tally"},
                                       this.getPair().map(entry => {
                                         return React.DOM.div(
                                           {key: entry,
                                            className: "entry"},
                                           React.DOM.h1(null, entry),
                                           React.DOM.div({className: "voteCount"}, this.getVotes(entry))
                                         )
                                       })
                                      ),
                         React.DOM.div({className: "management"},
                                       React.DOM.button({
                                         ref: "next",
                                         className: "next",
                                         onClick: this.props.next},
                                                        "Next")
                                      )
                        )
  }
});
