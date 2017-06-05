import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const Id = ({ match }) => {

    return (
        <div>
            <p>{match.params.linkId}</p>
        </div>
    )
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>URL Parameters</h1>
          <Router>
              <div>
                  <h1>Accounts</h1>
                  <ul>
                      <li><Link to="/netflix">Netflix</Link></li>
                      <li><Link to="/zillow">Zillow Group</Link></li>
                      <li><Link to="/yahoo">Yahoo</Link></li>
                      <li><Link to="/modus">Modus Create</Link></li>
                  </ul>
                  <hr />
                  {/* <Route exact path="/" render={() => null}/> */}
                  <Route path="/:linkId" component={Id}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
