import React, {useContext, useState} from 'react';
import { Switch, Route, useParams, Link} from 'react-router-dom'
import "./MainPage.css"
import Recomended from "./Recomended";
import Repertoire from "./Repertoire"
import Films from './Films'


const Main = () =>  {

  const now = new Date();
  const [date, setDate]= useState(`${now.getFullYear()}-${0}${now.getMonth()+1}-${0}${now.getDate()}`)
 
  return (
            <div>
              <Recomended />

              <div className="repertoire">
                <h1 className='repertuar'>Repertuar</h1>
                <div className="repertoire-buttons">
                    <input 
                    className='choose-date'
                    value={date}
                    onChange={(e) => {const date = e.target.value; setDate(date);}}
                    type='date'></input>
                    <Link to={`/main-page/seanse`}><button className='order-button' >Znajdź seans </button></Link>
                </div>
              </div>

              <Switch>
                  <Route path={`/main-page/seanse`}>
                    <Films data={date}/>
                  </Route>
              </Switch>
       </div>
           
  );
};

export default Main;


