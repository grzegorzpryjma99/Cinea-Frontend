import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useHistory, useParams } from "react-router-dom";
import Header from '../home/Header';
import "./order.css"
import {Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Sum from "./Sum";
import { FiPlus, FiMinus } from "react-icons/fi";
import {ScreeningContext} from '../admin/AdminPanel'

const Cart = () =>  {

    const { updateTickets, updateOrderScreening } = useContext(ScreeningContext);

    const { screeningId } = useParams();
    const history = useHistory();
    const [normalTickets, setNormalTickets] = useState(0);
    const [halfTickets, setHalfTickets] = useState(0);
    const [sum, setSum] = useState(0);
    const [normalPrice, setNormalPrice] = useState(20);
    const [halfPrice, setHalfPrice] = useState(15);
    const [screening, setScreening] = useState("");

    if(!localStorage.getItem("user")){
        history.push("/")
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/screenings/${screeningId}`)
          .then((res) => res.json())
          .then((data) => setScreening(data));
      }, []);

    const decreaseNormal = () =>{
        if(normalTickets > 0) setNormalTickets(normalTickets- 1);
        counter();
    }

    const increaseNormal = () =>{
        setNormalTickets(normalTickets+ 1);
        counter();
    }

    const decreaseHalf = () =>{
        if(halfTickets > 0)setHalfTickets(halfTickets- 1);
        counter();
    }

    const increaseHalf = () =>{
        setHalfTickets(halfTickets+ 1);
        counter();
    }

    const counter = () => {
        setSum((normalPrice * normalTickets) + (halfPrice * halfTickets));
    }

    const xd = () => {
        updateTickets(halfTickets, normalTickets, sum)
        updateOrderScreening(screening)
    }

    return (
        <main>
        <Header/>
        
        <section className='cart-section'>
        <h className="register-header">Wybierz bilety</h>

            <div className='normal-ticket'>
                <div>normalny {normalPrice + 'PLN'}</div>
            <div className='quantity'>
                <button className='increment' onClick={increaseNormal}><FiPlus/></button>
                <input className='ticket-input' placeholder={normalTickets}></input>
                <button className='decrement' onClick={decreaseNormal}><FiMinus/></button>
            </div>
            </div>
            

            <div className='half-price-ticket'>
                <div>ulgowy {halfPrice + 'PLN'}</div>
            
            <div className='quantity'>
                <button className='increment' onClick={increaseHalf}><FiPlus/></button>
                <input className='ticket-input' placeholder={halfTickets}></input>
                <button className='decrement' onClick={decreaseHalf}><FiMinus/></button>
            </div>
            </div>
            <div className='total'>
                <h>Podsumowanie</h>
                <p>{sum + ' PLN '}</p>
                {/* {normalTickets + 'normalny '} 
                {halfTickets + 'ulgowy '} */}
            </div>
            <NavLink to='/cart/place'><button onClick={xd} className='order-button'>Dalej</button></NavLink>
        </section>
        </main>
  );
};

export default Cart;
