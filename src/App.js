import React, { Component } from 'react';
import Table from './Table';
var _ = require('lodash');

import styled from 'styled-components';

const Header = styled.h1`
  font-size: 50px;
  font-weight: normal;
  background: #000;
  color: #fff;
  text-align: center;
  height: 100px;
  padding: 20px;
  margin-top: 0;
`

class App extends Component {

  constructor() {
    super();

    this.state = {
      deck: [
        { n: "pp", v: 1 },
        { n: "pp", v: 1 },
        { n: "pp", v: 1 },
        { n: "pp", v: 1 },
        { n: "pp", v: 1 },
        { n: "mr", v: 2 },
        { n: "mr", v: 2 },
        { n: "dd", v: 3 },
        { n: "dd", v: 3 },
        { n: "wr", v: 4 },
        { n: "wr", v: 4 },
        { n: "nt", v: 5 },
        { n: "nt", v: 5 },
        { n: "dg", v: 6 },
        { n: "td", v: 7 },
        { n: "lt", v: 8 }
      ]
    };
  }

  shuffleDeck(deck) {
    return _.shuffle(_.shuffle(_.shuffle(_.shuffle(deck))));
  }

  render() {
    return (
      <div>
        <Header>Munchkin Loot Letter</Header>
           <Table deck={this.shuffleDeck(this.state.deck)}/>
      </div>
    );
  }
}

export default App;
