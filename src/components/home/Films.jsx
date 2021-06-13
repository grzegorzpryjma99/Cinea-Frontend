import React, {useHistory, useState, useContext} from 'react';
import "../../style/MainPage.css"
import {Image} from 'cloudinary-react';
import { NavLink, Route, Router, useParams } from 'react-router-dom';
import { ScreeningContext } from '../admin/AdminPanel'
import Cart from '../../pages/Cart';
import { CartContext } from "../order/CartContext"

const Films = (data) =>  {
    const {seanse} = useContext(ScreeningContext) 
    //console.log(seanse)
    // const filterQuery = {
    //     date: data.data,
    // }

    // console.log(filterQuery)
    // const filteredData = seanse.filter(item => 
    //     Object.keys(filterQuery).every(key => item[key] === filterQuery[key])
    // );

    // console.log(filteredData);
    //console.log(data)

    //console.log(seanse)
    
   // const result = seanse.filter(seans => (seans.date == (data.data) && (seans.film.filmDetails.title == (data.film))));//podac date 
    //const result2 = seanse.filter(seans => (seans.film.filmDetails.title == (data.film)));//podac date 

    // console.log(result);
    // console.log(result2);

    function findValue(value) {
        function findItems(document) {
        var type = Object.prototype.toString.call(document);
        if (type.indexOf("Array") + 1) {
        return document.some(findItems);
        } else if (type.indexOf("Object") + 1) {
        return Object.keys(document).some(function(key) {
        return findItems(document[key]);
        });
        } else {
        return document === value;
        }
        }
        return findItems;
        }

        //console.log(findValue(data.film)(filteredData));
let result = [];

console.log('moje wartosci data i tytul', data.data, data.film)

console.log(result,'przed')

if(!data.data){
    result = seanse.filter(seans => (seans.film.filmDetails.title == (data.film)));
    console.log(result,'nie ma daty')
}else {
    console.log(result,'jest data')
    result = seanse.filter(seans => (seans.date == (data.data)));
    console.log(result,'jest data to ustawilem')
    if(findValue(data.film)(seanse)){
        console.log(result,'jest tytul')
        result = result.filter(seans => (seans.film.filmDetails.title == (data.film)));
      }else{
        console.log('nie ma tytulu')
          
      }
}

    return (
        <div>
            {result? result.map( seans =>
            <div className='the-film' key={seans.id}>
                <div>
                    <Image className='screening-image'  cloudName="dhdzistwc" publicId={seans.film.filmDetails.imageURL}/>
                </div>
                <div className='film-details'>
                    <h1>{seans.film.filmDetails.title}</h1>
                    <div class='time'>
                        <NavLink to={`/cart/${seans.id}`}><button  className='monday' >{seans.time.slice(0,5)}</button></NavLink>
                    </div>

                    <div className='short-description'>
                        {seans.film.filmDetails.description}
                    </div>
                    <h3>Data seansu: {seans.date}</h3>
                    <div className='operation-buttons'>
                        <NavLink to={`/film/${seans.film.id}`}><button className='order-button'>Szczegóły filmu</button></NavLink>
                        {/* <button className='monday' onClick={togglePanel}>Rezerwuj bilety</button> */}
                    </div>
                </div>
            </div>): <p class="preloader" ></p>}
        </div>
  );
};

export default Films;
