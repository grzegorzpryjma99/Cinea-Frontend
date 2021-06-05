import React from 'react';
import {  } from 'react-redux';
import { useHistory } from 'react-router-dom'
import logo from '../logo.svg'
import "./MainPage.css"
import AuthService from "../../services/auth.service";
import { FaUser } from "react-icons/fa";



const Header = () =>  {

  const history = useHistory();

  const toRegister = () => {
    history.push("/signup");
  }

  const toLogin = () => {
    AuthService.logout();
    history.push("/");
  }

    return (
        <header className='haeder'>
        <img src={logo} className="logo"/>
        <div className='login-register-buttons'>
            <button className='login-btn' onClick={toLogin}><FaUser />{localStorage.getItem("user") ? "wyloguj" :"logowanie" }</button>
            <button className='register-btn' onClick={toRegister}>{localStorage.getItem("user") ? "" :"rejestracja" }</button>
        </div>
        </header>
  );
};

export default Header;
