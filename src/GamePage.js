import React from 'react';
import Board from './Board'
import StartPage from './StartPage'
import './GamePage.css'
import RollDice from './Dice'
import Newsbox from './Textbox'

class GamePage extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props.location;

    var players = data[0].split(",");
    for (var i = 0; i < players.length; i++) {
      players[i] = players[i].trim();
    }

    var locs = {};
    for (var i = 0; i < players.length; i++) {
      locs[players[i]] = 0;
    }

    this.state = {
      turn: 0,
      players: players,
      locs: locs
    };

  }
  stateHandler = (t, l) => {
    this.setState(
      { 
        turn: t,
        locs: l
      }, () => {}
    );
  }

  componentDidUpdate() {
  }

	render() {
    
    return (
      <div class = "page-layout">
        <Board locs={this.state.locs}/>
        <div class = "same-line">
          <Newsbox /> 
          <RollDice gameState={this.state} stateHandler={this.stateHandler} />
        </div>
      </div>
  	);

	}
}

export default GamePage;