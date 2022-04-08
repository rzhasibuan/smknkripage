import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../View/Home';
import NotFound from '../View/NotFound';

function Index(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="*">
                    <NotFound/>
                </Route>
            </Switch>
        </div>
    );
}

export default Index;