import React, {useState} from 'react';
import {  } from 'react-redux';
import {useHistory } from "react-router-dom";
import logo from '../../image/logo.svg'
import icon from '../../image/icon.svg'
import "../../style/MainPage.css"
import AuthService from "../../services/auth.service";
import Hamburger from 'hamburger-react';


const Header = () =>  {

  const history = useHistory();
  const [isOpen, setOpen] = useState(false);

  const toRegister = () => {
    history.push("/signup");
    window.location.reload()
  }

  const toLogin = () => {
    AuthService.logout();
    history.push("/");
    window.location.reload()
  }

  const toHome = () => {
    history.push("/main-page");
    window.location.reload()
  }

    return (
        <header className='haeder'>
        <img src={logo} className="logo"/>
        <div className='href-div'>
          <a className='gallery-btn' href="/main-page#gallery">Galeria</a>
          <a className='gallery-btn' href="/main-page#seanse">Repertuar</a>
        </div>

        <div className='login-register-buttons'>
            <button className='login-btn' onClick={toLogin}>{localStorage.getItem("user") ? "wyloguj" :"logowanie" }</button>
            <button className='register-btn' onClick={toRegister}>{localStorage.getItem("user") ? "" :"rejestracja" }</button>
        </div>

        {isOpen ? <div className='login-register-buttons-mobile'>
            <div className='href-div-mobile'>
              <a className='gallery-btn' href="/main-page#gallery">Galeria</a>
              <a className='gallery-btn' href="/main-page#seanse">Repertuar</a>
            </div>
            <button className='register-btn-mobile' onClick={toHome}>Strona główna</button>
            <button className='login-btn-mobile' onClick={toLogin}>{localStorage.getItem("user") ? "wyloguj" :"logowanie" }</button>
            <button className='register-btn-mobile' onClick={toRegister}>{localStorage.getItem("user") ? "" :"rejestracja" }</button>
            <img className='logo-mobile' src={icon}></img>
        </div>: ''}
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </header>
  );
};

export default Header;
