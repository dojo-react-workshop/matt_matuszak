import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Hank'
        };
    }
    changeName = () => {
        console.log("clicked");
        this.setState({
            name: 'Dan'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button onClick={this.changeName}>Change Name</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
