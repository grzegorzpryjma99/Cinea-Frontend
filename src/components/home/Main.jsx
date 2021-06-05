import React, {useContext, useState} from 'react';
import { Switch, Route, useParams, Link} from 'react-router-dom'
import "./MainPage.css"
import Recomended from "./Recomended";
import Repertoire from "./Repertoire"
import Films from './Films'
import { ScreeningContext } from '../admin/AdminPanel'
import {Image} from 'cloudinary-react';


const Main = () =>  {

  const {filmy} = useContext(ScreeningContext) 
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
                </div>
              </div>

              
              <Films data={date}/>
              
              <div className='repertoire'>
              <h1 className='repertuar'>Galeria</h1>
              </div>
              <div className='gallery'>
              {filmy.map( film => <div>
                <Image className='screening-image'  cloudName="dhdzistwc" publicId={film.filmDetails.imageURL}/>
              </div>)}
              </div>
              </div>
           
  );
};

export default Main;


