import React, { Component } from 'react';
import Hand from './Hand';
var _ = require('lodash');

export default class Table extends Component{
    constructor(props) {
      super(props);

     // let shuffled = _.shuffle(this.props.deck);
      this.state = {
          // table deck shuffle
            deck: this.props.deck,
            player1: [],
            player2: [],
            discard1: [/*{n: "pp", v: 1}*/],
            discard2: []
      }
      //console.log(this)
    }

    /* function to handle the event of user clicking the Deal button */
    handleDealButton() {
          let deck        = this.state.deck;
          let player1hand  = [];
          let player2hand  = [];

          //check deck size to see if we need to shuffle a new deck
          /* if(deck.length < 5){
              deck = _.shuffle(this.props.deck);
          }*/

          //player hand, deal 1 card
          player1hand.push(deck.pop());

          //burn 3 cards
          _(3).times(() => deck.pop());

          //player 2 card
          player2hand.push(deck.pop());

          //set the updates
          this.setState({
              player1: player1hand,
              player2: player2hand,
              deck: deck,
              status: "playing"
          });
          //console.log(this)
    }
    handleDrawPlayer1Button() {
      let playerHand = this.state.player1;
      let shuffled = _.shuffle(this.state.deck);
      playerHand.push(shuffled.pop());
      this.setState({
            player1:  playerHand,
            deck : shuffled,
      });
    }

    handleDrawPlayer2Button() {
        let playerHand = this.state.player2;
        let shuffled = _.shuffle(this.state.deck);
        playerHand.push(shuffled.pop());
        this.setState({
              player2:  playerHand,
              deck : shuffled,
        });
      //console.log(this)
    }

    player1play() {
        console.log('player1play')
    }

    player2play(){
        console.log('player2play')
    }

    render() {
        return (
          <div className='table-board'>
          <div className="row">
            <div className="col-md-6 col-md-offset-4">
              <div className='btn-group'>
                <button onClick={() => this.handleDealButton()} type="button" role="group" className="btn btn-lg btn-default btn-secondary">Deal</button>
                <button onClick={() => this.handleDrawPlayer1Button()} type="button" role="group" className="btn btn-lg btn-default btn-secondary">Player 1 Draw</button>
                <button onClick={() => this.handleDrawPlayer2Button()} type="button" role="group" className="btn btn-lg btn-default btn-secondary">Player 2 Draw</button>

              </div>
            </div>
          </div>

           <div className="row">
              <div className="col-md-6">
               <h2>Player 1</h2>
               Hand: <Hand hand={this.state.player1} />
               In Play: <Hand hand={this.state.discard1} play={this.player1play.bind(this)}/>
              </div>
              <div className="col-md-6">
                <h2>Player 2</h2>
                Hand: <Hand hand={this.state.player2} />
                In Play: <Hand hand={this.state.discard2} play={this.player2play.bind(this)}/>
              </div>
            </div>
          </div>
        );
    }
};
