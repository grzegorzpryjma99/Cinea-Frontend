import React , { useState }from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector} from "react-redux";
import AddFilm from "./AddFilm";



const AddScrenning= (props) => {
 
    const dispatch = useDispatch();
    
    const formik = useFormik({
        initialValues: {
          film: "",
          room: "",
          dateTime: "",
        },
        onSubmit: (values, {resetForm}) => {
          const form = {
                film: values.film,
                room: values.room,
                dateTime: values.dateTime,
          };
          console.log(form)
          resetForm();
        },
      });



      
                      
      function SelectionList() {
        const listItems =  ['tu', 'bede', 'wyswietlal', 'filmy']
        return <div className='selectionContainer'>
          <select className='selection' onChange={(e) => console.log(e.target.value)}>
            { listItems.map(item =>  {
             return <option className='selection-item' key={item} value={item} >{item}</option>
            })}
          </select>
        </div>
      }





  return (
    <section>
        <h1 class='register-header'>Dodaj seans</h1>
        <div class='container'>
        <form  className='register-form' onSubmit={formik.handleSubmit}>

          <input
            id='film'
            name='film'
            placeholder='film'
            onChange={formik.handleChange}
          />

          <input
            id='room'
            name='room'
            placeholder='room'
            onChange={formik.handleChange}
          />

          <input
            id='dateTime'
            type="datetime-local"
            name='dateTime'
            placeholder="2018-06-12T19:30"
            onChange={formik.handleChange}
          />
          <SelectionList />

          <button className='login-button' type='submit' >Dodaj film</button>

          
        </form>
        </div>
    </section>
  );
};

export default AddScrenning;
