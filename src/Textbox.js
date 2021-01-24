import React from 'react';
import './Textbox.css'
import RollDice from "./Dice"

class Newsbox extends React.Component {

	constructor(props){
		super(props);

		this.dare = this.dare.bind(this);
	}


	dare(){

		var one = ["take a shot", "chug a cup of milk", "prank call your friend"];
		var two = ["take two shots","point at someone you would want to kiss", "do a backflip"];
		var three = ["take three shots", "ask out your crush", ""];
		var four = ["take four shots", "skip4", "ju4mp"];
		var five = ["take five shots", "ski5p", "ju5mp"];
		var six = ["take six shots", "s2", "jump6"];

		var x = Math.floor((Math.random() * 1) + 1);
		var b = 0;
		// {(() => {
     		switch( this.props.gameState.roll ) {
			  case 1:
			    return one[b]
			    break;
			  case 2:
			    return two[b]
			    break;
			  case 3:
			  	return three[b]
			  	break;
			  case 4:
			 	return four[b]
			  	break;
			  case 5:
			  	return five[b]
			  	break;
			  case 6:
			  	return six[b]
			  	break;
			  default:    
			}
      	// })()}
	}

	render() {
    	return (
      	<div className="box-field" className="newsbox">
        	<h3>Action</h3>
        	player {this.props.gameState.players[this.props.gameState.turn]} rolled {this.props.gameState.roll}
        	<br />

        	<br />
        	{this.dare()}
	    </div>
    	);
  	}
}

export default Newsbox