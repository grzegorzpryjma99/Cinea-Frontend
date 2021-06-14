import React from 'react';
import {  } from 'react-redux';
import "../../style/MainPage.css"
import image2 from '../../image/image2.svg'
import image1 from '../../image/image1.svg'
import image3 from '../../image/image3.svg'
import image4 from '../../image/image4.svg'
import image5 from '../../image/image5.svg'

const Galeria = () =>  {

    return (
              <div className='gallery-div'>
                <img className='galery-image' src={image1}></img>
                <img className='galery-image' src={image2}></img>
                <img className='galery-image' src={image3}></img>
                <img className='galery-image' src={image4}></img>
                <img className='galery-image' src={image5}></img>
                <img className='galery-image' src={image1}></img>
                <img className='galery-image' src={image2}></img>
                <img className='galery-image' src={image3}></img>
              </div>
  );
};

export default Galeria;
