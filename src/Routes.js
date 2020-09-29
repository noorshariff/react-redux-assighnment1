import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import LoginForm from './Component/LoginForm';
import Meeting from './Component/Meeting';

// function Routes(){
    const Routes = () => (
        <BrowserRouter>
        <Switch>
            <Route exact path='/' component = {LoginForm} />
            <Route path='/meeting' component = {Meeting} />
        </Switch>
        </BrowserRouter>
    )
// }


export default Routes;