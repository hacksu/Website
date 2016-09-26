import * as React from "react";

import { Home } from "./components/home";
import {Admin} from "./components/admin";
import { Contact } from "./components/contact"

import { Router, Route, Link, browserHistory } from 'react-router'


interface RoutesProps {

}

export function Routes (props: RoutesProps) {
    return  <Router history={browserHistory}>
                <Route path="/" component={Home} />
                <Route path="/admin" component={Admin} />
                <Route path="/contact" component={Contact} />
            </Router>
}