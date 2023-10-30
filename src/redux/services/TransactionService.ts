import { nanoid } from "nanoid";
import { IAccountActionDetails, IAcountTransactions, ItransactionActions } from "../interfaces/ITransaction";

export const edit =(data:any)=>{
  console.log(data)
}


export const TransactionInitialState:IAccountActionDetails = {
  AccountBallance:25000,
  transactions:[ {
    id: nanoid(4),
    title: 'admin fee',
    type: 'debit',
    email: 'johnsnow@gmail.com',
    date:new Date(),
    amount:1200,
    action: edit
  },
  {
    id: nanoid(4),
    title: 'monthly credit',
    type: 'credit',
    email: 'johnsnow@gmail.com',
    date:new Date(),
    amount:2000,
    action: edit
  },
  {
    id: nanoid(4),
    title: 'Electricity',
    type: 'Debit',
    email: 'johnsnow@gmail.com',
    date:new Date(),
    amount:70080,
    action: edit
  },
  {
    id: nanoid(4),
    title: 'Transport',
    type: 'Debit',
    email: 'johnsnow@gmail.com',
    date:new Date(),
    amount:200,
    action: edit
  },]
}
 
 
  
