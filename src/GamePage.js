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

    var locs = {};
    for (var i = 0; i < players.length; i++) {
      locs[players[i]] = 0;
    }

    this.state = {
      turn: players[0],
      players: players,
      locs: locs
    };

  }
  stateHandler = (locs) => {
    this.setState({locs: locs}, () => {
        console.log(this.state.locs);
    });
  }

  componentDidUpdate() {
  }

	render() {
    
    return (
      <div class = "page-layout">
        <Board locs={this.state.locs}/>
        <RollDice gameState={this.state} stateHandler={this.stateHandler} />
        
      </div>
  	);

	}
}

export default GamePage;