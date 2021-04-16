import React from "react";
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

const FilmsDetails = () => {

  return (
    <section>
    <h1 className='title'>Tutuł filmu</h1>
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
                        <p>01.01.2020</p>
                    </div>
                </div>
                <div className='time'>
                    <div className='time-icon'>
                        placeholder
                    </div>
                    <div className='time-div'>
                        <p>Czas trwania</p>
                        <p>1h 20min</p>
                    </div>
                </div>
            </div>
            <div className='description'>
                <p>tag is used to describe the main object of the web page in a shorter way like a highlighter. It basically identifies the content that is related to the primary content of the web page but does not constitute the main intent of the primary page. Thetag is used to describe the main object of the web page in a shorter way like a highlighter. It basically identifies the content that is related to the primary content of the web page but does not constitute the main intent of the primary page. Thetag is used to describe the main object of the web page in a shorter way like a highlighter. It basically identifies the content that is related to the primary content of the web page but does not constitute the main intent of the primary page. Thetag is used to describe the main object of the web page in a shorter way like a highlighter. It basically identifies the content that is related to the primary content of the web page but does not constitute the main intent of the primary page. The</p>
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
