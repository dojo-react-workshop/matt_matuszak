import React, {Component} from 'react';
import BoardCSS from './Board.css'


class Square extends Component {

    click = () => {
        // console.log(`Square.click()-->`, this.props.cellDetails.id);
        this.props.selectCell(this.props.cellDetails.id);
    }

    render() {
        // console.log('Square.render()-->',this.props);
        return (
            <div
                className="boardCell"
                onClick={this.click}>
                {this.props.cellDetails.content}
            </div>
        )
    }
}


export default Square
