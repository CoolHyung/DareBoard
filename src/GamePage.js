import React from 'react';
import Board from './Board'
import StartPage from './StartPage'

class GamePage extends React.Component {
	render() {
    const { data } = this.props.location // players, board size, suggestions
    return (
      <div>
        <Board />
      </div>
  	);
	}
}

export default GamePage;