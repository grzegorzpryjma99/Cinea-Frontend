import React, { Component,useEffect, useState } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import "./film-page.css"
import logo from './logo.svg'
import { SigninSchema } from "../validation/formValidation.js";
import { useDispatch, useSelector} from "react-redux";
import { signin } from "../actions/auth.js";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { Route, NavLink, HashRouter} from "react-router-dom";
import plakat from './platak.svg'
import axios from 'axios'

const FilmDetails = (dane) =>{

        return (
            <section>
                <h1 className='title'>{dane.dane.filmDetails.title}</h1>
                <div className='container-film'>
                    <div className='photo'>
                        <img src={plakat}/>
                    </div>
                    <div className='details'>
                        <div className='data-time'>
                            <div className='date'>
                                <div className='data-icon'>
                                    placeholder
                                </div>
                                <div className="date-div">
                                    <p>Data premiery</p>
                                    <p>{dane.dane.filmDetails.releaseDate}</p>
                                </div>
                            </div>
                            <div className='time'>
                                <div className='time-icon'>
                                    placeholder
                                </div>
                                <div className='time-div'>
                                    <p>Czas trwania</p>
                                    <p>{dane.dane.filmDetails.time}</p>
                                </div>
                            </div>
                        </div>
                        <div className='description'>
                            <p>{dane.dane.filmDetails.description}</p>
                        </div>
                        <button className='booking-button'>Kup bilety</button>
                    </div>
                </div>
            
                <div>
                        <h1 class="title">Zobacz zwiastun</h1>
                        <div class='trailer'>
                            <img src='zwiastun.svg'></img>
                        </div>
                </div>
            
            </section>
              );
        }
    

    export default FilmDetails;
        ;
//     const state = useState({
//         title: "",
//         description: ""
//     })

    
//   // console.log(dane.id)
//    // console.log(dane.filmDetails.title)
//   return (
    
//     <section>
        
//     <h1 className='title'>fsd</h1>
//     <div className='container-film'>
//         <div className='photo'>
//             <img src={plakat}/>
//         </div>
//         <div className='details'>
//             <div className='data-time'>
//                 <div className='date'>
//                     <div className='data-icon'>
//                         placeholder
//                     </div>
//                     <div className="date-div">
//                         <p>Data premiery</p>
//                         <p>dsa</p>
//                     </div>
//                 </div>
//                 <div className='time'>
//                     <div className='time-icon'>
//                         placeholder
//                     </div>
//                     <div className='time-div'>
//                         <p>Czas trwania</p>
//                         <p>das</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='description'>
//                 <p>dsa</p>
//             </div>
//             <button className='booking-button'>Kup bilety</button>
//         </div>
//     </div>

//     <div>
//             <h1 class="title">Zobacz zwiastun</h1>
//             <div class='trailer'>
//                 <img src='zwiastun.svg'></img>
//             </div>
//     </div>

// </section>
//   );
// };

// export default FilmsDetails;
