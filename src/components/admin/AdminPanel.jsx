import React, {createContext, useEffect, useState}from "react";
import { useHistory } from "react-router-dom";
import "../Signin.css"
import "./Admin.css"

export const ScreeningContext = createContext();


export const AdminPanel = (props) => {

  const tablicaHalf = []; //tu mam obiekty biletow ulgowych 
  const tablicaNormal= []; //tu mam obiekty biletow normalnych
  const history = useHistory();

  const [films, setFilms] = useState([]);  //wszystkie filmy
  const [screenings, setScreenings] = useState([]); //wszystkie seanse


  const [orderScreening, setOrderScreening] = useState(""); //zamawiany seans
  const [orderPlaces, setOrderPlacecs] = useState(""); // id zamawianych miejsc

  const [normalTickets, setNormalTickets] = useState(0); //ile normalnych
  const [halfTickets, setHalfTickets] = useState(0); //ile ulgowych
  const [tickets, setTickets] = useState(0); //ilosc biletow
  const [sum, setSum] = useState(0); //koszt biletow

  const [normal, setNormal] = useState([]);
  const [half, setHalf] = useState([]);

  


  const updateTickets = (half, normal, suma) => {
    setNormalTickets(normal)
    setHalfTickets(half)
    setSum(suma)
    setTickets(normal+half)

    

    if(half > 0){
      for(var i = 0; i < half; i++){
        const ticketHalf = {
          screening: orderScreening,
          typeTicket: 'REDUCED_TICKET',
          price: 15,
          placeId: ""
        }
        tablicaHalf.push(ticketHalf)
      } 
    }
    
    if(normal > 0){
      for(var i = 0; i < normal; i++){
        const ticketNormal = {
        screening: orderScreening,
        typeTicket: 'REGULAR_TICKET',
        price: 20,
        placeId: ""
      }
      tablicaNormal.push(ticketNormal)
    }
    }
    setHalf(tablicaHalf)
    setNormal(tablicaNormal)
  };

  const updateOrderScreening = (data) =>{
    setOrderScreening(data)
  }

  const updateOrderPlaces = (data) =>{   
    console.log(data, 'miejsca do rozdania') 
    console.log(normal, 'normalne');
    //console.log(half, 'ulgowe')

    normal.forEach(function (item) {
      console.log(item.placeId = data.pop())
    })

    half.forEach(function (item) {

      console.log(item.placeId = data.pop())

    })
    console.log(normal, 'normalne');
    console.log(half, 'ulgowe')

  }
  
  useEffect(() => {
    fetch("http://localhost:8080/api/films/")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/rooms/")
  //     .then((res) => res.json())
  //     .then((data) => setRooms(data));
  // }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/screenings/")
      .then((res) => res.json())
      .then((data) => setScreenings(data));
  }, []);
  
  return (
    <ScreeningContext.Provider 
      value={{updateTickets, updateOrderScreening, updateOrderPlaces, 
        seanse: screenings, filmy: films, tickets: tickets,
        orderScreening: orderScreening, orderPlaces: orderPlaces, 
        tablicaHalf: tablicaHalf, tablicaNormal: tablicaNormal, normal:normal, half:half, sum: sum}}
      {...props}/>
  );
};
