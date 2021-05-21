import React ,{useState, useRef}from "react";
import { useHistory } from "react-router-dom";
import "./Signin.css"
import "./Signup.css"
import logo from './logo.svg'
import AuthService from "../services/auth.service";

const Signin = (props) => {
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // const togglePanel = () => {
  //   history.push("/signup");
  // };

  // const formik = useFormik({
  //   initialValues: {
  //     username: "",
  //     password: "",
  //   },
  //   validationSchema: SigninSchema,
  //   onSubmit: (values, { resetForm }) => {
  //     const form = {
  //       username: values.username,
  //       password: values.password,
  //       setUsername(username);
  //       setPassword(password);
  //     };
  //     AuthService.login(username,password)
  //     //dispatch(signin(form))
  //     resetForm();
  //   },
  // });

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


    //form.current.validateAll();

      AuthService.login(username, password).then(
        () => {
          history.push("/main-page");
          window.location.reload();
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
        <img src={logo} className="logo-login"/>
        <div className='container-login'>
        <form  onSubmit={handleLogin}>
        <label htmlFor='email'></label>
          <input
            id='username'
            name='username'
            type='username'
            onChange={onChangeUsername}
            value={username}
          />
          {/* {formik.touched.email && formik.errors.email ? (
            <div className='form-error'>{formik.errors.email}</div>
          ) : null} */}
  
          <label htmlFor='password'></label>
          <input
            id='password'
            name='password'
            type='password'
            onChange={onChangePassword}
            value={password}
          />
          {/* {formik.touched.password && formik.errors.password ? (
            <div className='form-error'>{formik.errors.password}</div>
          ) : null} */}

          <button className='login-button' type='submit'>Zaloguj się</button>
        </form>

        <button className='register-button' onClick={togglePanel}>Zarejestruj się</button>
        </div>
    </section>
    
  );
};

export default Signin;
