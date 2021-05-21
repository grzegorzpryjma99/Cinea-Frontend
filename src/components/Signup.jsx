import React, {useState, useRef} from "react";
import { useHistory } from "react-router-dom";
import logo from './logo.svg'
import AuthService from "../services/auth.service";

const Signup = () => {
  // const history = useHistory();
  // const dispatch = useDispatch();
  // const auth = useSelector(state => state.auth)
  // const togglePanel = () => {
  //   history.push("/");
  // };

  // if(auth.register_error) console.log("server error")

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     surname: "",
  //     email: "",
  //     password: "",
  //   },
  //   validationSchema: SignupSchema,
  //   onSubmit: (values, { resetForm }) => {
  //     const form = {
  //       email: values.email,
  //       password: values.password,
  //       userDetails:{
  //         name: values.name, 
  //         surname: values.surname
  //       }
  //     };
  //     console.log(form)
  //     resetForm();
  //   },
  // });

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
        <img src={logo} className="logo-register"/>
        <h1 class='register-header'>REJESTRACJA</h1>
        <div class='container'>
        <form  className='register-form' onSubmit={handleRegister}>
          <input
            id='username'
            name='username'
            type='username'
            onChange={onChangeUsername}
            value={username}
          />

          <input
            id='email'
            name='email'
            type='email'
            onChange={onChangeEmail}
            value={email}
          />

          <input
            id='password'
            name='password'
            type='password'
            onChange={onChangePassword}
            value={password}
          />



          {/* <input
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
           /> */}
        
          <button className='login-button' type='submit'>Zarejestruj się</button>
        </form>

        <button className='register-button' onClick={togglePanel}>Masz już konto?</button>
        </div>
    </section>
  );
};

export default Signup;
