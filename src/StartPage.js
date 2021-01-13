import React from 'react';
import './StartPage.css'


class StartPage extends React.Component{
	render() {
		return (
			<div>
		      <form>
				<br />
		        <label htmlFor="players">Players' Names: </label>
		        <input type="text" id="players" name="players" />
		        <br />
		        <br />
		        <label htmlFor='boardsize'>Board Size: </label>
		        <input type="text" id= "boardsize" name="boardsize" />
		        <br />
		        <br />
		        <label htmlFor='suggestions'>Dare Suggestions: </label>
		        <input type="text" id= "suggestions" name="suggestions" />
        		<br />
        		<br />

      			<button> Submit </button>
		     </form>
		    </div>
		);
	}
}
export default StartPage;


