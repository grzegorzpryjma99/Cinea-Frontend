import React, {useEffect, useState } from 'react'
import { BrowserRouter, useParams} from 'react-router-dom'
import Header from '../components/home/Header'
import Footer from '../components/home/Footer.jsx'
import FilmsDetails from '../components/filmpage/FilmDetails.jsx'

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
      {film ? <FilmsDetails dane = {film}/> : <p className="preloader"></p> }
      <Footer/>
    </BrowserRouter>
    );
}

export default Film;