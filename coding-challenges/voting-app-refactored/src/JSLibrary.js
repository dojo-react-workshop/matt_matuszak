import React, { Component } from 'react';


class JSLibrary extends Component {

    constructor(props) {
        super(props);
        // console.log('JSLibrary constructor-->', props);
        this.state = {
                name: props.lib.name
                , count: 0
        };
        props.lib.getState = this.getState;
    }

    getState = () => {
        return this.state;
    }

    increment = () => {
        let stateSnapshot = this.state;
        stateSnapshot.count = stateSnapshot.count + 1;
        this.setState(stateSnapshot);
        this.props.resort();
    }

    decrement = () => {
        let stateSnapshot = this.state;
        stateSnapshot.count = stateSnapshot.count - 1;
        this.setState(stateSnapshot);
        this.props.resort();
    }

    render() {
        // console.log('JSLibrary props-->', this.state);
        const plusStyle = {
            color: 'green'
            , fontSize: '3em'
        }
        const minusStyle = {
            color: 'red'
            , fontSize: '3em'
        }
        return (
            <div className="row libraryRow">
                <div className="small-4 columns text-center cell-props padding-vert-large counter">
                {this.state.count}
                </div>
                <div className="small-4 columns text-left cell-props padding-vert-large libraryName">
                    {this.state.name}
                </div>
                <div className="small-4 columns text-center cell-props padding-vert-small">
                    <span className="icon icon-expand" style={plusStyle} onClick={this.increment}></span>
                    <span className="icon icon-collapse" style={minusStyle} onClick={this.decrement}></span>
                </div>
            </div>
        )
    }
}


export default JSLibrary;
