import { CLOSEMODAL, OPENMODAL } from '../actions-creators/modalActions';
import { IModalAction } from '../interfaces';
import { initialModalState } from '../services/ModalService';

export const modalReducer = (state = initialModalState, action: IModalAction) => {
  switch (action.type) {
    case OPENMODAL:
      return {...state, status:true,  element: action.element };
    case CLOSEMODAL:
        return { ...state, status:false,  component:null };
        default:
      return state;
  }
};

