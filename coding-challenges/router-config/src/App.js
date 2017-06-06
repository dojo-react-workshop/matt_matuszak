import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const RouteWithSubRoutes = (route) => {
    return (
        <Route path={route.path} render={(props) => <route.component {...props} routes={route.routes} />} />
    )
}

const Taco = ({ routes } ) => {
    return (
        <div>
            <h2>Tacos</h2>
            <ul>
                <li><Link to="/tacos/bus">Bus</Link></li>
                <li><Link to="/tacos/cart">Cart</Link></li>
            </ul>
            <hr />
            {
                routes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)
            }
        </div>
    )
}

const Bus = () => {
    return (
        <h3>Bus</h3>
    )
}

const Cart = () => {
    return (<h3>Cart</h3>)
}

const Sandwich = () => {
    return (
        <div>
            <h2>Sandwiches</h2>
        </div>
    )
}

const routes = [
    {
        path: '/tacos'
        , component: Taco
        , routes: [
            { path: '/tacos/bus', component: Bus}
            , { path: '/tacos/cart', component: Cart}
        ]
    }
    , {
        path: '/sandwiches'
        , component: Sandwich
    }
]

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>Config</h1>
          <Router>
              <div>
                  <ul>
                      <li><Link to="/tacos">Tacos</Link></li>
                      <li><Link to="/sandwiches">Sandwiches</Link></li>
                  </ul>
                  <hr />
                  {
                      routes.map((route, index) => <RouteWithSubRoutes key={index} {...route} />)
                  }
              </div>
          </Router>
      </div>
    );
  }
}

export default App;
