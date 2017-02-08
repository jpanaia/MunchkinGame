import React, { Component } from 'react';
import Hand from './Hand';
var _ = require('lodash');

export default class Table extends Component{ 
    constructor(props) {
      super(props);
      
      let shuffled = _.shuffle(this.props.deck);
      this.state = {
          // table deck shuffle
            deck: shuffled,
            dealer: [],
            player: []
      }
      //console.log(this)
    }

    /* function to handle the event of user clicking the Deal button */
    handleDealButton() {
          let deck        = this.state.deck;
          let playerhand  = [];
          let dealerhand  = [];

          //check deck size to see if we need to shuffle a new deck
          /* if(deck.length < 5){
              deck = _.shuffle(this.props.deck);
          }*/

          //player hand, deal 1 card
          playerhand.push(deck.pop());

          //burn 3 cards
          _(3).times(() => deck.pop());

          //dealer card
          dealerhand.push(deck.pop());

          //set the updates
          this.setState({
              player:  playerhand,
              dealer: dealerhand,
              deck: deck,
              status: "playing"
          });
          //console.log(this)
    }
    handleDrawButton() {
      let playerHand = this.state.player;
      let shuffled = _.shuffle(this.state.deck);
      playerHand.push(shuffled.pop());
      this.setState({
            player:  playerHand,
            deck : shuffled,
      });
      //console.log(this)
    }
    render() {
        return (
          <div className='table-board'>
          <div className="buttons">
           <button onClick={() => this.handleDealButton()} type="button" className="btn btn-info">Deal</button>
           <button onClick={() => this.handleDrawButton()} type="button" className="btn btn-info">Draw</button>
          </div>

           <div className="half">
              <h2>Dealer (Computer)</h2>
              <Hand hand={this.state.dealer} />
            </div>
            <div className="half">
              <h2>Player (You)</h2>  
              <Hand hand={this.state.player} /> 
            </div>
          </div>
        );
    }
};
