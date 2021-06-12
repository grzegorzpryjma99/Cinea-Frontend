import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";
import MainPage from "../pages/MainPage";
import Film from "../pages/Film.jsx";
import AddFilm from "../components/admin/AddFilm";
import {AdminPanel} from "../components/admin/AdminPanel";
import AddScrenning from "../components/admin/AddScreening.jsx";
import AdminSettings from "../components/admin/AdminSettings.jsx";
import Cart from "../pages/Cart";


const Routes = () => {
  return (
    <AdminPanel>
    <Switch>
      <Route path='/signup' component={Signup} />
      <Route path='/' component={Signin} />
      <Route exec path='/main-page' component={MainPage} />
      <Route path='/cart' component={Cart}/>
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
