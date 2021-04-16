import React from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom'
import auth from '../reducers/auth';
import { useSelector } from 'react-redux'

const Logout = () =>  {
    const auth = useSelector(state=>state.auth)
    const history = useHistory()
    const dispatch = useDispatch()
    const logout = () => {
        dispatch({type: 'LOGOUT'})
        console.log('debug')
        //return <Redirect to= '/dsa'/>
    }
    if(!auth.login) history.push('/');
    return (<button onClick={logout}>Logout</button>) 
}

    export default Logout;

