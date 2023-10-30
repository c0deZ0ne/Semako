import { CombinedState, combineReducers } from 'redux';
import { IModalState, INotificationState, IAppStatusState } from '../interfaces';
import { modalReducer } from './modalReducer';
import { notificationReducer } from './notificationReducer';
import { appSatusReducer } from './appStatusReducer';
import {  IAuthState, IRegisterSate } from '../interfaces/Iauth';
import authReducer from './authReducer';
import { registerReducer } from './registerUserReduce';
import transactionReducer from './transactionReducer';
import { IAccountActionDetails, ItransactionActions } from '../interfaces/ITransaction';
import schemeReducer from './schemesReducer';
import { IAcountSchem, IschemeAction } from '../interfaces/Ischeme';

export interface combinedState {
  modal:IModalState,
  noitification:INotificationState,
  appStatus:IAppStatusState,
  auth:IAuthState,
  register:IRegisterSate[]
  transaction:IAccountActionDetails
  scheme:IAcountSchem[]
}
export const rootReducer:CombinedState<any|combinedState>= combineReducers({
  appStatus:appSatusReducer,
  modal:modalReducer,
  noitification:notificationReducer,
  auth:authReducer,
  register:registerReducer,
  transaction:transactionReducer,
  scheme:schemeReducer
});
