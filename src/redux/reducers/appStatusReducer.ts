import { STARTLOADING,STOPLOADING } from '../actions-creators/appSatusActions';
import { IAppSatusAction } from '../interfaces';
import { initialAppStatusState } from '../services/appStatusService';

export const appSatusReducer = (state = initialAppStatusState, action: IAppSatusAction) => {
  switch (action.type) {
    case STARTLOADING:
      return { ...state,IsLoading:true};
    case STOPLOADING:
        return { ...state, IsLoading:false};
        default:
      return state;
  }
};

