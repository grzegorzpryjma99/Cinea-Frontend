import React, { Component, useEffect, useState } from 'react'
import FilmAPI from '../api/api.js'
import { BrowserRouter, Link ,useParams} from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import FilmsDetails from './FilmDetails.jsx'
import axios from 'axios'


class Film extends Component{

  constructor(props) {
    super(props);

  this.state ={
    data: ""
  }
}
  componentDidMount(){
    axios.get(`http://localhost:8080/api/films/${this.props.match.params.filmId}`)
    .then(res => {
      this.setState({
        data: res.data
      });
    });
  }
  
  render(){
    console.log(this.state.data)
    return(
      <BrowserRouter>
      <Header />
      {this.state.data ? <FilmsDetails dane = {this.state.data}/> : <p>Ładowanie...</p> }
      <Footer/>
    </BrowserRouter>
    );
  }
}

export default Film

/*

const Film = () => {

  const { filmId } = useParams();
  //console.log(filmId)
  /*
  const [film, setFilm] = useState([]);

    useEffect(() => {
        const controller = new AbortController();
        fetch(`http://localhost:8080/api/films/${filmId}`, { signal: controller.signal })
          .then(res => res.json())
          .then(json => setFilm(json));
    
        return () => controller.abort();
      });
   // console.log(film.title)
    // console.log(film)
     //console.log(film.filmDetails)

  return (
    <BrowserRouter>
      <Header />
      <FilmsDetails props = {filmId}/> 
      <Footer/>
    </BrowserRouter>
    
  )
}

export default Film
*/