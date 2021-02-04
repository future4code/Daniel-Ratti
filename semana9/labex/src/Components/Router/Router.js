import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from '../Home/Home'
import ManageTrip from '../ManageTrip/ManageTrip';
import CreateTrip from '../CreateTrips/CreateTrip'
import InfoTrip from '../InfoTrip/InfoTrip';
import ApplyTrip from '../ApplyTrip/ApplyTrip';
import Login from '../Login/Login';

const Router = () => {
    return(
        <BrowserRouter>
         <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/application-form">
          <ApplyTrip />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/trips/create">
          <CreateTrip />
        </Route>
        <Route exact path="/trips/list">
          <ManageTrip />
        </Route>
        <Route exact path="/trips/details">
          <InfoTrip />
        </Route>
        <Route exact path="/logout">
          <Redirect to="/" />
        </Route>
        <Route path="/">
          <p>se fudeu</p>
        </Route>
      </Switch>
        </BrowserRouter>
    )
}

export default Router;