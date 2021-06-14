import React, { useState } from "react";
import "../../style/film-page.css"
import { FaRegClock , FaCalendarAlt,FaWindowClose } from "react-icons/fa";
import {Image} from 'cloudinary-react';
import Trailer from './Trailer'
import Films from '../home/Films'

const FilmDetails = (dane) =>{
        
    const [popup, setPopup] =  useState(false);
        
    const handleClick = () =>{
            setPopup(!popup);
        }

        return (
            <div >
            {popup ? (
                <div className='popup'>
                    <button className='popup-btn' onClick={handleClick}><FaWindowClose /></button>
                    <Films film={dane.dane.filmDetails.title}/>
                </div> 
            ) : null}
            <section className= {popup ? 'blur' : null}>
                
                <div className='container-film'>
                    <div className='photo'>
                    <Image className='film-image' cloudName="dhdzistwc" publicId={dane.dane.filmDetails.imageURL}/>
                    </div>
                    <div className='details'>
                    <h1 className='title'>{dane.dane.filmDetails.title}</h1>
                        <div className='data-time'>
                            <div className='date'>
                                <div className='data-icon'>
                                    <FaCalendarAlt />
                                </div>
                                <div className="date-div">
                                    <p>Data premiery</p>
                                    <p>{dane.dane.filmDetails.releaseDate}</p>
                                </div>
                            </div>
                            <div className='time'>
                                <div className='time-icon'>
                                    <FaRegClock />
                                </div>
                                <div className='time-div'>
                                    <p>Czas trwania</p>
                                    <p>{dane.dane.filmDetails.time}</p>
                                </div>
                            </div>
                        </div>
                        <div className='description'>
                            {dane.dane.filmDetails.description}
                        </div>
                        <button  className='booking-button' onClick={handleClick}> Kup bilety</button>      
                    </div>
                </div>

                <div>
                <div className='c-or'>
              <span  id="trailer">Zobacz zwiastun</span>
              </div>
                        <div className='trailer'>
                            <Trailer id={dane.dane.filmDetails.trailer}/>
                        </div>
                        <div className='full-details'>
                        <div className='c-or'>
              <span  id="details">Szczegóły</span>
              </div>
                            <ul className='list'>
                                <h2>Tytuł oryginalny:   {dane.dane.filmDetails.originalTitle}</h2>
                                <h2>Gatunek filmu:      {dane.dane.filmDetails.category}</h2>
                                <h2>Reżyser:            {dane.dane.filmDetails.director}</h2>
                                <h2>Obsada:             {dane.dane.filmDetails.staff}</h2>
                            </ul>

                        </div>
                </div>
            </section>
            </div>
              );
        }
    
    export default FilmDetails;