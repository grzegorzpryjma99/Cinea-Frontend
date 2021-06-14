import React ,{useState}from "react";
import { NavLink, useHistory } from "react-router-dom";
import "../style/Signin.css"
import logo from '../image/logo2.svg'
import AuthService from "../services/auth.service";

const Signin = (props) => {

  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const togglePanel = () => {
    history.push("/signup");
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

      AuthService.login(username, password).then(
        () => {
          if(JSON.parse(localStorage.getItem('user')).roles[0] == 'ROLE_ADMIN'){
            history.push("/adminSettings");
            window.location.reload();
          } else{
            history.push("/main-page");
            window.location.reload();
          }
          
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
  };
  
  return (
    <section>
      <NavLink to='/main-page'><img src={logo} className="logo-login"/></NavLink>
        <div className='container-login'>
        <h1 className='register-header'>Logowanie</h1>
        <form  onSubmit={handleLogin}>

        <label htmlFor='email'></label>
          <input
            id='username'
            name='username'
            placeholder='login'
            type='username'
            onChange={onChangeUsername}
            value={username}
          />

          <label htmlFor='password'></label>
          <input
            id='password'
            name='password'
            placeholder='haslo'
            type='password'
            onChange={onChangePassword}
            value={password}
          />

          <button className='login-button' type='submit'>Zaloguj się</button>
        </form>
        <button className='register-button' onClick={togglePanel}>Zarejestruj się</button>
        </div>
    </section>
    
  );
};

export default Signin;
