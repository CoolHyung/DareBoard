import React from 'react';
import history from './history'

class Config extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			players: '',
			boardsize: '',
			suggestions: '',
		};
    }

    mySubmitHandler = (event) => {
    	event.preventDefault();
    	var data = [this.state.players, this.state.boardsize, this.state.suggestions]
    	history.push({
		  pathname: '/game',
		  data: data // your data array of objects
		})
    	
  	}

  	playerHandler = (event) => {
    	this.setState({players: event.target.value});
  	}

  	boardHandler = (event) => {
  		this.setState({boardsize: event.target.value});
  	}

  	suggestionHandler = (event) => {
  		this.setState({suggestions: event.target.value});
  	}

    render() {
    	return (
			<div>
		     	<form onSubmit = {this.mySubmitHandler}>
					<br />
			        <label htmlFor="players">Players' Names: </label>
			        <input 
			        	type="text" 
			        	onChange = {this.playerHandler}
			        />

			        <br />
			        <br />

			        <label htmlFor='boardsize'>Board Size: </label>
			        <input 
			        	type="text" 
			        	onChange = {this.boardHandler}
			        />

			        <br />
			        <br />

			        <label htmlFor='suggestions'>Dare Suggestions: </label>
			        <input 
			        	type="text" 
			        	onChange = {this.suggestionHandler}
			        />

	        		<br />
	        		<br />

	      			<button> Submit </button>
		    	</form>
		    </div>
    	);
    }
}

export default Config;
