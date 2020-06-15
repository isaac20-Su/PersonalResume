import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';

import HomePage from './components/homePage/HomePage';

import './custom.css'

export default () => (
    <div style={{height: '100%'}}>
        <Route exact path='/' component={HomePage} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data/:startDateIndex?' component={FetchData} />
    </div>
);
