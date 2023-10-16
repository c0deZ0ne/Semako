
import { LOGIN_FAILURE, LOGIN_SUCCESS,LOGOUT,REGISTERUSER } from "../actions-creators/authActions";
import { IAuthAction } from "../interfaces/Iauth";
import { AuthInitailState } from "../services/AuthService";

const authReducer = (state = AuthInitailState, action:IAuthAction) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;

