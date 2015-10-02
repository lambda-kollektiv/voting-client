import React from "react/addons";

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render : function() {
    return React.DOM.div({className:"winner"},
                         "Winner is "+ this.props.winner + "!");
  }
});
