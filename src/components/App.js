import React, { Component } from "react";
import "./app.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      sign: "X",
      array: Array(9).fill(null),
      endOfGame: false,
      winner: undefined,
      moves: 0,
      gameStatus: ""
    };
    this.restart = this.restart.bind(this);
  }

  clicked(event) {
    if (this.state.array[event.target.dataset.cell] === null) {
      const newArr = [...this.state.array];
      newArr[event.target.dataset.cell] = this.state.sign;
      event.target.innerHTML = this.state.sign;
      this.setState(
        {
          array: newArr,
          sign: this.state.sign === "X" ? "O" : "X",
          moves: this.state.moves + 1
        },
        this.checkWinState.bind(this)
      );
      if (this.state.endOfGame !== false) {
        event.target.innerHTML = null;
      }
    }
  }

  checkWinState() {
    const result = this.winner();
    if (result === "X") {
      this.setState({
        endOfGame: true,
        winner: "X",
        gameStatus: "The winner is X"
      });
    } else if (result === "O") {
      this.setState({
        endOfGame: true,
        winner: "O",
        gameStatus: "The winner is O"
      });
    } else if (this.state.moves === 9) {
      this.setState({
        endOfGame: true,
        winner: "draw",
        gameStatus: "The game is a draw"
      });
    }
  }

  winner() {
    const winningCombo = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    const array = this.state.array;
    let win;
    winningCombo.forEach(combo => {
      if (
        array[combo[0]] === array[combo[1]] &&
        array[combo[1]] === array[combo[2]]
      ) {
        win = array[combo[0]];
      }
    });
    return win;
  }

  restart() {
    this.setState({
      sign: "X",
      array: Array(9).fill(null),
      endOfGame: false,
      winner: undefined,
      moves: 0,
      gameStatus: ""
    });
    document.querySelectorAll(".cell").forEach(node => {
      node.innerHTML = "";
    });
  }

  render() {
    return (
      <div id="main-div">
        <div id="game-status">
          {this.state.gameStatus}
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
          <button type="submit" onClick={this.restart}>
            New Game
          </button>
        </div>
      </div>
    );
  }
}
