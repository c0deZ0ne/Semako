import { CombinedState, combineReducers } from 'redux';
import { IModalState, INotificationState, IAppStatusState } from '../interfaces';
import { modalReducer } from './modalReducer';
import { notificationReducer } from './notificationReducer';
import { appSatusReducer } from './appStatusReducer';
import {  IAuthState } from '../interfaces/Iauth';
import authReducer from './authReducer';

export interface combinedState {
  modal:IModalState,
  noitification:INotificationState,
  appStatus:IAppStatusState,
  auth:IAuthState,
}
export const rootReducer:CombinedState<any|combinedState>= combineReducers({
  appStatus:appSatusReducer,
  modal:modalReducer,
  noitification:notificationReducer,
  auth:authReducer
});
