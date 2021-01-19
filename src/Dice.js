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
			rollednumber: '',
			gameState:props.gameState
		};
	}

	roll() {
    	var x = 1 + Math.floor(Math.random()*6);
    	this.state.rollednumber = x
    	var currPlayer = this.props.gameState.players[this.props.gameState.turn];
    	this.props.gameState.locs[currPlayer] += x;
    	var nextTurn = (this.props.gameState.turn+1)%this.props.gameState.players.length;
    	this.props.stateHandler(nextTurn, this.props.gameState.locs);
	}

	render(){
		return(
			<div className = "Dice">
		     	<button onClick = {this.roll.bind(this)}> Roll the Dice </button>

		     	{(() => {
		     		switch(this.state.rollednumber) {
					  case 1:
					    return (<div> <img src={diceone} width="250" height="250" /> </div>)
					    break;
					  case 2:
					    return (<div><img src={dicetwo} width="250" height="250" /></div>)
					    break;
					  case 3:
					  	return (<div><img src={dicethree} width="250" height="250" /></div>)
					  	break;
					  case 4:
					 	return (<div><img src={dicefour} width="250" height="250" /></div>)
					  	break;
					  case 5:
					  	return (<div><img src={dicefive} width="250" height="250" /></div>)
					  	break;
					  case 6:
					  	return (<div><img src={dicesix} width="250" height="250" /></div>)
					  	break;
					  default:    
					}
      			})()}
		    </div>
		)
	}
} 

export default RollDice