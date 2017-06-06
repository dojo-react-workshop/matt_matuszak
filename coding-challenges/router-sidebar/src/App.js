import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const linkData = [
    {
        path: '/'
        , sideBarText: () => <div><h2>Home</h2></div>
        , mainText: () => <div><b>home!</b></div>
        , exact: true
    }
    ,
    {
        path: '/bubblegum'
        , sideBarText: () => <div><h2>Bubblegum</h2></div>
        , mainText: () => <div><b>bubblegum!</b></div>
    }
    ,
    {
        path: '/shoelaces'
        , sideBarText: () => <div><h2>Shoelaces</h2></div>
        , mainText: () => <div><b>shoelaces!</b></div>
    }
]


class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Sidebar</h1>
          <Router>
              <div style={{maxWidth: '400px'}}>
                  <div>
                      <div style={{float: 'left'}}>
                          <Link to="/">Home</Link><br />
                          <Link to="/bubblegum">Bubblegum</Link><br />
                          <Link to="/shoelaces">Shoelaces</Link><br /><br />

                          {
                              linkData.map((value, index) => {
                                  return (
                                      <Route
                                      key={index}
                                      path={value.path}
                                      component={value.mainText}
                                      exact={value.exact}
                                    />
                                    )
                              })
                          }
                      </div>
                      <div style={{float: 'left'}}>
                      </div>
                      <div style={{float: 'right'}}>
                          {
                              linkData.map((value, index) => {
                                  return (
                                      <Route
                                      key={index}
                                      path={value.path}
                                      component={value.sideBarText}
                                      exact={value.exact}
                                    />
                                    )
                              })
                          }
                      </div>
                  </div>
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
