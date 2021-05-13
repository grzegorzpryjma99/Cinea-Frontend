import React , { useState }from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector} from "react-redux";
import axios from 'axios';

const AddFilm = () => {
 
    const dispatch = useDispatch();
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    
    const formik = useFormik({
        initialValues: {
          category: "",
          title: "",
          description: "",
          trailer: "",
          time: "",
          releaseDate: "",
        },
        onSubmit: (values, {resetForm}) =>  {

          const form = {
            filmDetails:{
                category: values.category,
                title: values.title,
                description: values.description,
                trailer: values.trailer,
                time: values.time,
                releaseDate: values.date,
          }
          };
          const xd = JSON.stringify(form)
          console.log(xd)
          const res = axios.post(`http://localhost:8080/api/films/add`, xd, {headers: {'Content-Type': 'application/json', 'Host' : 'http://localhost:3000'  
          , 'Content-Length' : '1000' }})
          console.log(res);
          resetForm();
        },
      });

  return (
    <section>
        <h1 class='register-header'>Dodaj film</h1>
        <div class='container'>
        <form  className='register-form' onSubmit={formik.handleSubmit}>
          <input
            id='title'
            name='title'
            placeholder='tytuł'
            onChange={formik.handleChange}
          />

          <input
            id='description'
            name='description'
            placeholder='description'
            onChange={formik.handleChange}
          />

          <input
            id='trailer'
            name='trailer'
            placeholder='trailer'
            onChange={formik.handleChange}
          />

          <input
            id='category'
            name='category'
            placeholder='category'
            onChange={formik.handleChange}
            />

          <input
            id='time'
            name='time'
            placeholder='czas trwania'
            onChange={formik.handleChange}
          />


          <input 
            type="date" 
            id="date" 
            name='date'
            onChange={formik.handleChange}
           />
        
          <button className='login-button' type='submit' >Dodaj film</button>
        </form>
        </div>
    </section>
  );
};

export default AddFilm;
