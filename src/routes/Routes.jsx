import React from "react";
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Signin from "../pages/Signin.jsx";
import Signup from "../pages/Signup.jsx";
import MainPage from "../pages/MainPage";
import Film from "../pages/Film.jsx";
import AddFilm from "../components/admin/AddFilm";
import {AdminPanel} from "../components/admin/AdminPanel";
import AddScrenning from "../components/admin/AddScreening.jsx";
import AdminSettings from "../components/admin/AdminSettings.jsx";
import Sum from "../components/order/Sum.jsx";
import Place from "../components/order/Place.jsx";
import Cart from "../pages/Cart";


const Routes = () => {
  return (
    <Router>
    <AdminPanel>
      <Switch>
        <Route path='/cart/place'>
          <Place />
        </Route>
        <Route path='/cart/sum'>
          <Sum />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/main-page'>
          <MainPage />
        </Route>
        <Route path='/galeria'>
          <MainPage />
        </Route>
        <Route path='/film/:filmId'>
          <Film />
        </Route>
        <Route path='/adminSettings'> 
          <AdminSettings />
        </Route>
        <Route path='/addFilm'> 
          <AddFilm />
        </Route>
        <Route path='/addScreening'>
          <AddScrenning />
        </Route>
        <Route path='/cart/:screeningId'>
          <Cart />
        </Route>
        <Route exec path='/'>
          <Signin />
        </Route>
      </Switch>
    </AdminPanel>
  </Router>
  );
};

export default Routes;
