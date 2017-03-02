import React, { Component } from 'react';
import Card from './Card';
var _ = require('lodash');

export default class Hand extends Component{
      constructor(props) {
      super(props);
      //this.props.hand = [];
      //console.log('hey', this.props);
    }

    render() {

        return (
            <div className='hand'>

                {this.props.hand.map(function(card,i){
                    return <Card face={card.n} value={card.v} key={i}/>
                })}

                {/* //return <Card face={card.f} value={card.v} key={i}/>
                Example on how to use an IF/ELSE statement inside the return (jsx) function */}
                {/* This will show an upside down card representing the deck on the dealer side of the table
                {this.props.showDeck ? <Card hidden={true}/> : ''}

                {/* here we iterate the hand array and serve the Card component with the card info */}
               {/* } {this.props.hand.map(function(card,i){
                    //return <Card face={card.f} value={card.v} key={i}/>
                })}*/}

            </div>
        );
    }

};
