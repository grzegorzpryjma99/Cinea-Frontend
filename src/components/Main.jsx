import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Redirect, useHistory } from 'react-router-dom'
import auth from '../reducers/auth';
import { useSelector } from 'react-redux'
import logo from './logo.svg'
import { Switch, Route } from 'react-router-dom'
import "./MainPage.css"
import Recomended from "./Recomended";
import Repertoire from "./Repertoire"
import Footer from './Footer';
import Header from './Header';
import Films from './Films'

const Main = () =>  {

    const togglePanel = () => {
        
      };

    return (
            <div>
            <Recomended />
            <Repertoire />
            <Switch>
                <Route path='/main-page/pn' component={Films}/>
                <Route path='/main-page/wt' component={Films}/>
                <Route path='/main-page/sr' component={Films}/>
                <Route path='/main-page/cz' component={Films}/>
                <Route path='/main-page/pt' component={Films}/>
                <Route path='/main-page/sob' component={Films}/>
                <Route path='/main-page/nd' component={Films}/>
            </Switch>
       </div>
           
  );
};

export default Main;


