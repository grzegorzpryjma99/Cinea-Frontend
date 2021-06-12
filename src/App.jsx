import Routes from "./routes/Routes.jsx";
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import React from "react";
import AddFilm from "../src/components/admin/AddFilm";
import {AdminPanel} from "../src/components/admin/AdminPanel";
import AddScrenning from "../src/components/admin/AddScreening.jsx";
import AdminSettings from "./components/admin/AdminSettings.jsx";
import Film from "./pages/Film.jsx";
import MainPage from "./pages/MainPage.jsx";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup.jsx";
import Cart from "./pages/Cart.jsx";
import Sum from "./components/order/Sum.jsx";
import Place from "./components/order/Place.jsx";
//import 'bootstrap/dist/css/bootstrap.min.css';

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

      {/* <BrowserRouter>
        <Route component={Routes} />
      </BrowserRouter> */}

    </div>
  );
}

export default App;
