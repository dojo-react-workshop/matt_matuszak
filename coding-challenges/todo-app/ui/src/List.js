import React, {Component} from 'react'

class List extends Component {
    render() {


        return (
            <div className="row">
                <div className="row">
                    <div className="medium-1 text-center columns">
                        <input type="checkbox" className="listMargin"></input>
                    </div>
                    <div className="medium-11 columns listPadding">
                        <input type="text" value={this.props.details.name} />
                    </div>
                    <hr />
                </div>
            </div>
        )
    }
}

export default List
