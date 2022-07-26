import React from 'react';
import { Router, Route, IndexRouteProps ,Redirect, hasHistory } from 'react-router'

import App from './app'
import BillingCycle from '../billingCycle/billingCycle';
import Dashboard2 from '../dashboard2/dashboard2';

export default props => (
    <Router history={hasHistory}>]
        <Route path='/' component={App}>
            <IndexRouteProps component={Dashboard2} />
            <Route paht='/billingCycles' component={BillingCycle} />
        </Route>
        <Route path='/' component={Dashboard2} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
        
    </Router>
)