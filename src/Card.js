import React, { Component } from 'react';
var _ = require('lodash');

import styled from 'styled-components';

const CardBox = styled.div`
  width: 110px;
  height: 130px;
  text-align: center;
  padding: 30px 10px 10px;
  font-size: 20px;
  float: left;
  margin: 5px;
  color: #fff;
  cursor: pointer;
`

export default class Card extends Component{
    constructor() {
        super();
    }

    playCard() {
        console.log('yo');
        this.props.player1play(this.props.face);

        // this.setState({
        //     discard1: this.props.face
        // })
    }

    render() {
      let bgColor = '';
      let name = '';
      if (this.props.face == 'pp') {
        bgColor = '#047b04';
        name = 'Potted Plant';
      } else if (this.props.face == 'mr') {
        bgColor = '#1a1a9c';
        name = 'Maul Rat';
      } else if (this.props.face == 'dd') {
        bgColor = '#ffb300';
        name = 'Duck of Doom';
      } else if (this.props.face == 'wr') {
        bgColor = '#a881f1';
        name = 'Wishing Ring';
      } else if (this.props.face == 'nt') {
        bgColor = 'brown';
        name = 'Net Troll';
      } else if (this.props.face == 'dg') {
        bgColor = '#e62899';
        name = 'Dread Gazebo';
      } else if (this.props.face == 'td') {
        bgColor = '#1da9c1';
        name = "Turbonium Dragon";
      } else if (this.props.face == 'lt') {
        bgColor = '#770f77';
        name = 'Loot';
      }
       /* var bgUrl = (this.props.hidden)
            ? 'url(img/hidden.png)'
            : 'url(img/' + this.props.face + '.jpg)';*/

        /* in react we pass the css properties as an object with camelCase variables referring to the respective CSS variables */
        let cardStyle = {backgroundColor: bgColor};

        return (
            <CardBox 
                style={cardStyle} 
                onClick={this.playCard.bind(this)}>
                {name}
            </CardBox>
        );
    }

};
