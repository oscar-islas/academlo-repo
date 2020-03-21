import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from '../../views/home/home-view';
import About from '../../views/about/about-view';
import Users from '../../views/users/user-view';
import {Container} from 'react-bootstrap';

export default function Routes(){
    return(
        <Container>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users/:userId">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Container>
    )
}