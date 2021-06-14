import React , { useState }from "react";
import { useFormik } from "formik";
import axios from 'axios';
import {Image} from 'cloudinary-react';

import "../../style/Signin.css"
import "../../style/Admin.css"

const AddFilm = () => {
 
  const[imageSelected, setImageSelected] = useState("");
  const[imageUrl, setimageUrl] = useState("");
    
  const uploadImage = () => {
    const formData = new FormData()
    formData.append("file", imageSelected)
    formData.append("upload_preset", "disldfo5")
    axios.post("https://api.cloudinary.com/v1_1/dhdzistwc/image/upload", 
    formData)
    .then((response) =>{
    setimageUrl(response.data.public_id)
    setimageUrl(`https://res.cloudinary.com/dhdzistwc/image/upload/v1621778224/${response.data.public_id}.png`);
    });
  };

  const formik = useFormik({
      initialValues: {
        category: "",
        title: "",
        description: "",
        trailer: "",
        time: "",
        releaseDate: "",
        imageURL: "",
        originalTitle: "",
        director: "",
        staff: ""
      },
      onSubmit: (values, {resetForm}) =>  {
        const form = {
          filmDetails:{
              category: values.category,
              title: values.title,
              description: values.description,
              trailer: values.trailer,
              time: values.time+':00',
              releaseDate: values.date,
              imageURL: imageUrl,
              originalTitle: values.originalTitle,
              director: values.director,
              staff: values.staff,
        }
        };
        const xd = JSON.stringify(form)
        axios.post(`http://localhost:8080/api/films/add`, xd, {headers: {'Content-Type': 'application/json', 'Host' : 'http://localhost:3000'  
        , 'Content-Length' : '1000' }})
        resetForm();
        alert('Film został dodany')
      },
    });

  return (
    <section className='container-admin-add'>
        <h1 class='register-header'>Dodaj film</h1>
        <div class='container'>
        <button onClick={uploadImage}>upload</button>
        <form  className='register-form' onSubmit={formik.handleSubmit}>

          <input
            type='file'
            onChange={(e) => {setImageSelected(e.target.files[0])}}
          />
          <Image 
          style ={{
            width: 200
          }}

          cloudName="dhdzistwc" publicId={imageUrl}/>
          
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
            type='time'
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

          <input 
            placeholder="oryginalny tytuł"
            id="originalTitle" 
            name='originalTitle'
            onChange={formik.handleChange}
           />

          <input 
            placeholder="genre" 
            id="genre" 
            name='genre'
            onChange={formik.handleChange}
           />

          <input 
            placeholder="director" 
            id="director" 
            name='director'
            onChange={formik.handleChange}
           />

          <input 
            placeholder="staff" 
            id="staff" 
            name='staff'
            onChange={formik.handleChange}
           />
        
          <button className='login-button' type='submit' >Dodaj film</button>
        </form>
        </div>
    </section>
  );
};

export default AddFilm;
