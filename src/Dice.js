import React from 'react';
import './Dice.css';
import diceone from './diceone.jpg'
import dicetwo from './dicetwo.jpg'
import dicethree from './dicethree.jpg'
import dicefour from './dicefour.jpg'
import dicefive from './dicefive.jpg'
import dicesix from './dicesix.jpg'


class RollDice extends React.Component { 
	constructor(props){
		super(props);
	}

	roll() {
    	console.log("dice turn " + this.props.gameState.turn)

    	var x = 1 + Math.floor(Math.random()*6);
    	var currPlayer = this.props.gameState.players[this.props.gameState.turn];
    	this.props.gameState.locs[currPlayer] += x;
    	var nextTurn = (this.props.gameState.turn+1)%this.props.gameState.players.length;
    	this.props.stateHandler(nextTurn, this.props.gameState.locs);
	}

	render(){
		return(
			<div className = "Dice">
		     	<button onClick = {this.roll.bind(this)}> Roll the Dice </button>
		    </div>
		)

	}
} 

export default RollDice