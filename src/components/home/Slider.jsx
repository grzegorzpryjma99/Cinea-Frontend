import React, { Component } from "react";
import { NavLink } from 'react-router-dom'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios'
import Slider from "react-slick";
import "./Slider.css"
import {Image} from 'cloudinary-react';


export default class Responsive extends Component {

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
      speed: 500,
      responsive: [{
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        },
        
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
        
      }]
    };

    const filmList = this.state.data && this.state.data.map(film => {
        return(
            <NavLink to={`/film/${film.id}`} >  
            <div  key={film.id}>
              <Image className='film-image-slider' cloudName="dhdzistwc" publicId={film.filmDetails.imageURL}/>
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