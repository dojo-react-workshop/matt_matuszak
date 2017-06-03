import React, {Component} from 'react'

class Card extends Component {


    doNothing() {
        // do nothing
    }

    select = () => {
        console.log('Card.select()', this.props)
        if (this.props.boardState === 'HIDDEN_BOARD')
            this.props.selectCard(this.props.data.id);
    }

    render() {
        // console.log('Card.render()',this.props.data)
        let displayCardClass = '';
        if (this.props.boardState === 'GAME_OVER') {
            displayCardClass = (this.props.data.correct && this.props.data.show) ? 'green' : (this.props.data.show) ? 'yellow' : (this.props.data.memoryMatch) ? 'showColor' : '' ;
        } else {
            displayCardClass = (this.props.data.show) ? 'showColor' : '' ;
        }


        const cardClass = `small-3 columns card ${displayCardClass}`;
        const clickAction = (this.props.boardState) ? this.props.selectCard : this.doNothing;
        return (
            <div className={cardClass} onClick={this.select}>
                <p>{this.props.data.id}:{(this.props.data.show)?'show': 'hide'}:{(this.props.data.correct) ? 'correct': 'wrong'}</p>
            </div>
        )
    }
}

export default Card
