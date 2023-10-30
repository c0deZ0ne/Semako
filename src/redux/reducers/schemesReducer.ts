
import { SUBSCRIBE } from "../actions-creators/schemesActions";
import { IschemeAction } from "../interfaces/Ischeme";
import { SchemeInitialState } from "../services/SchemesService";

const schemeReducer = (state = SchemeInitialState, action:IschemeAction) => {
  switch (action.type) {
    case SUBSCRIBE:
   const newData =  state.map((sheme)=>{
        if(sheme.id==action.payload){return {...sheme,isActive:true}}
        return {...sheme,isActive:false}
    })
    state = newData
    return state
    default:
      return state;
  }
};

export default schemeReducer;

