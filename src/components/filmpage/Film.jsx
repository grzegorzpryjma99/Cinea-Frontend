import React, { Component, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Link ,useParams} from 'react-router-dom'
import Header from '../home/Header'
import Footer from '../home/Footer.jsx'
import FilmsDetails from './FilmDetails.jsx'



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