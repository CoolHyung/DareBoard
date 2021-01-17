import React from 'react';
import './Board.css';


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
<<<<<<< HEAD
    for (var i = 0; i < 10; i++) {
=======
    for (var i = 0; i < 20; i++) {
>>>>>>> 06f759bf557b72ee36d7b4004441efb517f53d3d
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        squares.push(<Square key={i} />);
    }
    for (var name in this.state.locs) {
      var location = this.state.locs[name];
      squares[location] = <Square player = {name} / >
    }

    return (
      <div id="container">
        {squares}
      </div>
    );
  }
}
export default Board;