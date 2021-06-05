import React, { useState , useEffect, useContext} from 'react';
import Header from '../home/Header';
import "./order.css"
import { ScreeningContext } from "../admin/AdminPanel"
import { NavLink } from 'react-router-dom';

const Place = () =>  {

  const { tickets, orderScreening } = useContext(ScreeningContext);
    const {room} = useContext(ScreeningContext)  // chwilowo pobieram sobie dowolny pokoj
    const [rooms, setRooms] = useState();
    const [counter, setCounter] = useState(tickets);
    const [miejsce, setMiejsce] = useState("");
    
    console.log(orderScreening.room, 'cos')

      const count = () => {

        setCounter(counter-1)
      }

      const handleChange = (event) => {    
        setMiejsce({value: event.target.value});  
        console.log(miejsce)
      }

    return (
        <main>
        <Header/>
        Miejsca w tej sali
        <div className='divek'>
        {orderScreening.room.places.map( place => 
            <div className='seats' key={place.id}>
                <input type='checkbox' 
                onClick={count}
                onChange={handleChange}
                />
                {place.row + 'row'} {place.place + 'place'}
            </div>
        )}
        </div>

        <div>
            {counter}
        </div>
        <NavLink to='/cart/sum'><button className='order-button'>Dalej</button></NavLink>
        </main>
  );
};

export default Place;
