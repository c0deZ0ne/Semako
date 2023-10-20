import { REGISTER_USER } from '../actions-creators/authActions';
import { RegisterInitialState } from '../services/AuthService';


export const registerReducer = (state = RegisterInitialState, action:any ) => {
  switch (action.type) {
    case REGISTER_USER:
      const newState =  [ ...state,  action.payload ];
      return newState
    default :
      return state
  }
};

