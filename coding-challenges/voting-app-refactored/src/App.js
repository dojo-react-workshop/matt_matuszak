import React, { Component } from 'react';
import JSLibraryContainer from './JSLibraryContainer';
import styles from './style.css';


class App extends Component {
    render() {

        const jsLibraries = [{name: 'React'}, {name: 'Vue'}, {name: 'Angular'}, {name: 'Ember'}]

        return (
            <div className={styles.jsLibraryContainer}>
                <JSLibraryContainer jsLibraries={jsLibraries}></JSLibraryContainer>
            </div>
        );
    }
}

export default App;
