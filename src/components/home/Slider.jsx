import React, { Component } from "react";
import { NavLink, Redirect, useHistory } from 'react-router-dom'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import Slider from "react-slick";
import plakat from '../platak.svg'
import "./Slider.css"
export default class CenterMode extends Component {

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
            data: res.data
          });
        });
      }

  render() {
    const settings = {
      className: "center",
      centerMode: true,
      dots: true,
      infinite: true,
      autoplay: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 500
    };

    const filmList = this.state.data && this.state.data.map(film => {
        return(
            <NavLink to={`/film/${film.id}`}>  
            <div  key={film.id}>
                <img className='image-slider' src={plakat}></img>
            </div>
            </NavLink>
        );
    })

    return (
      <div className='slider'>
        <Slider {...settings}>
        {filmList ? filmList : <p>Ładowanie...</p>}
        </Slider>
      </div>
    );
  }
}