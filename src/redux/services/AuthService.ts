import { IAuthState } from "../interfaces/Iauth";
import {User} from '../interfaces/Iauth'
export const AuthInitailState:IAuthState = {
  user: null,
  isAuthenticated: false,
  error: null,
};
