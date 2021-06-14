import React, {useContext} from 'react';
import "../../style/MainPage.css"
import {Image} from 'cloudinary-react';
import { NavLink } from 'react-router-dom';
import { ScreeningContext } from '../admin/AdminPanel'

const Films = (data) =>  {

    const {seanse} = useContext(ScreeningContext) 

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

    let result = [];

    if(!data.data){
        result = seanse.filter(seans => (seans.film.filmDetails.title == (data.film)));
    }else {
        result = seanse.filter(seans => (seans.date == (data.data)));
        if(findValue(data.film)(seanse)){
            result = result.filter(seans => (seans.film.filmDetails.title == (data.film)));
        }else{   
        }
    }

    return (
        <div>
            {result ? result.map( seans =>
            <div className='the-film' key={seans.id}>
                <div>
                    <Image className='screening-image'  cloudName="dhdzistwc" publicId={seans.film.filmDetails.imageURL}/>
                </div>
                <div className='film-details'>
                    <h1 className='title'>{seans.film.filmDetails.title}</h1>
                    <div class='time'>
                        <NavLink to={`/cart/${seans.id}`}><button  className='monday' >{seans.time.slice(0,5)}</button></NavLink>
                    </div>

                    <div className='short-description'>
                        {seans.film.filmDetails.description}
                    </div>
                    <h3>Data seansu: {seans.date}</h3>
                    <div className='operation-buttons'>
                        <NavLink to={`/film/${seans.film.id}`}><button className='order-button'>Szczegóły filmu</button></NavLink>
                    </div>
                </div>
            </div>) : <p className="preloader" > </p>}
            {result.length > 0 ? null : <p className='repertoire-info'>Brak seansów</p>}
        </div>
  );
};

export default Films;
