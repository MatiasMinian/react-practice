import React from 'react'
import { Router, Route, IndexRoute, hashHistory} from 'react-router'
import Home from '../components/Home'
import Main from '../components/Main'

let routes = (
    <Router history = {hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component = {Home}/>
        </Route>
    </Router>

);

export default routes;