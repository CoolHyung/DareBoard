import React from 'react';

class Square extends React.Component {
  render() {
    const color_ = this.props.color;
    return (
      <td
        style={{
          overflow:'hidden',
          width:'25px',
          height:'25px',
          backgroundColor:'#e4e4a1',
          color:'red',
          boarderColor: 'black',
          border:".5px solid black"
        }}
      onClick={this.props.handleClick} >
        
      </td>
    )
  }
}

class Board extends React.Component{
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

    return (
      <div className="board-row">
        {squares}
      </div>
    );
  }
}
export default Board;