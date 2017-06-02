import React, {Component} from 'react'

class Filter extends Component {
    render() {
        return (
            <div className="row">
                <div className="medium-2 columns align-middle">
                    <p className="valign-middle itemsRemaining">3 items left</p>
                </div>
                <div className="medium-8 columns">
                    {/* <div className="row"> */}
                        <ul className="button-group secondary">
                            <li><button>All</button></li>
                            <li><button>Active</button></li>
                            <li><button>Completed</button></li>
                        </ul>
                    {/* </div> */}
                </div>
                <div className="medium-2 columns">
                    <p>{''}</p>
                </div>
            </div>
        )
    }
}

export default Filter
