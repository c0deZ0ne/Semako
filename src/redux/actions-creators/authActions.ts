import { IRegisterSate, User } from '../interfaces/Iauth';
import { nanoid } from 'nanoid';
import SERVICES from '../../utils/webservices';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const REGISTER_USER = "REGISTER_USER";

export const loginSuccess = (user:IRegisterSate) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFailure = (error:string) => ({
  type: LOGIN_FAILURE,
  payload: error,
});
export const logout = () => {
  localStorage.clear()
  return {
    type: LOGOUT,
    payload: null,
  }
};

export const loginUser = async (data:User) => {

    return {
      type:LOGIN_SUCCESS,
        payload:{
          ...data
        }
     }    
};

export const registerAccount =  (RegisterData:IRegisterSate) => {
        return {
          type:REGISTER_USER,
            payload:{...RegisterData}
         } 
};
