import React, {createContext, useEffect, useState}from "react";
import { useHistory } from "react-router-dom";
import "../Signin.css"
import "./Admin.css"

export const ScreeningContext = createContext();


export const AdminPanel = (props) => {
  const history = useHistory();

  const [films, setFilms] = useState([]);
  const [screenings, setScreenings] = useState([]);

  const togglePanel = () => {
    history.push("/addFilm");
  };

  const togglePanel2 = () => {
    history.push("/addScreening");
  };

  const deleteFilm = () => {
    console.log("usun film")
  }

  const editFilm = () => {
    console.log("edytuj film")
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/films/")
      .then((res) => res.json())
      .then((data) => setFilms(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/api/screenings/")
      .then((res) => res.json())
      .then((data) => setScreenings(data));
  }, []);

  console.log("utworzone w context",films);
  console.log("utworzone w context",screenings);
  
  return (
    // <section>
    //     <div class='container-admin'>
    //         <div className='screeningEditBox'>
    //         <h>Aktualne seanse</h>
    //         {screenings.map(screening =>
    //             <div className='film' key={screening.id}>
    //             <h>{screening.film.filmDetails.title} Sala: {screening.room.id}</h>
    //             <div>
    //             <button onClick={editFilm}><FiSettings/></button>
    //             <button onClick={deleteFilm}><ImBin2/></button>
    //             </div>
    //           </div>)}
    //           <button className='login-button' onClick={togglePanel2} >Dodaj seans</button>
    //         </div>
    //         <div className='filmEditBox'>
    //           <h>Aktualne filmy</h>
    //           {films.map(film =>
    //             <div className='film' key={film.id}>
    //             <h>{film.filmDetails.title}</h>
    //             <div>
    //             <button onClick={editFilm}><FiSettings/></button>
    //             <button onClick={deleteFilm}><ImBin2/></button>
    //             </div>
    //           </div>)}
                
    //             <button className='login-button' onClick={togglePanel} >Dodaj film</button>
    //         </div>
    //     </div>
    // </section>
    <ScreeningContext.Provider 
      value={{seanse: screenings, filmy: films}}
      {...props}/>
  );
};

//export default AdminPanel;
