import React from 'react';
import './Textbox.css'

class Newsbox extends React.Component {
  render() {
    return (
      <div className="box-field" className="newsbox">
        <h3>TextBox</h3>
        <p>Press the "Roll the Dice" Button to start Playing </p>
      </div>
    );
  }
}

export default Newsbox