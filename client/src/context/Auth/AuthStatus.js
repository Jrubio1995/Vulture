import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axiosClient from '../../config/Axios';
import AuthToken from '../../config/AuthToken';

import {
    SUCCESS_REGISTRATION,
    ERROR_REGISTRATION,
    GET_USER,
    SUCCESS_LOGIN,
    ERROR_LOGIN,
    CLOSE_SESSION
} from '../../type/index';

const AuthStatus = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null,
        loading: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const userRegistration = async data => {
        try {
            const response = await axiosClient.post('/api/users', data);
            console.log(response.data);
            dispatch({
                type: SUCCESS_REGISTRATION,
                payload: response.data
            });

            // get the user
            loggedinUser();
        } catch (error) {
            console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }
            dispatch({
                type: ERROR_REGISTRATION,
                payload: alert
            })
        }
    }

    // Returns the login user
    const loggedinUser = async () => {

        const token = localStorage.getItem('token');
        if (token) {
            // send token to headers
            AuthToken(token);
        }
        try {
            const response = await axiosClient.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: response.data.user
            })

        } catch (error) {
            dispatch({
                type: ERROR_LOGIN
            })
        }
    }
    // Login
    const userLogin = async data => {
        try {
            const response = await axiosClient.post('/api/auth', data);
            dispatch({
                type: SUCCESS_LOGIN,
                payload: response.data
            });
            loggedinUser();
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }
            dispatch({
                type: ERROR_REGISTRATION,
                payload: alert
            })
        }
    }

    // close session
    const closeSession = () => {
        dispatch({
            type: CLOSE_SESSION
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                userRegistration,
                userLogin,
                loggedinUser,
                closeSession
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthStatus;