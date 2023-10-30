import { nanoid } from "nanoid";

export interface IAccountBallance {
    amount: number,
} 


  
export type IAccountActionDetails = {
  AccountBallance:number;
  transactions:IAcountTransactions[]
  
};


const edit = (data:any)=>{
  console.log("edit clicked",data)
}

export interface IAcountTransactions  {
  email: string;
  id: string;
  title: string;
  date: Date;
  type:string;
  amount: number;
  action?: (id: any) => any;
}
export interface ItransactionActions {
  type:string;
  payload:IAcountTransactions
}

