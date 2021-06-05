import React, {useState, useRef} from "react";
import logo from './logo.svg'
import "./Signin.css"
import AuthService from "../services/auth.service";
import { NavLink, useHistory } from "react-router-dom";

const Signup = () => {


 const togglePanel = () => {
    history.push("/");
  };
  const form = useRef();
  const checkBtn = useRef();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);



      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          history.push("/");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    
  };

  return (
    <section>
       <NavLink to='/main-page'><img src={logo} className="logo-login"/></NavLink>
        <h1 class='register-header'>REJESTRACJA</h1>
        <div class='container-login'>
        <form  className='register-form' onSubmit={handleRegister}>
          <input
            id='username'
            name='username'
            placeholder='login'
            type='username'
            onChange={onChangeUsername}
            value={username}
          />

          <input
            id='email'
            name='email'
            placeholder='email'
            type='email'
            onChange={onChangeEmail}
            value={email}
          />

          <input
            id='password'
            name='password'
            type='password'
            placeholder='haslo'
            onChange={onChangePassword}
            value={password}
          />
        
          <button className='login-button' type='submit'>Zarejestruj się</button>
        </form>

        <button className='register-button' onClick={togglePanel}>Masz już konto?</button>
        </div>
    </section>
  );
};

export default Signup;
