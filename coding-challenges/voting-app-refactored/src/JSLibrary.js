import React, { Component } from 'react';


class JSLibrary extends Component {

    constructor(props) {
        super(props);

        // console.log('JSLibrary -->', props);
        this.name = props.lib.name;
        this.state = {
         count: props.lib.count
        };
    }

    /*
    complements of stacktrace and reactjs docs
    https://stackoverflow.com/questions/41582197/state-not-updating-when-receiving-new-props-reactjs
    https://facebook.github.io/react/docs/react-component.html#componentwillreceiveprops
    */
    componentWillReceiveProps(nextProps) {
        // console.log('Next Props-->', nextProps, this.props, this.state);
        if (this.state.count !== nextProps.lib.count) {
            this.setState({
                count: nextProps.lib.count
            })
        }
    }

    increment = () => {
        this.props.increment(this.name, 1);
    }

    decrement = () => {
        this.props.increment(this.name, -1);
    }

    render() {
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
                    {this.name}
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
