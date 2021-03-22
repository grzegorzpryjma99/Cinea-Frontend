import React from "react";

import "./App.css"
import "./Repertoire.css"
import { ReactComponent as Film } from './film.svg';



export default class Repertoire extends React.Component {

   render() {
    return (
        <div class="repertoire">
            <h1>Repertuar</h1>
            <button type="button">Pon</button>
            <button type="button">Wt</button>
            <button type="button">Śr</button>
            <button type="button">Cz</button>
            <button type="button">Pt</button>
            <button type="button">So</button>
            <button type="button">Nd</button>
        </div>
       
    );
    }
}