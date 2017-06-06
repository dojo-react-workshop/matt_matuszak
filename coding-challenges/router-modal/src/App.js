import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Gallery = () => {
    return (
        <div>
            <h1>Gallery</h1>
        </div>
    )
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Modal</h1>
          <Router>
              <div>
                  <Link to="/gallery">Visit the Gallery</Link>
                  <h2>Featured Items</h2>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/tomato">Tomato</Link></li>
                      <li><Link to="/crimson">Crimson</Link></li>
                  </ul>

                  <Route path="/gallery" component={Gallery}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
