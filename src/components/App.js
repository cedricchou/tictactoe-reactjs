import React, { Component } from "react";
import "./app.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      sign: "X",
      array: Array(9).fill("")
    };
  }

  clicked(event) {
    if (this.state.array[event.target.dataset.cell] === "") {
      this.state.array[event.target.dataset.cell] = this.state.sign;
      event.target.innerHTML = this.state.sign;
      this.setState({
        sign: this.state.sign === "X" ? "O" : "X",
        array: this.state.array
      });
    }
  }

  render() {
    return (
      <div id="main-div">
        <div id="game-board" onClick={e => this.clicked(e)}>
          <div className="cell" data-cell="0" id="cell1" />
          <div className="cell" data-cell="1" id="cell2" />
          <div className="cell" data-cell="2" id="cell3" />
          <div className="cell" data-cell="3" id="cell4" />
          <div className="cell" data-cell="4" id="cell5" />
          <div className="cell" data-cell="5" id="cell6" />
          <div className="cell" data-cell="6" id="cell7" />
          <div className="cell" data-cell="7" id="cell8" />
          <div className="cell" data-cell="8" id="cell9" />
        </div>
      </div>
    );
  }
}
