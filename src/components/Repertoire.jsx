import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom'
import auth from '../reducers/auth';
import { useSelector } from 'react-redux'
import logo from './logo.svg'
import "./MainPage.css"
import { Link } from 'react-router-dom'

const Repertoire = () =>  {

    const togglePanel = () => {
        
      };

    return (
        <div className="repertoire">
            <h1 className='repertuar'>Repertuar</h1>
            <div className="repertoire-buttons">
                <button className='monday' ><Link to='/main-page/pn'>Pn</Link> </button>
                <button className='tuesday'><Link to='/main-page/wt'>Wt</Link></button>
                <button className='wednesday'><Link to='/main-page/sr'>Śr</Link></button>
                <button className='thurstday'><Link to='/main-page/cz'>Cz</Link></button>
                <button className='friday'><Link to='/main-page/pt'>Pt</Link></button>
                <button className='saturday'><Link to='/main-page/sob'>Sob</Link></button>
                <button className='sunday'><Link to='/main-page/nd'>Nd</Link></button>
            </div>
        </div>
  );
};

export default Repertoire;
