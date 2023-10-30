
import { CREDIT, DEBIT, SERVICEFEE } from "../actions-creators/transactionActions";
import { ItransactionActions } from "../interfaces/ITransaction";
import { TransactionInitialState } from "../services/TransactionService";

const transactionReducer = (state = TransactionInitialState, action:ItransactionActions) => {
  switch (action.type) {
    case DEBIT:
     state.AccountBallance-=action.payload.amount
     state.transactions=[...state.transactions,action.payload]
      return state
    case CREDIT:
     state.AccountBallance+=action.payload.amount
     state.transactions=[...state.transactions,action.payload]
      return state
    case SERVICEFEE:
      state.AccountBallance-=action.payload.amount
      state.transactions=[...state.transactions,action.payload]
       return state
    default:
      return state;
  }
};

export default transactionReducer;

