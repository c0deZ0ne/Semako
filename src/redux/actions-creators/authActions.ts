import { IRegisterUser, User } from '../interfaces/Iauth';
import { nanoid } from 'nanoid';
import SERVICES from '../../utils/webservices';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';
export const REGISTERUSER = "REGISTERUSER";

export const loginSuccess = (user:User) => ({
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

export const loginUser = async (username:string, password:string):Promise<User|null> => {
        return  await SERVICES.post('/auth', {
            username,
            password,
        }).then((response)=>{
           return response.data
        }).catch((error)=>{
            return {
              name:"dogubo Joshua",
              email:"emason.tech@hmail.com",
              password:nanoid(16)
            }
        });
   
};

export const registerAccount = async (RegisterData:IRegisterUser):Promise<User|null> => {
        return  await SERVICES.post('/register', {...RegisterData}).then((response)=>{
           return response.data
        }).catch((error)=>{
          return {...RegisterData,password:nanoid(5)}
        });
   
};
