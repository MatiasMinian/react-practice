import React from 'react'
import { Router, Route, IndexRoute, hashHistory} from 'react-router'
import Home from '../containers/Home'
import Main from '../containers/Main'

let routes = (
    <Router history = {hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component = {Home}/>
        </Route>
    </Router>

);

export default routes;