import React, { useEffect, useState } from "react";
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

const FilmsDetails = ({dane}) => {

    //console.log(dane.title)
   // console.log(dane.id)
  return (
    <section>
    <h1 className='title'></h1>
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
                        <p>dsa</p>
                    </div>
                </div>
                <div className='time'>
                    <div className='time-icon'>
                        placeholder
                    </div>
                    <div className='time-div'>
                        <p>Czas trwania</p>
                        <p>das</p>
                    </div>
                </div>
            </div>
            <div className='description'>
                <p>dsa</p>
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
};

export default FilmsDetails;
