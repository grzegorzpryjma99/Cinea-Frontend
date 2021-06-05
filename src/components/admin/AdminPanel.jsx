import React, {createContext, useEffect, useState}from "react";
import { useHistory } from "react-router-dom";
import "../Signin.css"
import "./Admin.css"

export const ScreeningContext = createContext();


export const AdminPanel = (props) => {
  const history = useHistory();

  const [films, setFilms] = useState([]);
  const [screenings, setScreenings] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [room, setRoom] = useState([]);
  const [orderScreening, setOrderScreening] = useState("");

  const [normalTickets, setNormalTickets] = useState(0);
  const [halfTickets, setHalfTickets] = useState(0);
  const [sum, setSum] = useState(0);
  const [tickets, setTickets] = useState(0);

  const updateTickets = (half, normal, suma) => {
    console.log('update w context', half, normal, suma)
    setNormalTickets(normal)
    setHalfTickets(half)
    setSum(suma)
    setTickets(normal+half)
  };

  const updateOrderScreening = (data) =>{
    setOrderScreening(data)
  }
  
  useEffect(() => {
    fetch("http://localhost:8080/api/films/")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/rooms/")
      .then((res) => res.json())
      .then((data) => setRooms(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/screenings/")
      .then((res) => res.json())
      .then((data) => setScreenings(data));
  }, []);
  
  return (
    <ScreeningContext.Provider 
      value={{updateTickets, updateOrderScreening, seanse: screenings, filmy: films, rooms: rooms, room:room, tickets: tickets, orderScreening: orderScreening}}
      {...props}/>
  );
};
