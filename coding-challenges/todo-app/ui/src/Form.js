import React, {Component} from 'react'

class Form extends Component {
    render() {
        return (
            <div className="row">
                <span className="icon icon-caret-down medium-1 columns valign-middle text-dark-grey text-center" style={{fontSize: '2em'}}></span>
                <input type="text" className="medium-11 columns" placeholder="What needs to be done?"></input>
                <hr />
            </div>
        )
    }
}

export default Form
