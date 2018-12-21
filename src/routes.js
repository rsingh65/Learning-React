import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';

export default (
    <Route path='/' componet={App}>
        <IndexRoute path="/" componet={HomePage}></IndexRoute>
        <Route path="about" componet={AboutPage}></Route>
    </Route>
);