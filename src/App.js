import React, { Component } from 'react';
import Table from './Table';
import './App.css';
var _ = require('lodash');

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
          <h1>Munchkin Loot Letter</h1>
           <Table deck={this.shuffleDeck(this.state.deck)}/>
      </div>
    );
  }
}

export default App;
