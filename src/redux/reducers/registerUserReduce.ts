import { REGISTERUSER } from '../actions-creators/authActions';

export const USERSINITIALSTATE = [
    {email:"emason.tech@gmil.com",password:"password123456",name:"Dogubo Joshua",avatar:null},
    {email:"dogubo.joshua@gmil.com",password:"password123456",name:"Praise Dogubo",avatar:null}
  ]
export const registerReducer = (state = USERSINITIALSTATE, action:any ) => {
    console.log(action)
  switch (action.type) {
    case REGISTERUSER:
      return { ...state,  ...action.payload };
  }
};

