import React from "react";
import PropTypes from "prop-types";
import "./App.css"
import {FaMapMarkerAlt} from "react-icons/fa"; 

export default class CheckCinema extends React.Component {

  render() {
    return (
      <div>
            <FaMapMarkerAlt />
            <i class="fas fa-map-marker-alt"></i>
            <h>Kraków - Galeria Krakowska</h>
      </div>
    );
  }
}
