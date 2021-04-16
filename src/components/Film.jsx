import React from 'react'
import FilmAPI from '../api/api.js'
import { BrowserRouter, Link } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import FilmsDetails from './FilmDetails.jsx'

// The Player looks up the player using the number parsed from
// the URL's pathname. If no player is found with the given
// number, then a "player not found" message is displayed.
const Film = (props) => {
  

  return (
    <BrowserRouter>
      <Header />
      <FilmsDetails />
      <Footer/>
    </BrowserRouter>
    
  )
}

export default Film
