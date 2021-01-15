import React from 'react';
import Board from './Board'
import StartPage from './StartPage'
import './GamePage.css'
import RollDice from './Dice'

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props.location;
    var players = data[0].split(",");
    this.state = {
      turn: this.props.turn,
      players: players,
      locs: new Array(players.length).fill(0)
    };
  }
	render() {
    
    return (
      <div class = "page-layout">
        <Board players={this.state.players} locs={this.state.locs}/>
        <RollDice />
        
      </div>
  	);

	}
}

export default GamePage;