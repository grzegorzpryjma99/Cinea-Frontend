import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "../components/Signin.jsx";
import Signup from "../components/Signup.jsx";
import Logout from "../components/Logout.jsx";
import MainPage from "../components/MainPage.jsx";
import Film from "../components/Film.jsx";
import AddFilm from "../components/AddFilm.jsx";
import {AdminPanel} from "../components/AdminPanel";
import AddScrenning from "../components/AddScreening.jsx";
import AdminSettings from "../components/AdminSettings.jsx";

const Routes = () => {
  return (
    <AdminPanel>
    <Switch>
      <Route path='/' exact component={Signin} />
      <Route path='/signup' component={Signup} />
      <Route path='/logout' component={Logout} />
      <Route path='/main-page' component={MainPage} />
      <Route path='/film/:filmId' component={Film} />

          <Route path='/adminSettings'> 
            <AdminSettings />
          </Route>
          <Route path='/addFilm'> 
            <AddFilm />
          </Route>
          <Route path='/addScreening'>
            <AddScrenning />
          </Route>
      
    </Switch>
    </AdminPanel>
  );
};

export default Routes;
