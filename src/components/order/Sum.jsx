import React, { useState, useContext } from 'react';
import Header from '../home/Header';
import "../../style/order.css"
import {ScreeningContext} from '../admin/AdminPanel'
import {Image} from 'cloudinary-react';
import axios from 'axios';

const Sum = () =>  {

  const { orderScreening, orderPlaces , tickets, order, normal, half, sum} = useContext(ScreeningContext);


  const tmp = []
  const tmp2 = []

  normal.forEach(function(item) {
    tmp.push(item);
  });

  half.forEach(function(item) {
    tmp.push(item);
  });

  console.log(tmp,'cale tmp')

  const rezerwuj = () => {

    console.log('tera order')
      const order = {
        user: {
          id: JSON.parse(localStorage.getItem('user')).id
        }
      }
      console.log(JSON.stringify(order), 'order')
     // const res = axios.post(`http://localhost:8080/api/order/order/add`, JSON.stringify(order),{headers: {'Content-Type': 'application/json' }})
      //console.log(res);

    tmp.forEach(function(item) {
      const createTickets = {
        ticketTypes: item.typeTicket,
        price: item.price,
        screening:{
          id: item.screening.id
        },
        placeId: item.placeId,
        userId: localStorage.getItem('id')
      }
      tmp2.push(createTickets);
      console.log(JSON.stringify(createTickets), 'bilecik do wyslania')
      const res = axios.post(`http://localhost:8080/api/order/tickets/add`, JSON.stringify(createTickets),{headers: {'Content-Type': 'application/json' }})
      //console.log(res);
     
      // console.log('tera order')
      // const order = {
      //   user: JSON.parse(localStorage.getItem('user')).id,
      //   tickets:[
      //     tmp
      //   ]
      // }
      // console.log(order)

      
    });
    alert('zarezerwowano, sprawdz email');
    console.log(JSON.stringify(tmp2), 'wszyskie wyslane');
    const res = axios.post(`http://localhost:8080/api/order/sendemail`, JSON.stringify(tmp2),{headers: {'Content-Type': 'application/json' }})
  }

  

  //console.log(orderScreening, orderPlaces)
  //console.log(tickets,'dsadas')

  //console.log(order,'taki mam bilet zrobiony'   )
  console.log('jestem na podsomowaniu i mam', normal, half)
    return (
        <main>
        <Header/>
        <section className='sum-section'>
        <h1 className='cart-header'>Sprawdź swoje zamówienie</h1>
        {normal.map( ticket => 
            <div className='ticket' key={ticket.id}>
              <div className='div-ticket-image'>
              <Image className='ticket-image' cloudName="dhdzistwc" publicId={ticket.screening.film.filmDetails.imageURL}/>
              </div>
              <div>
              {ticket.screening.film.filmDetails.title}
              </div>
              <div className='place'>
              place id = {ticket.placeId}
              </div>
              <div>
                {ticket.typeTicket}
              </div>
              <div>
              {ticket.screening.time.slice(0,5)}
              </div>
              <div>
                {ticket.price} PLN
              </div>
          </div>
          )}

{half.map( ticket => 
            <div className='ticket' key={ticket.id}>
              <div className='div-ticket-image'>
                <Image className='ticket-image' cloudName="dhdzistwc" publicId={ticket.screening.film.filmDetails.imageURL}/>
              </div>
              <div>
              {ticket.screening.film.filmDetails.title}
              </div>
              <div className='place'>
              place id = {ticket.placeId}
              </div>
              <div>
              {ticket.typeTicket}
              </div>
              <div>
              {ticket.screening.time.slice(0,5)}
              </div>
              <div>
              {ticket.price} PLN
              </div>
          </div>
          )}
        

          <div className='total'>
            <h2>Podsumowanie</h2>
            <p className='total-sum'>{sum} PLN</p>
          </div>

          <button onClick={rezerwuj} className='order-button'>Rezerwuj</button>
        </section>
        </main>
  );
};

export default Sum;
