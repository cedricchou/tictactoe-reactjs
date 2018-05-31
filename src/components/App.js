import React, {Component} from 'react';
import './app.css';

export default class App extends Component {


    render() {
        return (
            <div>
                <div id="game-board">
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