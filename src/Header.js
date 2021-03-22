import React from "react";
import PropTypes from "prop-types";
import CheckCinema from "./CheckCinema"
import "./Header.css"
import { ReactComponent as Logo } from './logo.svg';
import {FaUser} from "react-icons/fa"; 

export default class Header extends React.Component {

  render() {
    return (
      <div class="header">
            <Logo />
            <div class="check">
                <CheckCinema />
            </div>
            
            <div class="loginAndRegister">
                <FaUser />
                <a href="#" class="button">logowanie</a>
                <a href="#" class="button">rejestracja</a>
            </div>
            
      </div>
    );
  }
}
