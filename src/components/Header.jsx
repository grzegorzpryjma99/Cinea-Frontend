import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom'
import auth from '../reducers/auth';
import { useSelector } from 'react-redux'
import logo from './logo.svg'
import "./MainPage.css"

const Header = () =>  {

  const history = useHistory();

  const toRegister = () => {
    history.push("/signup");
  }

  const toLogin = () => {
    history.push("/");
  }

    return (
        <header className='haeder'>
        <img src={logo} className="logo"/>
        <div className='login-register-buttons'>
            <button className='login-btn' onClick={toLogin}>logowanie</button>
            <button className='register-btn' onClick={toRegister}>rejestracja</button>
        </div>
        </header>
  );
};

export default Header;
