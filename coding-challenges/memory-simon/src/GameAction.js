import React, {Component} from 'react'

class GameAction extends Component {

    constructor(props) {
        super(props);

        this.state = {
            countDownClock: 5
            , gameState: this.props.state
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps)
        if (this.props.state !== nextProps.state) {
            this.setState({gameState: nextProps.state})
        }
    }

    componentDidUpdate()  {
        console.log('GameAction.componentDidUpdate()', this.state);
        if (this.state.countDownClock <= 0 && this.state.gameState === 'START_GAME') {
            this.props.showRandomizedBoard();
            // this.setState({countDownClock: 5})
        } else if (this.state.countDownClock <= 0 && this.state.gameState === 'DISPLAY_RANDOM') {
            this.props.hideBoard();
            // this.setState({countDownClock: 5})
        }
    }
    render() {
        console.log('GameAction.render()', this.props, this.state.gameState)
        let actionAvailableContent = <div>Should not see this</div>;
        switch (this.state.gameState) {
            case 'DEFAULT':
                actionAvailableContent = <button onClick={this.props.startGame} className="tiny margin-top-medium">Start Game</button>;
                break;
            case 'START_GAME':

                if (this.state.countDownClock > 0) {
                    setTimeout(() => {
                        this.setState({
                            countDownClock: (this.state.countDownClock -1)
                        })
                    }, 1000);
                    actionAvailableContent = (
                        <p className="margin-top-medium">Get Ready to memorize cells in {this.state.countDownClock}</p>
                    )
                } else {
                    actionAvailableContent = <p>Let's Begin! </p>
                }

                break;
            case 'DISPLAY_RANDOM':

                if (this.state.countDownClock > 0) {
                    setTimeout(() => {
                        this.setState({
                            countDownClock: (this.state.countDownClock -1)
                        })
                    }, 1000);
                    actionAvailableContent = <p>Start Memorizing!  You have {this.state.countDownClock} seconds(s) to memorize</p>
                } else {
                    actionAvailableContent = <p>Time is up!</p>
                }

                break;
            case 'HIDDEN_BOARD':
                actionAvailableContent = <p>Make your guesses!</p>
                break;
            default:
                actionAvailableContent = <div>Oh no</div>;
        }

        console.log('GameAction.render()', actionAvailableContent)

        return (
            <div>
                {actionAvailableContent}
            </div>
        )
    }
}

export default GameAction
