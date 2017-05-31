import React from 'react';
// import ReactDOM from 'react-dom';


class Counter extends React.Component {

    state = {
        counter: 0
    }

    increment = () => {
        const newIncrementVal = this.state.counter + 1;
        // console.log('new increment val', newIncrementVal);
        this.setState({
            counter: newIncrementVal
        })
        // console.log('updated state to', this.state.counter);
    }

    decrement = () => {
        const newDecrementVal = this.state.counter - 1;
        // console.log('new increment val', newDecrementVal);
        this.setState({
            counter: newDecrementVal
        })
        // console.log('updated state to', this.state.counter);
    }

    render() {
        return (
                <div className="card margin-vert-large" style={{ marginRight: 'auto', marginLeft: 'auto', maxWidth: '700px'}}>
                    <div className="row">
                        <div className="small-3 text-center small-centered columns">
                            <h2>{this.state.counter}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-12 text-center small-centered columns">
                            <button className="margin-right-medium" onClick={this.increment}>Increment</button>
                            <button className="margin-left-medium" onClick={this.decrement}>Decrement</button>
                        </div>

                    </div>
                </div>
        );
    }
}

export default Counter;
