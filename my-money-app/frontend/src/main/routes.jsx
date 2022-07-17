import React from 'react';
import { Router, Route, Redirect, hasHistory } from 'react-router'
import BillingCycle from '../billingCycle/billingCycle';
import Dashboard2 from '../dashboard2/dashboard2';

export default props => (
    <Router history={hasHistory}>
        <Route path='/' component={Dashboard2} />
        <Route path='/billingCycles' component={BillingCycle} />
        <Redirect from='*' to='/' />
        
    </Router>
)