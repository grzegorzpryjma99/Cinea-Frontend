import React, {createContext, useContext ,useEffect, useState}from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import logo from './logo.svg'
import { SignupSchema } from "../validation/formValidation.js";
import { useDispatch, useSelector} from "react-redux";
import { signup } from "../actions/auth.js";
import "./Signin.css"
import "./Admin.css"
import { ScreeningContext } from "./AdminPanel"
import { ImBin2 } from 'react-icons/im';
import { FiSettings } from "react-icons/fi";
import AddScrenning from "./AddScreening";



const AdminSettings = () => {

  const {filmy, seanse} = useContext(ScreeningContext) 
  const history = useHistory();

  const togglePanel = () => {
    history.push("/addFilm");
  };

  const togglePanel2 = () => {
    history.push("/addScreening");
  };

  const deleteFilm = () => {
    console.log("usun film")
  }

  const editFilm = () => {
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
                <button onClick={editFilm}><FiSettings/></button>
                <button onClick={deleteFilm}><ImBin2/></button>
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
                <button onClick={deleteFilm}><ImBin2/></button>
                </div>
              </div>)}
                <button className='login-button' onClick={togglePanel} >Dodaj film</button>
            </div>
        </div>
    </section>
  );
};

export default AdminSettings;
