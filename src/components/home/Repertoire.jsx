import React, { useState , useContext} from 'react';
import "../../style/MainPage.css"
import { ScreeningContext } from "../admin/AdminPanel"
import { Link } from 'react-router-dom'

const Repertoire = () =>  {

  const {filmy} = useContext(ScreeningContext) 
  const [date, setDate]= useState("")
  const [film, setFilm] = useState("");

  console.log(date)
  
  function SelectionList(param) {
    return <div className='selectionContainer'>
      <select className='selection' onChange={(e) => {const film = e.target.value; setFilm(film);}}>
        { param.lista.map(item =>  {
         return <option 
                  id='film' 
                  className='selection-item' 
                  name='film' 
                  key={item.id} 
                  value={item.id} >{item.filmDetails.title}
                  </option>
        })}
      </select>
    </div>
  }


    return (
        <div className="repertoire">
            <h1 className='repertuar'>Repertuar</h1>
            <div className="repertoire-buttons">
                <input 
                value={date}
                onChange={(e) => {const date = e.target.value; setDate(date);}}
                type='date'></input>
                
                <SelectionList lista = {filmy} />

                <button className='monday' ><Link to={`/main-page/seanse`}>wyszukaj</Link> </button>
                {/* <button className='tuesday'><Link to='/main-page/wt'>Wt</Link></button>
                <button className='wednesday'><Link to={`/main-page/${date}`}>Śr</Link></button>
                <button className='thurstday'><Link to='/main-page/cz'>Cz</Link></button>
                <button className='friday'><Link to='/main-page/pt'>Pt</Link></button>
                <button className='saturday'><Link to='/main-page/sob'>Sob</Link></button>
                <button className='sunday'><Link to='/main-page/nd'>Nd</Link></button> */}
            </div>
        </div>
  );
};

export default Repertoire;
