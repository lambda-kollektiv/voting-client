import React from 'react/addons';
import {List, Map} from 'immutable';
import Results from '../../src/components/Results';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate}
  = React.addons.TestUtils;

describe('Results', () => {

  it('renders entries with vote counts or zero', () => {
    const pair = List.of('Saron', 'Masala');
    const tally = Map({'Saron': 5});
    const component = renderIntoDocument(
      <Results pair={pair} tally={tally} />
    );
    const entries = scryRenderedDOMComponentsWithClass(component, 'entry');
    const [train, days] = entries.map(e => e.getDOMNode().textContent);

    expect(entries.length).to.equal(2);
    expect(train).to.contain('Saron');
    expect(train).to.contain('5');
    expect(days).to.contain('Masala');
    expect(days).to.contain('0');
  });

  it('invokes the next callback when next button is clicked', () => {
    let nextInvoked = false;
    const next = () => nextInvoked = true;

    const pair = List.of('Saron', 'Masala');
    const component = renderIntoDocument(
      <Results pair={pair}
               tally={Map()}
               next={next}/>
    );
    Simulate.click(React.findDOMNode(component.refs.next));

    expect(nextInvoked).to.equal(true);
  });

  
  it('renders the winner when there is one', () => {
    const component = renderIntoDocument(
      <Results winner="Saron"
               pair={["Saron", "Masala"]}
               tally={Map()} />
    );
    const winner = React.findDOMNode(component.refs.winner);
    expect(winner).to.be.ok;
    expect(winner.textContent).to.contain('Saron');
  });

});
