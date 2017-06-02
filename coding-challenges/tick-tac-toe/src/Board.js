import React, {Component} from 'react'
import Square from './Square';
import BoardCSS from './Board.css'

class Board extends Component {

    selectCell = (item) => {
        this.props.selectCell(item);
    }

    render() {

        // console.log(`Board.render()-->`, this.props.grid)

        const boardRows = [];
        for (var i = 0; i < this.props.grid.length; i += 3) {
            boardRows.push(
                <div key={i} className="boardRow">
                    <Square key={this.props.grid[i+0].id} selectCell={this.selectCell} cellDetails={this.props.grid[i+0]} />
                    <Square key={this.props.grid[i+1].id} selectCell={this.selectCell} cellDetails={this.props.grid[i+1]} />
                    <Square key={this.props.grid[i+2].id} selectCell={this.selectCell} cellDetails={this.props.grid[i+2]} />
                </div>
            );
        }

        return (
            <div className="boardDiv">
                <div className="boardTable">
                    {boardRows}
                </div>
            </div>
        )
    }
}

export default Board
