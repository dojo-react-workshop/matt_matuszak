import React, {Component} from 'react';

class Play extends Component{

    rewind = () => {
        console.log(`Play.rewind(${this.props.historyIndex})`)
        this.props.rewind(this.props.historyIndex);
    }

    render() {

        const moveText = `Move #${this.props.historyIndex}`;
        const player = (this.props.postBoardState.selectPlayer === null)
            ? ''
            : `Player: ${this.props.postBoardState.selectPlayer.name} (${this.props.postBoardState.selectPlayer.id})`

        return <div onClick={this.rewind}>{moveText} {(this.props.historyIndex ===0) ? '' : player}</div>
    }
}

export default Play
