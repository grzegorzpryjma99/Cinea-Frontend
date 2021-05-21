import React from 'react';
import { Switch, Route } from 'react-router-dom'
import "./MainPage.css"
import Recomended from "./Recomended";
import Repertoire from "./Repertoire"
import Films from '../filmpage/Films'

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


