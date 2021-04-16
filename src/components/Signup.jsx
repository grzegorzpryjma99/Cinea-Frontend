import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import logo from './logo.svg'
import { SignupSchema } from "../validation/formValidation.js";
import { useDispatch, useSelector} from "react-redux";
import { signup } from "../actions/auth.js";

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)
  const togglePanel = () => {
    history.push("/");
  };

  if(auth.register_error) console.log("server error")

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values, { resetForm }) => {
      const form = {
        email: values.email,
        password: values.password,
        userDetails:{
          name: values.name, 
          surname: values.surname
        }
      };
      console.log(form)
      dispatch(signup(form));
      resetForm();
    },
  });
  return (
    <section>
        <img src={logo} className="logo-register"/>
        <h1 class='register-header'>REJESTRACJA</h1>
        <div class='container'>
        <form  className='register-form' onSubmit={formik.handleSubmit}>
          
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value='email'
          />

          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value='powtórz email'
          />

          <input
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            value='hasło'
          />

          <input
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            value='haslo'
          />

          <input
            id='name'
            name='name'
            type='name'
            onChange={formik.handleChange}
            value='imię'
          />

          <input
            id='surname'
            name='surname'
            type='surname'
            onChange={formik.handleChange}
            value='nazwisko'
          />

          <input
            id='phone'
            name='phone'
            type='phone'
            onChange={formik.handleChange}
            value='numer telefonu'
          />

          <input 
            type="date" 
            id="start" 
            name="trip-start"
            value="2020-07-22"
            min="1920-01-01" 
            max="2020-12-31"
           />
        
          <button className='login-button' type='submit'>Zarejestruj się</button>
        </form>

        <button className='register-button' onClick={togglePanel}>Masz już konto?</button>
        </div>
    </section>
  );
};

export default Signup;
