import React, {Component} from 'react';

class Play extends Component{

    rewind = () => {
        console.log(`Play.rewind(${this.props.historyIndex})`)
        this.props.rewind(this.props.historyIndex);
    }

    render() {
        // console.log('Play.render()-->', this.props.playDetails);
        const moveText = `Move #${this.props.historyIndex}`;
        // const player = (this.props.postBoardState.selectPlayer === null)
        //     ? ''
        //     : `Player: ${this.props.postBoardState.selectPlayer.name} (${this.props.postBoardState.selectPlayer.id})`

        const player = (this.props.playDetails.player === null)
            ? ''
            : `Player: ${this.props.playDetails.player.name} (${this.props.playDetails.player.id})`


        return <div onClick={this.rewind}>{moveText} {(this.props.historyIndex ===0) ? '' : player}</div>
    }
}

export default Play
