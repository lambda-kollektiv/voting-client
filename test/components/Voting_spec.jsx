import React from "react/addons";
import Voting from "../../src/components/Voting.jsx";

const {renderIntoDocument} = React.addons.TestUtils;

describe("Voting", () => {

  it("renders a pair of buttons", () => {
    const component = renderIntoDocument(
      <Voting pair={["Saron", "Masala"]} />
    )
  })
  
})
