import React, { Component, useContext, useEffect, useState } from 'react'
import FilmAPI from '../api/api.js'
import { BrowserRouter, Link ,useParams} from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import FilmsDetails from './FilmDetails.jsx'
import axios from 'axios'
import { ScreeningContext } from './AdminPanel.jsx'


const Film = () =>{

const { filmId } = useParams();
const [film, setFilm] = useState();

useEffect(() => {
  fetch(`http://localhost:8080/api/films/${filmId}`)
    .then((res) => res.json())
    .then((data) => setFilm(data));
});

    return(
      <BrowserRouter>
      <Header />
      {film ? <FilmsDetails dane = {film}/> : <p>Ładowanie...</p> }
      <Footer/>
    </BrowserRouter>
    );
}

export default Film;