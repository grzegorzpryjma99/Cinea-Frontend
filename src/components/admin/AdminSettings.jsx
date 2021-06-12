import React, {createContext, useContext ,useEffect, useState}from "react";
import { useHistory } from "react-router-dom";
import "../../style/Signin.css"
import "../../style/Admin.css"
import { ScreeningContext } from "./AdminPanel"
import { ImBin2 } from 'react-icons/im';
import { FiSettings } from "react-icons/fi";
import axios from 'axios';




const AdminSettings = () => {

  const {filmy, seanse} = useContext(ScreeningContext) 
  const history = useHistory();

  const config = {
    headers: {
        "Authorization": "Bearer " + localStorage.getItem('token')
    }
};

  const togglePanel = () => {
    history.push("/addFilm");
  };

  const togglePanel2 = () => {
    history.push("/addScreening");
  };

  const deleteFilm = (id) => {
    console.log("usun film")
    //http://localhost:8080/api/films/delete/{{id}}
    axios.delete(`http://localhost:8080/api/films/delete/${id}`);
  }

  const editFilm = () => {
    console.log("edytuj film")
  }

  const deleteScreening = (id) => {
    console.log("usun film")
    //http://localhost:8080/api/films/delete/{{id}}
    axios.delete(`http://localhost:8080/api/screenings/delete/${id}`);
  }

  const editScreening = () => {
    console.log("edytuj film")
  }
  
  return (
    <section>
        <div class='container-admin'>
            <div className='screeningEditBox'>
            <h>Aktualne seanse</h>
            {seanse.map(screening =>
                <div className='film' key={screening.id}>
                <h>{screening.film.filmDetails.title} Sala: {screening.room.id}</h>
                <div>
                <button onClick={editScreening}><FiSettings/></button>
                <button onClick={deleteScreening.bind(screening.id,screening.id)}><ImBin2/></button>
                </div>
              </div>)}
              <button className='login-button' onClick={togglePanel2} >Dodaj seans</button>
            </div>
            <div className='filmEditBox'>
              <h>Aktualne filmy</h>
              {filmy.map(film =>
                <div className='film' key={film.id}>
                <h>{film.filmDetails.title}</h>
                <div>
                <button onClick={editFilm}><FiSettings/></button>
                <button onClick={deleteFilm.bind(film.id, film.id)}><ImBin2/></button>
                </div>
              </div>)}
                <button className='login-button' onClick={togglePanel} >Dodaj film</button>
            </div>
        </div>
    </section>
  );
};

export default AdminSettings;
