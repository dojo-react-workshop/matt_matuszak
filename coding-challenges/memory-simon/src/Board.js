import React, {Component} from 'react'
import Card from './Card'

class Board extends Component {

    render() {

        const cards = this.props.cardData.map((card) => {
            return <Card key={card.id} data={card} />
        })

        const cardRow1 = cards.splice(0,4);
        const cardRow2 = cards.splice(0,4);
        const cardRow3 = cards.splice(0,4);

        return (

            <div className="grid-container">
                <div className="row">
                    {cardRow1}
                </div>
                <div className="row">
                    {cardRow2}
                </div>
                <div className="row">
                    {cardRow3}
                </div>
                {cards}
            </div>

        )
    }
}

export default Board
