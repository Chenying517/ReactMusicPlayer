import React, { Component } from 'react';
import { render } from 'react-dom';
// import App from './index'
// import Player from './player'
// import ListItem from './listItem'
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory } from 'react-router';


class Root extends React.Component {
    render() {
        return ( 
            <Router history={hashHistory}>
                {/* <Route path='/' component='App'>
                    <IndexRoute component='Player'></IndexRoute >
                    <Route path='/listItem' component='ListItem'></Route>
                </Route> */}
            </Router>
        )
    }
}
export default Root;