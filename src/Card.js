import React, { Component } from 'react';
var _ = require('lodash');

export default class Card extends Component{ 
    render() {
      let bgColor = '';
      let name = '';
      if (this.props.face == 'pp') {
        bgColor = 'green';
        name = 'Potted Plant';
      } else if (this.props.face == 'mr') {
        bgColor = 'blue';
        name = 'Maul Rat';
      } else if (this.props.face == 'dd') {
        bgColor = 'yellow';
        name = 'Duck of Doom';
      } else if (this.props.face == 'wr') {
        bgColor = 'grey';
        name = 'Wishing Ring';
      } else if (this.props.face == 'nt') {
        bgColor = 'brown';
        name = 'Net Troll';
      } else if (this.props.face == 'dg') {
        bgColor = 'red';
        name = 'Dread Gazebo';
      } else if (this.props.face == 'td') {
        bgColor = 'orange';
        name = "Turbonium Dragon";
      } else if (this.props.face == 'lt') {
        bgColor = 'purple';
        name = 'Loot';
      }
       /* var bgUrl = (this.props.hidden)
            ? 'url(img/hidden.png)'
            : 'url(img/' + this.props.face + '.jpg)';*/
             
        /* in react we pass the css properties as an object with camelCase variables referring to the respective CSS variables */
        let cardStyle = {backgroundColor: bgColor};

        return (
            <div className='card' style={cardStyle}>{name}</div>
        );
    }

};