import React, {Component} from 'react';
import Play from './Play';

class Result extends Component {

    // constructor(props) {
    //     console.log(`Result.constructor()-->`, props)
    //     super(props);
    //     // this.state = {
    //     //     history: [JSON.parse(JSON.stringify(this.props.boardState))]
    //     // }
    // }

    componentWillReceiveProps(nextProps) {
        console.log(`Result.componentWillReceiveProps()->`, nextProps);
        // const history = this.state.history;
        // history.push(JSON.parse(JSON.stringify(nextProps.boardState)));
        // this.setState({
        //     history: history
        // })
    }

    rewind = (historyIndex) => {
        console.log(`Result.rewind(${historyIndex})`)
        this.props.rewindBoard(historyIndex);
    }


    render() {

        // console.log('Result.render()-->plays', this.props.plays);

        const plays = [];
        // for (var i = 0; i < this.state.history.length; i++) {
        //     plays.push(<Play key={i} historyIndex={i} postBoardState={this.state.history[i]} rewind={this.rewind}></Play>)
        // }

        for (var i = 0; i < this.props.plays.length; i++) {
            plays.push(<Play key={i} historyIndex={i} playDetails={this.props.plays[i]} rewind={this.rewind}></Play>)
        }

        const player = (this.props.boardState.gameOver)
            ? `Winner: ${this.props.boardState.selectPlayer.name} (${this.props.boardState.selectPlayer.id}) !!!`
            : `Make Selection: ${this.props.boardState.currentPlayer.name} (${this.props.boardState.currentPlayer.id})`

        return (
            <div className="resultDiv">
                <h3>{player}</h3>
                <p>Moves:</p>
                {plays}
            </div>
        );
    }

}

export default Result
