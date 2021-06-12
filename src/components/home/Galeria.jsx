import React, {useState, useContext} from 'react';
import {  } from 'react-redux';
import "../../style/MainPage.css"
import image2 from '../../image/image2.svg'
import image1 from '../../image/image1.svg'
import image3 from '../../image/image3.svg'
import image4 from '../../image/image4.svg'
import image5 from '../../image/image5.svg'

const Galeria = () =>  {

 const functions = () => {
    ('.galery-image').lazy();
};

    return (
        

        // <div className='gallery'>
        //       {filmy.map( film => <div>
        //         <Image className='screening-image'  cloudName="dhdzistwc" publicId={film.filmDetails.imageURL}/>
        //       </div>)}
        //       </div>
              <div className='gallery-div'>
                <img className='galery-image' src={image1}></img>
                <img className='galery-image' src={image2}></img>
                <img className='galery-image' src={image3}></img>
                <img className='galery-image' src={image4}></img>
                <img className='galery-image' src={image5}></img>
                <img className='galery-image' src={image1}></img>
                <img className='galery-image' src={image2}></img>
                <img className='galery-image' src={image3}></img>
                <img className='galery-image' src={image4}></img>
                <img className='galery-image' src={image5}></img>
                <img className='galery-image' src={image1}></img>
                <img className='galery-image' src={image2}></img>
                {/* <MyImage /> */}






                
              </div>
  );
};

export default Galeria;
