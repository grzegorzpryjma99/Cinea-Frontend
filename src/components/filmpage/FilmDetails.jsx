import React from "react";
import zwiastun from './zwiastun.svg'
import "./film-page.css"
import plakat from '../platak.svg'
import { FaRegClock , FaCalendarAlt } from "react-icons/fa";

const FilmDetails = (dane) =>{

        return (
            <section>
                <h1 className='title'>{dane.dane.filmDetails.title}</h1>
                <div className='container-film'>
                    <div className='photo'>
                        <img src={plakat}/>
                    </div>
                    <div className='details'>
                        <div className='data-time'>
                            <div className='date'>
                                <div className='data-icon'>
                                    <FaCalendarAlt />
                                </div>
                                <div className="date-div">
                                    <p>Data premiery</p>
                                    <p>{dane.dane.filmDetails.releaseDate}</p>
                                </div>
                            </div>
                            <div className='time'>
                                <div className='time-icon'>
                                    <FaRegClock />
                                </div>
                                <div className='time-div'>
                                    <p>Czas trwania</p>
                                    <p>{dane.dane.filmDetails.time}</p>
                                </div>
                            </div>
                        </div>
                        <div className='description'>
                            <p>{dane.dane.filmDetails.description}</p>
                        </div>
                        <button className='booking-button'>Kup bilety</button>
                    </div>
                </div>
            
                <div>
                        <h1 className="title">Zobacz zwiastun</h1>
                        <div className='trailer'>
                            <img src={zwiastun}></img>
                        </div>
                        <div className='full-details'>
                            <ul>
                                <li>Tytuł oryginalny</li>
                                <li>Gatunek filmu {dane.dane.filmDetails.category}</li>
                                <li>Reżyser</li>
                                <li>Produkcja</li>
                                <li>Obsada</li>
                            </ul>

                        </div>
                </div>
            
            </section>
              );
        }
    

    export default FilmDetails;
        ;
//     const state = useState({
//         title: "",
//         description: ""
//     })

    
//   // console.log(dane.id)
//    // console.log(dane.filmDetails.title)
//   return (
    
//     <section>
        
//     <h1 className='title'>fsd</h1>
//     <div className='container-film'>
//         <div className='photo'>
//             <img src={plakat}/>
//         </div>
//         <div className='details'>
//             <div className='data-time'>
//                 <div className='date'>
//                     <div className='data-icon'>
//                         placeholder
//                     </div>
//                     <div className="date-div">
//                         <p>Data premiery</p>
//                         <p>dsa</p>
//                     </div>
//                 </div>
//                 <div className='time'>
//                     <div className='time-icon'>
//                         placeholder
//                     </div>
//                     <div className='time-div'>
//                         <p>Czas trwania</p>
//                         <p>das</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='description'>
//                 <p>dsa</p>
//             </div>
//             <button className='booking-button'>Kup bilety</button>
//         </div>
//     </div>

//     <div>
//             <h1 class="title">Zobacz zwiastun</h1>
//             <div class='trailer'>
//                 <img src='zwiastun.svg'></img>
//             </div>
//     </div>

// </section>
//   );
// };

// export default FilmsDetails;
