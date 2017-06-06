import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Prompt } from 'react-router'


const Basic = ({ match }) => {
    return (
        <div>{match.params.basicId}</div>
    )
}

class Form extends Component {

    state = {
        blocking: false,
        text: ''
    }

    render() {
        return (
            <div>
                <Prompt
                    when={this.state.blocking}
                    message={location => "Are you sure you want to navigate to:" + location.pathname}
                />
                <p>Blocking?? {(this.state.blocking) ? '...you are being blocked' : 'nope'}</p>
                <input type="text"
                    placeholder="block when values are in here"
                    onChange={(event) => (event.target.value !== '') ? this.setState({blocking: true, text: event.target.value}) : this.setState({blocking: false})}
                    value={this.state.text}
                 />
                <br />
                <button onClick={(event) => this.setState({blocking: false, text: ''})}>Submit to stop blocking</button>
            </div>
        );
    }
}


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Prevent Transitions</h1>
          <Router>
              <div>
                  <ul>
                      <li><Link to="/">Form</Link></li>
                      <li><Link to="/basic/One">One</Link></li>
                      <li><Link to="/basic/Two">Two</Link></li>

                      <Route exact path='/' component={Form} />
                      <Route path="/basic/:basicId" component={Basic} />
                  </ul>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
