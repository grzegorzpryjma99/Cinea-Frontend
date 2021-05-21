import React, { useState, useEffect,setState,setLoading,setHasError } from 'react';
import "./MainPage.css"
import Film from '../filmpage/Film'
import { Switch, Route } from 'react-router-dom'
import Slider from "./Slider";

const Recomended = () =>  {


    return (
        <Switch>
            <Route exact path='/main-page*' component={Slider}/>
            <Route path='/film/:number' component={Film}/>
        </Switch>
  );
};

export default Recomended;

