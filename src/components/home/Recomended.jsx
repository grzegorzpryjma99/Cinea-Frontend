import React from 'react';
import "../../style/MainPage.css"
import Film from '../../pages/Film'
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

