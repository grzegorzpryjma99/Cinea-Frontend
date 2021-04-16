import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom'
import auth from '../reducers/auth';
import { useSelector } from 'react-redux'
import logo from './logo.svg'
import "./MainPage.css"

const Footer = () =>  {

    const togglePanel = () => {
        
      };

    return (
        <footer>
        <div className='about-us'>
            <h1>O nas</h1>
            <p>f the primary page. Thetag is used to describe the main object of the web page in a shorter way like a highlighter. It basically identifies the content that is related to the primary content of the web page but does not constitute the main intent of the pri</p>
        </div>
        <div className='contact'>
            <h2>Kontakt</h2>
            <p>123456789</p>
            <p>kino@gmail.com</p>
        </div>
        <div className='map' id="map"></div>
        </footer>
  );
};

export default Footer;