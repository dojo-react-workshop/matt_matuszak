import React, { Component } from 'react';
import JSLibrary from './JSLibrary';

class JSLibraryContainer extends Component {

    constructor(props) {
        super(props);

        const jsLibraries = props.jsLibraries.map((lib) => {
            return <JSLibrary key={lib.name} lib={lib} resort={this.sort}></JSLibrary>
        })

        this.state = {
            jsLibraries: jsLibraries
        };
    }

    sort = () => {
        const sortedLibraries = this.state.jsLibraries.sort((a, b) => {
            return a.props.lib.getState().count < b.props.lib.getState().count;
        });
        const willBeNewState = this.state;
        willBeNewState.jsLibraries = sortedLibraries;
        this.setState(willBeNewState);
    }

    render() {
        // console.log(this.state);


        return (
            <div className="rootAppContainer">
                <div className="row">
                <div className="small-6 small-centered columns text-center">
                    <h1>Vote Your JS Library!</h1>
                </div>
                </div>
                <div className="row jsLibraryContainer">
                {this.state.jsLibraries}
                </div>
            </div>
        );
    }
}


export default JSLibraryContainer;
