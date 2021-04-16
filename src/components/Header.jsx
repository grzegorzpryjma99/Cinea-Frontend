import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom'
import auth from '../reducers/auth';
import { useSelector } from 'react-redux'
import logo from './logo.svg'
import "./MainPage.css"

const Header = () =>  {

  const togglePanel = () => {

  }

    return (
        <header className='haeder'>
        <img src={logo} className="logo"/>
        <input className='cinema-location' type="checkbox"></input>
        <div className='login-register-buttons'>
            <button className='login-button' onClick={togglePanel}>logowanie</button>
            <button className='register-button' onClick={togglePanel}>rejestracja</button>
        </div>
        </header>
  );
};

export default Header;
