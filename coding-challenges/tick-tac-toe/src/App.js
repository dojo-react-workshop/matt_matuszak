import React, {Component} from 'react';
import Board from './Board';
import Result from './Result';

class App extends Component {

    constructor(props) {
        super(props);

        const grid = new Array(9);
        for (var i = 0; i < grid.length; i++) {
            grid[i] = {id:i, content:''}
        }

        this.X = {id: 'X', name:'Mack'};
        this.O = {id: 'O', name:'Willie'};

        this.winningCombos = [
             [0,1,2]
            ,[3,4,5]
            ,[6,7,8]
            ,[0,3,6]
            ,[1,4,7]
            ,[2,5,8]
            ,[0,4,8]
            ,[2,4,6]
        ];

        this.state = {
            grid: grid
            , selectPlayer: null
            , currentPlayer: this.X
            , gameOver: false
        }
    }

    rewindBoard = (historyIndex) => {
        console.log(`App.rewindBoard(${historyIndex})`)

    }

    selectCell = (item) => {
        // console.log(`Board.selectCell(${item})-->`, newGrid);
        if (!this.state.gameOver && this.state.grid[item].content === '') {
            const newGrid = this.state.grid;
            newGrid[item] = {
                id: item
                , content: this.state.currentPlayer.id
            };

            let gameOver = false;
            for (var comboIndex = 0; comboIndex < this.winningCombos.length; comboIndex++) {
                let consecitiveCount = 0;
                for (var squareCell = 0; squareCell < this.winningCombos[comboIndex].length; squareCell++) {
                    if(this.state.grid[this.winningCombos[comboIndex][squareCell]].content === this.state.currentPlayer.id)
                        consecitiveCount++;
                    else break;
                }
                if (consecitiveCount === 3) {
                    console.log('We have a winner!!!!')
                    gameOver = true;
                    break;
                }
            }

            this.setState({
                grid: newGrid
                , selectPlayer: this.state.currentPlayer
                , currentPlayer: ((this.state.currentPlayer.id ==='X'?this.O:this.X))
                , gameOver: gameOver
            });
        }
    }

    render() {
        return (
            <div className="appDiv">
                <Board key={'BoardRoot'} grid={this.state.grid} selectCell={this.selectCell} rewindBoard={this.rewindBoard}></Board>
                <Result key={'ResultRoot'} boardState={this.state}></Result>
            </div>
        );
    }
}

export default App;
