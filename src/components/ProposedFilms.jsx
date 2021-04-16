import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom'
import auth from '../reducers/auth';
import { useSelector } from 'react-redux'
import logo from './logo.svg'
import "./MainPage.css"
import FilmAPI from '../api/api'
import plakat from './platak.svg'
import { Link } from 'react-router-dom'

const ProposedFilms = () =>  {

    const history = useHistory();
  
    const togglePanel = () => {
        history.push("/film")
      };


    return (
                <div>
                    <h1 class='recomended'>Polecane</h1>
                    <div class='recomended-films'>
                        <img src={plakat}></img>
                        <img src={plakat}></img>
                        <img onClick={togglePanel} src={plakat}></img>
            </div>
        </div>
        
  );
};

export default ProposedFilms;
