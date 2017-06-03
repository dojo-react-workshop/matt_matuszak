import React, {Component} from 'react';
import Board from './Board'
import GameAction from './GameAction'
import CSS from './App.css'

class App extends Component {

    constructor(props) {
        super(props);

        let cardData = [];
        for (let i = 0; i < 12; i++) {
            cardData.push(this.constructCardData())
        }

        this.state = {
            cardData: cardData
            , userActions: 'DEFAULT'
        }
    }

    constructCardData = () => {
        return {
            id: Math.floor(Math.random() * 1000000),
            active: false
        }
    }

    startGame = () => {
        this.setState({userActions: 'START_GAME'})
    }

    showRandomizedBoard = () => {
        this.setState({userActions: 'DISPLAY_RANDOM'})
    }

    hideBoard = () => {
        this.setState({userActions: 'HIDDEN_BOARD'})
    }

    render() {
        return (
            <div className="row app">
                <div className="small-12 columns">
                    <h1 className="text-center">Memory Game</h1>
                </div>
                <div className="small-12 columns">
                    <Board cardData={this.state.cardData}/>
                </div>
                <div className="small-2 small-centered columns">
                    <GameAction state={this.state.userActions} startGame={this.startGame} showRandomizedBoard={this.showRandomizedBoard} hideBoard={this.hideBoard} />
                </div>
            </div>
        );
    }
}

export default App;
