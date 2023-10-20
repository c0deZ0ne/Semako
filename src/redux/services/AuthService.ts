import { IAuthState, IRegisterSate } from "../interfaces/Iauth";
import {User} from '../interfaces/Iauth'
export const AuthInitailState:IAuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};

export const RegisterInitialState:IRegisterSate[]=[]