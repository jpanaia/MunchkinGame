import React, { Component } from 'react';
import Card from './Card';
var _ = require('lodash');

import styled from 'styled-components';

const HandBox = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  height: 162px;
  width: 90%;
`

export default class Hand extends Component{
    // constructor(props) {
    // super(props);
    // }

    render() {

        return (
            <HandBox>

                {this.props.hand.map(function(card,i){
                    return <Card face={card.n} value={card.v} key={i} />
                })}

                {/* //return <Card face={card.f} value={card.v} key={i}/>
                Example on how to use an IF/ELSE statement inside the return (jsx) function */}
                {/* This will show an upside down card representing the deck on the dealer side of the table
                {this.props.showDeck ? <Card hidden={true}/> : ''}

                {/* here we iterate the hand array and serve the Card component with the card info */}
               {/* } {this.props.hand.map(function(card,i){
                    //return <Card face={card.f} value={card.v} key={i}/>
                })}*/}

            </HandBox>
        );
    }
};

Hand.propTypes = {
  hand: React.PropTypes.array,
  play: React.PropTypes.func
};
