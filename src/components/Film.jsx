import React, { useEffect, useState } from 'react'
import FilmAPI from '../api/api.js'
import { BrowserRouter, Link ,useParams} from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import FilmsDetails from './FilmDetails.jsx'

const Film = () => {

  const { filmId } = useParams();
  //console.log(filmId)
  const [film, setFilm] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        fetch(`http://localhost:8080/api/films/${filmId}`, { signal: controller.signal })
          .then(res => res.json())
          .then(json => setFilm(json));
    
        return () => controller.abort();
      });

    // console.log(film)
     //console.log(film.filmDetails)

  return (
    <BrowserRouter>
      <Header />
      <FilmsDetails dane = {film.filmDetails}/> 
      <Footer/>
    </BrowserRouter>
    
  )
}

export default Film
