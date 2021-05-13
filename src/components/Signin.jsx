import React from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import "./Signin.css"
import "./Signup.css"
import logo from './logo.svg'
import { SigninSchema } from "../validation/formValidation.js";
import { useDispatch, useSelector} from "react-redux";
import { signin } from "../actions/auth.js";

const Signin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const togglePanel = () => {
    history.push("/signup");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: SigninSchema,
    onSubmit: (values, { resetForm }) => {
      const form = {
        email: values.email,
        password: values.password,
      };
      //dispatch(signin(form))
      resetForm();
    },
  });

  return (
    <section>
        <img src={logo} className="logo-login"/>
        <div className='container-login'>
        <form  onSubmit={formik.handleSubmit}>
        <label htmlFor='email'></label>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className='form-error'>{formik.errors.email}</div>
          ) : null}
  
          <label htmlFor='password'></label>
          <input
            id='password'
            name='password'
            type='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className='form-error'>{formik.errors.password}</div>
          ) : null}

          <button className='login-button' type='submit'>Zaloguj się</button>
        </form>

        <button className='register-button' onClick={togglePanel}>Zarejestruj się</button>
        </div>
    </section>
    
  );
};

export default Signin;
