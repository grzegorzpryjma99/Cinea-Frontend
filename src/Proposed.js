import React from "react";

import "./App.css"
import "./Proposed.css"
import { ReactComponent as Film } from './film.svg';



export default class Proposed extends React.Component {

   render() {
    return (
        <div>
            <h class="polecamy">Polecamy</h>
            <div class="proposed">     
                
                <div class="proposedFilms">
                    <Film /> 
                    <Film /> 
                    <Film /> 
                </div>
            </div>
        </div>
        
       
    );
    }
}