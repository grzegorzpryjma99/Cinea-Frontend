import React, {useEffect, useState}from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import logo from './logo.svg'
import { SignupSchema } from "../validation/formValidation.js";
import { useDispatch, useSelector} from "react-redux";
import { signup } from "../actions/auth.js";
import "./Signin.css"
import "./Admin.css"
import { ImBin2 } from 'react-icons/im';
import { FiSettings } from "react-icons/fi";

const AdminPanel = () => {
  const history = useHistory();

  const [films, setFilms] = useState([]);

  const togglePanel = () => {
    history.push("/addFilm");
  };

  const deleteFilm = () => {
    console.log("usun film")
  }

  const editFilm = () => {
    console.log("edytuj film")
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/films/")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);

  console.log(films);
  
  return (
    <section>
        <div class='container'>
            <div className='screeningEditBox'>
              Aktualne seanse
                //TODO
            </div>
            <div className='filmEditBox'>
              <h>Aktualne filmy</h>
              {films.map(film =>
                <div className='film'>
                <h>{film.filmDetails.title}</h>
                <button onClick={editFilm}><FiSettings/></button>
                <button onClick={deleteFilm}><ImBin2/></button>
              </div>)}
                
                <button className='login-button' onClick={togglePanel} >Dodaj film</button>
            </div>
        </div>
    </section>
  );
};

export default AdminPanel;
