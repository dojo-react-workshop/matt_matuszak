import React, { Component } from 'react';
import JSLibrary from './JSLibrary';

class JSLibraryContainer extends Component {

    constructor(props) {
        super(props);

        const jsLibraries = new Map();
        props.jsLibraries.forEach((val) => {
            val.count = 0;
            jsLibraries.set(val.name, val);
        })
        this.state = {
            jsLibrariesMap: jsLibraries
        }
        // console.log('initialized js libraries', this.state);
    }

    increment = (libName, incrementor) => {
        const mutalableState = this.state;
        this.state.jsLibrariesMap.get(libName).count = this.state.jsLibrariesMap.get(libName).count + incrementor;
        this.setState(mutalableState);
    }

    render() {
        const jsLibraries = []
        this.state.jsLibrariesMap.forEach((lib, key) => {
            // console.log('Map Entry-->', lib);
            const newJsLibEntry = (<JSLibrary key={key} lib={lib} increment={this.increment}></JSLibrary>);
            // console.log('New js entry-->', newJsLibEntry)
            jsLibraries.push( newJsLibEntry);
        });

        const sortedLibs = jsLibraries.sort((a,b) => {
            if (a.props.lib.count < b.props.lib.count)
                return 1;
            else if (a.props.lib.count > b.props.lib.count)
                return -1;
            else
                return a.props.lib.name > b.props.lib.name;
        })

        console.log('Sorted Libs -->', sortedLibs);

        // console.log(jsLibraries);

        return (
            <div className="rootAppContainer">
                <div className="row">
                <div className="small-6 small-centered columns text-center">
                    <h1>Vote Your JS Library!</h1>
                </div>
                </div>
                <div className="row jsLibraryContainer">
                {sortedLibs}
                </div>
            </div>
        );
    }
}


export default JSLibraryContainer;
