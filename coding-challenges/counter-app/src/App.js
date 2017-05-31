import React, { Component } from 'react';
import Counter from './Counter';

class App extends Component {

    state = {
        counters: []
    }

    addCounter = () => {
        // console.log('clicked add counter');
        // const newCounter = new Counter();
        // console.log(this.state);
        const counterStateToUpdate = this.state.counters;
        // console.log(counterStateToUpdate);
        counterStateToUpdate.push(
                <Counter key={Math.floor(Math.random()*10000)}></Counter>
        );
        this.setState({
            // counters: counters.push[new Counter()]
            counters: counterStateToUpdate
        })
        // console.log(this.state);
    }

    render() {
        return (
            <div className="grid-container" style={{margin: '30px'}}>
                <div className="row">
                    <button onClick={this.addCounter}>Add Counter</button>
                </div>
                <div className="row">
                    {this.state.counters}
                </div>
            </div>
        );
    }
}

export default App;
