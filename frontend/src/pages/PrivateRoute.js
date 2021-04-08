import React from 'react';

import { Redirect, Route } from 'react-router';

const PrivateRoute = props => {
    const isLogged =!!localStorage.getItem('AdmName')
    return isLogged ? <Route {...props}/> : <Redirect to="/"/>
}

export default PrivateRoute;