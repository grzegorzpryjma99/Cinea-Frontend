import React, { useState , useEffect, useContext} from 'react';
import Header from '../home/Header';
import "../../style/order.css"
import { ScreeningContext } from "../admin/AdminPanel"
import { NavLink } from 'react-router-dom';
import { Placeholder } from 'cloudinary-react';

const Place = () =>  {

    const { tickets, orderScreening, updateOrderPlaces, tablicaNormal, tablicaHalf, normal, half} = useContext(ScreeningContext);
    const [counter, setCounter] = useState(tickets);

    const [currentData, setCurrendData] = useState([])
    const [limit, setLimit] = useState(tickets)

    const tablicaMiejsczajetych = [];

    var tab = orderScreening.room.places
    var zajete = orderScreening.zajeteMiejsca

    const xd = () => {
      updateOrderPlaces(currentData);
      
  }
    tab.forEach(function (item) {
      zajete.forEach(function (item2) {
      if(item.row === item2.place[0].row && item.place === item2.place[0].place){
        tablicaMiejsczajetych.push(item.id)
      }       
    })
    })

      const count = () => {
        setCounter(tickets - currentData.length)
      }

      const selectData = (id, event) =>{
        let isSelected = event.currentTarget.checked;
        if(isSelected){
            if(currentData.length<limit){
              setCurrendData([...currentData, id])
            }
        }
        else{
           setCurrendData(currentData.filter((item)=>id!==item))
        }
   }


    return (
        <main>
        <Header/>
        <div className='screen'>EKRAN</div>

        <div className='places-in-room'>
        {orderScreening.room.places.map( place => 
            <div  className={tablicaMiejsczajetych.includes(place.id) ? 'taken-seats' : 'seats'}  key={place.id}>
                  <input 
                  id='mojcheck'
                  className='place-checkbox'
                    type="checkbox" 
                    checked={currentData.indexOf(place.id)>=0}
                    onChange={selectData.bind(this,place.id)}
                    disabled={tablicaMiejsczajetych.includes(place.id) ? true : false}
                    name="select-data"/>
                    {place.row + 'row'} {place.place + 'place'}
              </div>
                
                        )}</div>

        




        <div className='legenda'>
          <div className='zajete'>zazjęte miejsce</div>
          <div className='wolne'>wolne miejsce</div>
          <div className='wybrane'>wybrane miejsce</div>
        </div>
        
        <NavLink to='/cart/sum'><button onClick={xd}  className='order-button'>Dalej</button></NavLink>
        </main>
  );
};

export default Place;
