import React from "react";
import logo from './logo.svg'
import "./Header.css"
import {FaUser} from "react-icons/fa"; 
import {FaMapMarkerAlt} from "react-icons/fa"; 

const Header = (props) => (
  <header className="header">
      <div>
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="checkCinema">
            <i class="fas fa-map-marker-alt"></i>
            <h><FaMapMarkerAlt />{props.location}</h>
      </div>
  </header>
)

export default Header;
/*
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
*/
