import React from "react";
import Film from "../film";
import "./Proposed.css"

const ProposedFilm = (props) => {
    if (props.film) return (  
        <div>
            <div className="row proposedFilm">
                <h3 className="col-md-13 text-center">
                    Polecamy
                </h3>
            </div>
            <Film film = {props.film} />
        </div>
    );
    return (<div>Cos nie tak jest </div>)
}
 
export default ProposedFilm;