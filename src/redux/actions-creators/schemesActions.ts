
import SERVICES from '../../utils/webservices';
import { IAcountSchem } from '../interfaces/Ischeme';
export const SUBSCRIBE = 'SUBSCRIBE';
export const CREATE = 'CREATE';



export const SubscribeScheme = (details:string) => ({
    type: SUBSCRIBE,
    payload: details,
  });

  export const serviceFee = (details:IAcountSchem) => ({
    type: CREATE,
    payload: details,
  });

