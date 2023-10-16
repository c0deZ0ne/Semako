import { FAILED, LOADING, RESET, SUCCESS } from '../actions-creators/notificationActions';
import { INotificationAction } from '../interfaces/Inotification';
import { initialNotificationState } from '../services/NotificationService';

export const notificationReducer = (state = initialNotificationState, action: INotificationAction) => {
    console.log(action)
  switch (action.type) {
    case LOADING:
      return { ...state, status:"LOADING",show:true,  message: action.message };
    case FAILED:
        return { ...state, status:"FAILED", show:true, message:action.message };
    case SUCCESS:
        return { ...state, status:"SUCCESS",show:true,  message:action.message };
    case RESET:
        return { ...state, ...initialNotificationState };
        default:
      return state;
  }
};

