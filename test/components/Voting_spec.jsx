import React from "react/addons";
import Voting from "../../src/components/Voting.jsx";
import {expect} from "chai";

const {renderIntoDocument, scryRenderedDOMComponentsWithTag, Simulate} = React.addons.TestUtils;

describe("Voting", () => {

  it("renders a pair of buttons", () => {
    const component = renderIntoDocument(
      <Voting pair={["Saron", "Masala"]} />
   );
    const buttons = scryRenderedDOMComponentsWithTag(component, "button");

    expect(buttons.length).to.equal(2);
    expect(buttons[0].getDOMNode().textContent).to.equal("Saron");
    expect(buttons[1].getDOMNode().textContent).to.equal("Masala");
  });

  it("invokes callback when abutton is clicked", () => {
    let votedWith;
    const vote = (entry) => votedWith = entry;

    const component = renderIntoDocument(
      <Voting pair={["Saron", "Masala"]}
              vote={vote}/>
    );
    const buttons = scryRenderedDOMComponentsWithTag(component, "button");
    Simulate.click(buttons[0].getDOMNode());

    expect(votedWith).to.equal("Saron");
  });

  
})
