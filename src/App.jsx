import Routes from "./routes/Routes.jsx";
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";import React from "react";
import AddFilm from "../src/components/admin/AddFilm";
import {AdminPanel} from "../src/components/admin/AdminPanel";
import AddScrenning from "../src/components/admin/AddScreening.jsx";
import AdminSettings from "./components/admin/AdminSettings.jsx";
import Film from "./components/filmpage/Film.jsx";
import MainPage from "./components/home/MainPage.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Cart from "./components/order/Cart.jsx";
import Sum from "./components/order/Sum.jsx";
import Place from "./components/order/Place.jsx";

function App() {
  return (
    <div className='app'>
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

      {/* <BrowserRouter>
        <Route component={Routes} />
      </BrowserRouter> */}

    </div>
  );
}

export default App;
