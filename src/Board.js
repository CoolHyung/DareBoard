import React from 'react';
import './Board.css';


class Square extends React.Component {
  constructor(props) {
    super(props);
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
        {this.props.players}
      </td>
    )
  }
}

class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      locs: props.locs
    };
  }
  renderSquare() {
    return (
      <Square />
    );
  }
  render() {
    var board_size = 20
    var squares = [];
    for (var i = 0; i < board_size; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        squares.push(<Square key={i} />);
    }
    for (var name in this.state.locs) {
      var location = this.state.locs[name];
      if (location < board_size) {
        var prevNames = squares[location].props.players == undefined ? '' : squares[location].props.players + " ";
        squares[location] = <Square players={prevNames+name} />;
      }
    }

    return (
      <div id="container">
        {squares}
      </div>
    );
  
  }
}
export default Board;