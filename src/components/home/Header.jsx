import React, {useState} from 'react';
import {  } from 'react-redux';
import { Link, NavLink, useHistory } from 'react-router-dom'
import logo from '../logo.svg'
import "./MainPage.css"
import AuthService from "../../services/auth.service";
import { FaUser } from "react-icons/fa";
import Hamburger from 'hamburger-react';


const Header = () =>  {

  const history = useHistory();
  const [isOpen, setOpen] = useState(false);
  const toRegister = () => {
    history.push("/signup");
  }

  const toLogin = () => {
    AuthService.logout();
    history.push("/");
  }

  const toHome = () => {
    history.push("/main-page");
  }



    return (
        <header className='haeder'>
        <img src={logo} className="logo"/>
        <div className='href-div'>
        <a className='gallery-btn' href="/main-page#gallery">Galeria</a>
        <a className='gallery-btn' href="/main-page#seanse">Seanse</a>
        </div>
        
        <div className='login-register-buttons'>
            <button className='login-btn' onClick={toLogin}><FaUser />{localStorage.getItem("user") ? "wyloguj" :"logowanie" }</button>
            <button className='register-btn' onClick={toRegister}>{localStorage.getItem("user") ? "" :"rejestracja" }</button>
        </div>

        {isOpen ? <div className='login-register-buttons-mobile'>
            <div className='href-div-mobile'>
            <a className='gallery-btn' href="/main-page#gallery">Galeria</a>
        <a className='gallery-btn' href="/main-page#seanse">Seanse</a>
            </div>
            <button className='register-btn-mobile' onClick={toHome}>Strona główna</button>
            <button className='login-btn-mobile' onClick={toLogin}>{localStorage.getItem("user") ? "wyloguj" :"logowanie" }</button>
            <button className='register-btn-mobile' onClick={toRegister}>{localStorage.getItem("user") ? "" :"rejestracja" }</button>
        </div>: ''}
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </header>
  );
};

export default Header;
