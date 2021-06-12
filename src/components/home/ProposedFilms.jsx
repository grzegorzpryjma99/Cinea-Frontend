import React from 'react';

import { NavLink } from 'react-router-dom'
import "../../style/MainPage.css"
import axios from 'axios'
import { Component } from 'react';
import {Image} from 'cloudinary-react';

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
                    <Image cloudName="dhdzistwc" publicId={film.filmDetails.imageURL}/>
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