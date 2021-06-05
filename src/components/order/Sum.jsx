import React, { useState, useContext } from 'react';
import Header from '../home/Header';
import "./order.css"
import plakat from "../platak.svg"
import {ScreeningContext} from '../admin/AdminPanel'
const Sum = () =>  {

  const { orderScreening } = useContext(ScreeningContext);

    return (
        <main>
        <Header/>
        <section className='sum-section'>
        <h className='register-header'>Sprawdź swoje zamówienie</h>

        <div className='ticket'>
            <div >
              <img className='ticket-image' src={plakat}></img>
            </div>
            <div>
              Tutuł
            </div>
            <div className='place'>
              <p>Sala 1</p>
              <p>Rząd 2</p>
              <p>Miejsce3</p>
            </div>
            <div>
              Normalny
            </div>
            <div>
              10:00
            </div>
            <div>
              20PLN
            </div>
          </div>

          <div className='total'>
            <h>Podsumowanie</h>
            <p>40 PLN</p>
          </div>

          <button className='order-button'>Rezerwuj</button>
        </section>
        </main>
  );
};

export default Sum;
