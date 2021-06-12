import React , { useState, useContext }from "react";
import { ScreeningContext } from "./AdminPanel"
import axios from 'axios';



const AddScrenning= (props) => {
 
  const {filmy, rooms} = useContext(ScreeningContext) 
  const [film, setFilm] = useState("");
  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
console.log(filmy)
console.log(props)
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

      function SelectionListRoom(param) {
        return <div className='selectionContainer'>
          <select className='selection' onChange={(e) => {const room = e.target.value; setRoom(room);}}>
            { param.lista.map(item =>  {
             return <option 
                      id='room' 
                      className='selection-item' 
                      name='room' 
                      key={item.id} 
                      value={item.id} > {item.name}
                      </option>
            })}
          </select>
        </div>
      }

      const sendForm = () => {
        const form = {
          film:
          {
              id:film
          },
          room:
          {
              id:room
          },
          date: date,
          time: time+':00'     
      }
        console.log(form, 'to wyslalem');
        const xd = JSON.stringify(form)
          console.log(xd)
          const res = axios.post(`http://localhost:8080/api/screenings/add`, xd, {headers: {'Content-Type': 'application/json' }})
          console.log(res);
          alert('Dodano seans xD') 
      }

  return (
    <section className='container-admin'>
        <h1 class='register-header'>Dodaj seans</h1>
        <div class='container'>
        <form  className='register-form'  > 

          <p>Wybierz film</p>
          <SelectionList lista = {filmy} />
          <p>Wybierz sale</p>
          <SelectionListRoom lista = {rooms} />
          <p>Podaj datę</p>
<input
            id='date'
            type="date"
            name='date'
            value = {date}
            placeholder="2018-06-12"
            onChange={(e) => {const date = e.target.value; setDate(date);}}
          />
          <p>Wybierz godzinę</p>
<input
            id='time'
            type="time"
            name='time'
            value = {time}
            placeholder="19:30"
            onChange={(e) => {const time = e.target.value; setTime(time);}}
          />

          <button className='login-button' type='button' onClick={sendForm}>Dodaj film</button>
        </form>
        </div>
    </section>
  );
};

export default AddScrenning;
