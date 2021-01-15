import React from 'react';

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: props.player
    };
  }
  render() {
    const color_ = this.props.color;
    return (
      <td
        style={{
          overflow:'hidden',
          width:'100px',
          height:'100px',
          backgroundColor:'#e4e4a1',
          color:'red',
          boarderColor: 'black',
          border:".5px solid black"
        }}
      onClick={this.props.handleClick} >
        {this.state.player}
        
      </td>
    )
  }
}

class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      players: props.players,
      locs: props.locs
    };
  }
  renderSquare() {
    return (
      <Square />
    );
  }
  render() {

    var squares = [];
    for (var i = 0; i < 15; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        squares.push(<Square key={i} />);
    }
    for (var i = 0; i < this.state.players.length; i++) {
      squares[i] = <Square player = {this.state.players[i]} />
    }

    return (
      <div className="board-row">
        {squares}

      </div>
    );
  }
}
export default Board;