import React from 'react';
import { Router, Route, Redirect, hasHistory } from 'react-router'
import BillingCycle from '../billingCycle/billingCycle';
import Dashboard from '../dashboard/dashboard';

export default props => (
    <Router history={hasHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
        
    </Router>
)