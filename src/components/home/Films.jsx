import React, {useHistory, useState, useContext} from 'react';
import plakat from '../platak.svg'
import "../home/MainPage.css"
import {Image} from 'cloudinary-react';
import { NavLink, Route, Router, useParams } from 'react-router-dom';
import { ScreeningContext } from '../admin/AdminPanel'
import Cart from '../order/Cart';
import { CartContext } from "../order/CartContext"

const Films = (data) =>  {


    console.log(data)
    const {seanse} = useContext(ScreeningContext) 
    console.log(seanse)
    
    const result = seanse.filter(seans => (seans.date == (data.data) && (seans.film.filmDetails.title == (data.film))));//podac date 
    const result2 = seanse.filter(seans => (seans.film.filmDetails.title == (data.film)));//podac date 

    console.log(result);
    console.log(result2);

    return (
        <div>
            {result.map( seans =>
            <div className='the-film' key={seans.id}>
                <div>
                    <Image className='screening-image'  cloudName="dhdzistwc" publicId={seans.film.filmDetails.imageURL}/>
                </div>
                <div className='film-details'>
                    <h1>{seans.film.filmDetails.title}</h1>
                    <div class='time'>
                        <NavLink to={`/cart/${seans.id}`}><button  className='monday' >{seans.time}</button></NavLink>
                    </div>

                    <div className='short-description'>
                        {seans.film.filmDetails.description}
                    </div>
                    <div className='operation-buttons'>
                        <NavLink to={`/film/${seans.film.id}`}><button className='order-button'>Szczegóły filmu</button></NavLink>
                        {/* <button className='monday' onClick={togglePanel}>Rezerwuj bilety</button> */}
                    </div>
                </div>
            </div>)}
        </div>
  );
};

export default Films;
