import React ,{useEffect,setState,setHasError,setLoading,useState} from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import auth from '../reducers/auth';
import { useSelector } from 'react-redux'
import logo from './logo.svg'
import "./MainPage.css"
import { Route, Switch } from "react-router-dom";

import FilmAPI from '../api/api'
import plakat from './platak.svg'
import { Link } from 'react-router-dom'
import Film from './Film';
import Signin from './Signin';
import axios from 'axios'
import { Carousel } from 'react-responsive-carousel';

import { Component } from 'react';

class ProposedFilms extends Component {

    constructor(props) {
        super(props);
    
      //const {filmID} = useParams();
      this.state ={
        data: ""
      }
    }
    
      componentDidMount(){
        axios.get(`http://localhost:8080/api/films/`)
        .then(res => {
          this.setState({
            data: res.data.slice(0,3)
          });
        });
      }

      render(){

        const filmList = this.state.data && this.state.data.map(film => {
            return(
                <NavLink to={`/film/${film.id}`}>  
                <div key={film.id}>
                    <div>{film.filmDetails.title}</div>
                    <img src={plakat}></img>
                </div>
                </NavLink>
            );
        })
           
        //   console.log(filmList)
        //console.log(this.state.data);
        console.log(this.state.data) //
        return (
          
            <div>
                <h1 class='recomended'>Polecane</h1>
                <div class='recomended-films'>
                    {filmList ? filmList : <p>Ładowanie...</p>}
                </div>
            </div>
            );
        }
    }

    export default ProposedFilms;