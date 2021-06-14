import React, { useState, useContext, useEffect } from 'react';
import { NavLink, useHistory, useParams } from "react-router-dom";
import Header from '../components/home/Header';
import "../style/order.css"
import { FiPlus, FiMinus } from "react-icons/fi";
import {ScreeningContext} from '../components/admin/AdminPanel'

const Cart = () =>  {

    const { updateTickets, updateOrderScreening } = useContext(ScreeningContext);
    const { screeningId } = useParams();
    const history = useHistory();
    const [normalTickets, setNormalTickets] = useState(0);
    const [halfTickets, setHalfTickets] = useState(0);
    const [sum, setSum] = useState(0);
    const [normalPrice, setNormalPrice] = useState(20);
    const [halfPrice, setHalfPrice] = useState(15);
    
    if(!localStorage.getItem("user")){
        history.push("/")
    }

    useEffect(() => {
        fetch(`http://localhost:8080/api/screenings/${screeningId}`)
          .then((res) => res.json())
          .then((data) => updateOrderScreening(data));
      }, []);

    const decreaseNormal = () =>{
        if(normalTickets > 0) {
            setNormalTickets(normalTickets- 1);
            setSum(sum - normalPrice)
        }
    }

    const increaseNormal = () =>{
        setNormalTickets(normalTickets+ 1);
        setSum(sum + normalPrice)
    }

    const decreaseHalf = () =>{
        if(halfTickets > 0){
            setHalfTickets(halfTickets- 1);
            setSum(sum - halfPrice)
        }
    }

    const increaseHalf = () =>{
        setHalfTickets(halfTickets+ 1);
        setSum(sum + halfPrice)
    }

    const update = () => {
        updateTickets(halfTickets, normalTickets, sum) 
    }

    return (
        <main>
        <Header/>
        <section className='cart-section'>
        <h1 className="cart-header">Wybierz bilety</h1>

            <div className='normal-ticket'>
                <h1>Bilet normalny</h1>{normalPrice + 'PLN'}
            <div className='quantity'>
                <button className='increment' onClick={increaseNormal}><FiPlus/></button>
                <input className='ticket-input' placeholder={normalTickets}></input>
                <button className='decrement' onClick={decreaseNormal}><FiMinus/></button>
            </div>
            </div>

            <div className='normal-ticket'>
            <h1>Bilet ulgowy</h1> {halfPrice + 'PLN'}
            <div className='quantity'>
                <button className='increment' onClick={increaseHalf}><FiPlus/></button>
                <input className='ticket-input' placeholder={halfTickets}></input>
                <button className='decrement' onClick={decreaseHalf}><FiMinus/></button>
            </div>
            </div>
            
            <div className='total'>
                <h2>Podsumowanie</h2>
                <p className='total-sum'>{sum + ' PLN '}</p>
            </div>
            <NavLink to='/cart/place'><button onClick={update} className='order-button'>Dalej</button></NavLink>
        </section>
        </main>
  );
};

export default Cart;
