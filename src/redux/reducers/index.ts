import { CombinedState, combineReducers } from 'redux';
import { IModalState, INotificationState, IAppStatusState } from '../interfaces';
import { modalReducer } from './modalReducer';
import { notificationReducer } from './notificationReducer';
import { appSatusReducer } from './appStatusReducer';
import {  IAuthState, IRegisterSate } from '../interfaces/Iauth';
import authReducer from './authReducer';
import { registerReducer } from './registerUserReduce';

export interface combinedState {
  modal:IModalState,
  noitification:INotificationState,
  appStatus:IAppStatusState,
  auth:IAuthState,
  register:IRegisterSate[]
}
export const rootReducer:CombinedState<any|combinedState>= combineReducers({
  appStatus:appSatusReducer,
  modal:modalReducer,
  noitification:notificationReducer,
  auth:authReducer,
  register:registerReducer
});
