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
		this.state = {
			gameState:props.gameState
		};
	}

	roll() {
    	var x = 1 + Math.floor(Math.random()*6);
    	var currPlayer = this.state.gameState.turn;
    	this.state.gameState.locs[currPlayer] += x;
    	this.props.stateHandler(this.state.gameState.locs);
	}

	dicehandler = (event) => {
    	event.preventDefault();
    	var x = this.roll()
    	this.setState({thediceroll:x})
  	}

	render(){
		return(
			<div className = "Dice">
		     	<form onSubmit = {this.dicehandler}> 
		     		<button> Roll the Dice </button>
		     	</form>
		     	
		    </div>

			)

	}
} 

export default RollDice