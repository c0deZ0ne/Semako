
import SERVICES from '../../utils/webservices';
import { IAccountActionDetails, IAcountTransactions } from '../interfaces/ITransaction';
export const DEBIT = 'DEBIT';
export const CREDIT = 'CREDIT';
export const SERVICEFEE = 'SERVICEFEE';

export const debitAccount:any = (details:IAcountTransactions) => ({
  type: DEBIT,
  payload: details,
});

export const creditAccount = (details:IAcountTransactions) => ({
    type: CREDIT,
    payload: details,
  });

  export const serviceFee = (details:IAcountTransactions) => ({
    type: DEBIT,
    payload: details,
  });

