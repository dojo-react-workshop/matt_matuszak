import React, {Component} from 'react';
import Board from './Board'
import GameAction from './GameAction'
import CSS from './App.css'

class App extends Component {

    constructor(props) {
        super(props);

        this.state = this.constructAppsInitialState();
    }

    constructAppsInitialState () {
        let cardData = [];
        for (let i = 0; i < 12; i++) {
            cardData.push(this.constructCardData())
        }

        return {
            cardData: cardData
            , userActions: 'DEFAULT'
        }
    }

    constructCardData = () => {
        return {
            id: Math.floor(Math.random() * 1000000),
            show: false,
            memoryMatch: false
        }
    }

    startGame = () => {
        this.setState({userActions: 'START_GAME'})
    }

    showRandomizedBoard = () => {
        const randomMap = new Map();

        while (randomMap.size < 5) {
            randomMap.set(Math.floor(Math.random() * 12), 'Hello');
        }
        console.log(randomMap)

        const newCardDataState = this.state.cardData;

        const randomKeys = randomMap.keys();
        let randomIndex;
        while( (randomIndex = randomKeys.next()).done != true ) {
            // console.log(randomIndex);
            newCardDataState[randomIndex.value].show = true;
            newCardDataState[randomIndex.value].memoryMatch = true;
        }

        this.setState({userActions: 'DISPLAY_RANDOM', cardData: newCardDataState})
    }

    hideBoard = () => {
        const boardData = this.state.cardData;
        boardData.forEach((card) => {
            card.show = false;
        })

        this.setState({userActions: 'HIDDEN_BOARD', cardData: boardData})
    }

    selectCard = (id) => {
        console.log('selected card!', id);
        const cardData = this.state.cardData;

        for (var i = 0; i < cardData.length; i++) {
            if (cardData[i].id === id) {
                cardData[i].show = !cardData[i].show;
                break;
            }
        }

        this.setState({cardData: cardData})
    }

    playAgain = () => {
        const initialState = this.constructAppsInitialState()
        initialState.userActions = 'START_GAME'
        this.setState(initialState);
    }

    gameOver = () => {

        const cardData = this.state.cardData;
        let correctCards = 0;
        for (var i = 0; i < cardData.length; i++) {

            if ( (cardData[i].show && cardData[i].memoryMatch)
                || (!cardData[i].show && !cardData[i].memoryMatch) ) {
                cardData[i].correct = true;
                correctCards++;
            } else {
                cardData[i].correct = false;
            }
            cardData[i]
        }

        this.setState({userActions: 'GAME_OVER', cardData: cardData, winner: (correctCards === cardData.length)})
    }

    render() {
        return (
            <div className="row app">
                <div className="small-12 columns">
                    <h1 className="text-center">Memory Game</h1>
                </div>
                <div className="small-12 columns">
                    <Board cardData={this.state.cardData} boardState={this.state.userActions} selectCard={this.selectCard}/>
                </div>
                <div className="small-2 small-centered columns">
                    <GameAction
                        state={this.state.userActions}
                        startGame={this.startGame}
                        showRandomizedBoard={this.showRandomizedBoard}
                        hideBoard={this.hideBoard}
                        gameOver={this.gameOver}
                        playAgain={this.playAgain}
                        winner={this.state.winner}/>
                </div>
            </div>
        );
    }
}

export default App;
