import React, {Component} from 'react';
import './app.css';

export default class App extends Component {

    constructor() {
        super ();
        this.state = {
            sign: "X"
        }
    }
    
    clicked(event) {
        event.target.innerHTML = this.state.sign;
        this.setState({
            sign: this.state.sign === "X" ? "O" : "X"
        })
    }

    render() {
        return (
            <div id="main-div">
                <div id="game-board" onClick={(e)=>this.clicked(e)}>
                    <div className="cell" id="cell1"></div>
                    <div className="cell" id="cell2"></div>
                    <div className="cell" id="cell3"></div>
                    <div className="cell" id="cell4"></div>
                    <div className="cell" id="cell5"></div>
                    <div className="cell" id="cell6"></div>
                    <div className="cell" id="cell7"></div>
                    <div className="cell" id="cell8"></div>
                    <div className="cell" id="cell9"></div>
                </div>
            </div>
        )
    }
}