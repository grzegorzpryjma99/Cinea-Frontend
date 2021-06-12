import React, {useContext, useState} from 'react';
import "../../style/MainPage.css"
import Recomended from "./Recomended";
import Films from './Films'
import { ScreeningContext } from '../admin/AdminPanel'
import Galeria from './Galeria';


const Main = () =>  {

  const {filmy} = useContext(ScreeningContext) 
  const [film, setFilm] = useState("");

  const now = new Date();
  const [date, setDate]= useState(`${now.getFullYear()}-${0}${now.getMonth()+1}-${now.getDate()}`)
 
  function SelectionList(param) {
    return <div className='selectionContainer'>
      <select className='choose-date' onChange={(e) => {const film = e.target.value; setFilm(film);}}>
        { param.lista.map(item =>  {
         return <option 
                  id='film' 
                  className='selection-item' 
                  name='film' 
                  key={item.id} 
                  value={item.filmDetails.title} >{item.filmDetails.title}
                  </option>
        })}
      </select>
    </div>
  }


  return (
            <div>
              <Recomended />
              
              <div className="c-or">
              <span id="seanse">Repertuar</span>
                <div className="repertoire-buttons">
                  {/* <h1>Filtruj</h1> */}
                    <input 
                    className='choose-date'
                    value={date}
                    onChange={(e) => {const date = e.target.value; setDate(date);}}
                    type='date'></input>
                    <SelectionList lista = {filmy} />
                </div>
              </div>
              
              <Films data={date} film={film}/>
              
              
              <div className='c-or'>
              <span  id="gallery">Galeria</span>
              </div>
              
              {/* <div className='gallery'>
              {filmy.map( film => <div>
                <Image className='screening-image'  cloudName="dhdzistwc" publicId={film.filmDetails.imageURL}/>
              </div>)}
              </div> */}
              <Galeria />
              </div>
           
  );
};

export default Main;


