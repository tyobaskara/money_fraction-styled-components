import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
require('../static/favicon.ico');
import style from './style/app.scss';

import Header from './components/commons/Header';
import Home from './view/Home';
import Page404 from './view/Page404';

ReactDOM.render((
    <Provider store={ store }>
        <Router history={browserHistory}>
            <React.Fragment>
                <Header />
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route render={props => <Page404 {...props} />} />
                </Switch>
            </React.Fragment>
        </Router>
    </Provider>
), document.getElementById("index"));

// Initial Redux Setup - step 1
// set provider and load store