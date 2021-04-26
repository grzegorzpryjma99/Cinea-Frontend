import axios from 'axios';
import {SIGNIN, SIGNUP, SIGNIN_ERROR, SIGNUP_ERROR} from './types'
import {Redirect, useHistory} from 'react-router-dom';
import Signup from '../components/Signup';

export const signin = (signinData) => async (dispatch) => {
    try {
        const res = await axios.post(`http://localhost:8080/api/login?email=${signinData.email}&password=${signinData.password}`)
        console.log(res.data.httpStatus);
        console.log(res.data.token);
        if(res.data.token){
            dispatch({
                type: SIGNIN,
                payload: res.data.token
            })
            //return <Redirect to='/signup' />;
        }else{
            dispatch({
                type: SIGNIN_ERROR
            })
        } 
    } catch (error) {
    }
}
export const signup = (signupData) => async (dispatch) => {
    try {
        const {data} = await axios.post(`http://localhost:8080/api/register`, signupData)
        dispatch({
            type: SIGNUP,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SIGNUP_ERROR
        })
    }
};
