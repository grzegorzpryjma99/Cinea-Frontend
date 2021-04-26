import React, { useState, useEffect,setState,setLoading,setHasError } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom'
import auth from '../reducers/auth';
import logo from './logo.svg'
import "./MainPage.css"
import plakat from './platak.svg'
import ProposedFilms from './ProposedFilms'
import Film from './Film'
import { Switch, Route } from 'react-router-dom'
import { proposed } from "../actions/auth.js";


const Recomended = () =>  {


    return (
        <Switch>
            <Route exact path='/main-page*' component={ProposedFilms}/>
            <Route path='/film/:number' component={Film}/>
        </Switch>
  );
};

export default Recomended;

