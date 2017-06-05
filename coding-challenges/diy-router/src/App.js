import React, {Component} from 'react';
import Menu from './Menu'
import JavaScript from './JavaScript'
import Haskell from './Haskell'
import CoffeeScript from './CoffeeScript'
import {string, object} from 'prop-types'
import historyService from './HistoryService';


class Link extends Component {
    sendMe = (event) => {
        event.preventDefault();
        historyService.navigateTo(this.props.path);
        // window.history.pushState({}, null, this.props.path)
        // console.log(event);
        //this.props.rerender()
    }
    render() {
        return (
            <div><a href="" onClick={this.sendMe}>{this.props.children}</a></div>
        );
    }
}

Link.propTypes = {
    path: string.isRequired
}

class Route extends Component {
    render() {
        return (
            (historyService.path === this.props.path) ? <this.props.component /> : null
            // (window.location.pathname === this.props.path) ? <this.props.component /> : null
        )
    }
}

Route.propTypes = {
    path: string.isRequired
    // , component: object.isRequired
}

class App extends Component {

    constructor(props) {
        super(props);
        historyService.subscribe(this.rerender);
    }

    rerender = () => {
        console.log('App.rerender()')
        this.forceUpdate();
    }

    render() {
        return (
            <div>
                <Link path="/javascript">JavaScript</Link>
                <Link path="/haskell">Haskell</Link>
                <Link path="/coffeescript">CoffeeScript</Link>
                <hr/>
                <Route path="/javascript" component={JavaScript} />
                <Route path="/haskell" component={Haskell} />
                <Route path="/coffeescript" component={CoffeeScript} />

            </div>
        );
    }
}


export default App;
