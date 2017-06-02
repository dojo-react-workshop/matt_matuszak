import React, {Component} from 'react';
import Board from './Board';
import Result from './Result';

class App extends Component {

    constructor(props) {
        super(props);

        const grid = new Array(9);
        // for (var i = 0; i < grid.length; i++) {
        //     grid[i] = {id:i, content:''}
        // }
        this.fillGrid(grid);

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
            , plays: [{player: null, gridIndex: null}]
        }
    }

    fillGrid = (grid) => {
        for (var i = 0; i < grid.length; i++) {
            grid[i] = {id:i, content:''}
        }
    }

    rewindBoard = (historyIndex) => {
        console.log(`App.rewindBoard(${historyIndex})`)
        this.setState({rewind: true, rewindIndex: historyIndex});
    }

    selectCell = (item) => {
        console.log('App.selectCell()-->', this.state);
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

            let plays = this.state.plays;
            console.log('Pre Plays Mutation-->', plays);
            console.log('rewind state-->', this.state.rewind);
            if (this.state.rewind) {
                plays = plays.slice(0, this.state.rewindIndex + 1)
            } 
            plays.push({player: this.state.currentPlayer, gridIndex: item})
            console.log('Post Plays Mutation-->', plays);
            // const plays = this.state.plays;

            this.setState({
                grid: newGrid
                , selectPlayer: this.state.currentPlayer
                , currentPlayer: ((this.state.currentPlayer.id ==='X'?this.O:this.X))
                , gameOver: gameOver
                , plays: plays
                , rewind: false
                , rewindIndex: null
            });
        }
    }

    render() {

        const gridToUse = this.state.grid;
        if (this.state.rewind) {
            this.fillGrid(gridToUse);//.fill('')
            console.log('rewind index-->', this.state.rewindIndex)
            for (var i = 1; i <= this.state.rewindIndex; i++) {
                console.log('play-->', this.state.plays[i]);
                console.log('gird index', this.state.plays[i].gridIndex)
                gridToUse[this.state.plays[i].gridIndex] = {id: this.state.plays[i].gridIndex, content: this.state.plays[i].player.id}
                // gridToUse[this.state.plays[i].gridIndex] = {id: this.state.plays[i].gridIndex, content: this.state.plays[i].player}
            }

        }

        return (
            <div className="appDiv">
                <Board key={'BoardRoot'} grid={gridToUse} selectCell={this.selectCell}></Board>
                <Result key={'ResultRoot'} plays={this.state.plays} boardState={this.state} rewindBoard={this.rewindBoard}></Result>
            </div>
        );
    }
}

export default App;
