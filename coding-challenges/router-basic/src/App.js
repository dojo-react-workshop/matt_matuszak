import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <h2>Home</h2>
        </div>
    )
}

const About = () => {
    return (
        <div>
            <h2>About</h2>
        </div>
    )
}

const Topic = ({ match }) => {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    )
}

const Topics = ({ match }) => {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li><Link to={`${match.url}/rendering`}>Rendering with React</Link></li>
                <li><Link to={`${match.url}/components`}>Components</Link></li>
                <li><Link to={`${match.url}/props-vs-state`}>Props vs. State</Link></li>
            </ul>

            <hr />

            <Route path={`${match.url}/:topicId`} component={Topic} />
            <Route exact path={`${match.url}`} render={()=> <div><p>Please Select a Topic</p></div>} />
        </div>
    )
}


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Basics</h1>
          <Router>
              <div>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/topics">Topics</Link></li>
                  </ul>
                  <hr />
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/topics" component={Topics}/>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
