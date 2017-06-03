import React, {Component} from 'react'

class Card extends Component {

    render() {

        return (
            <div className="small-3 columns card"> <p>{this.props.data.id}</p></div>
        )
    }
}

export default Card
