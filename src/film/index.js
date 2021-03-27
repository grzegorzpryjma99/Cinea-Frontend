import React, { Component } from 'react';
import "./film.css"

class film extends Component {
    state = {  }
    render() { 
        const film = this.props.film;
        return ( 
            <div>
                <div className="title">
                    <h5>{film.title}</h5>                    
                </div>
            </div>
         );
    }
}
 
export default film;