import React from 'react';
import plakat from '../platak.svg'
import "../home/MainPage.css"

const Films = () =>  {

    const togglePanel = () => {
        
      };

    return (
        <div className='the-film'>
            <div className='film-image'>
                <img src={plakat}></img>
            </div>
            <div className='film-details'>
                <h1>Tutuł filmu</h1>
                <div class='time'>
                    <button className='monday' onClick={togglePanel}>10:00</button>
                    <button className='monday' onClick={togglePanel}>10:30</button>
                    <button className='monday' onClick={togglePanel}>11:00</button>
                </div>
                <div className='short-description'>
                    scribe the main object of the web page in a shorter way like a highlighter. It basically identifies the content that is related to the primary content of the web page but does not constitute the main intent of the primary page. Thetag is used to describe the main object of the web page in a shorter way like a highlighter. It b
                </div>
                <div className='operation-buttons'>
                    <button className='monday' onClick={togglePanel}>Więcej</button>
                    <button className='monday' onClick={togglePanel}>Rezerwuj bilety</button>
                </div>
            </div>
        </div>
  );
};

export default Films;
