import React from 'react';
import Board from './Board'
import StartPage from './StartPage'

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
      <div>
        <Board players={this.state.players} locs={this.state.locs}/>
      </div>
  	);
	}
}

export default GamePage;