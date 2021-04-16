import React from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import "./Signin.css"
import "./Signup.css"
import logo from './logo.svg'
import { SigninSchema } from "../validation/formValidation.js";
import { useDispatch, useSelector} from "react-redux";
import { signin } from "../actions/auth.js";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { Route, NavLink, HashRouter} from "react-router-dom";

const MainPage = () => {

  return (
      
    <BrowserRouter>
        <Header />
        <Main />
        <Footer />
    </BrowserRouter>
  );
};

export default MainPage;
