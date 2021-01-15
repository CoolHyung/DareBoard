import React from 'react';
import Board from './Board'
import StartPage from './StartPage'
import './GamePage.css'
import RollDice from './Dice'

class GamePage extends React.Component {
	render() {
    const { data } = this.props.location // players, board size, suggestions
    

    return (

      <div class = "page-layout">
        <Board />
        <RollDice />
      </div>
  	);

	}
}

export default GamePage;