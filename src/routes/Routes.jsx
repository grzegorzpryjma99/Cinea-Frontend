import React from "react";
import { Route, Switch } from "react-router-dom";
import Signin from "../components/Signin.jsx";
import Signup from "../components/Signup.jsx";
import Logout from "../components/Logout.jsx";
import MainPage from "../components/home/MainPage";
import Film from "../components/filmpage/Film.jsx";
import AddFilm from "../components/admin/AddFilm";
import {AdminPanel} from "../components/admin/AdminPanel";
import AddScrenning from "../components/admin/AddScreening.jsx";
import AdminSettings from "../components/admin/AdminSettings.jsx";
import dupa from "../components/order/Cart";


const Routes = () => {
  return (
    <AdminPanel>
    <Switch>
      <Route path='/signup' component={Signup} />
      <Route path='/' component={Signin} />
      <Route path='/logout' component={Logout} />
      <Route exec path='/main-page' component={MainPage} />
      <Route path='/cart' component={dupa}/>
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
