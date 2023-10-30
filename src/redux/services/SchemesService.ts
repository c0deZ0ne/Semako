import { nanoid } from "nanoid";
import { IAcountSchem, schedule, shemeType } from "../interfaces/Ischeme";

export const edit =(data:any)=>{
  console.log(data)
}


export const SchemeInitialState:IAcountSchem[] = [{
  id:nanoid(6),
  type:shemeType.BASIC,
  rate:10,
  isActive:false,
  amount:200,
  charge:10,
  schedule:schedule.MONTHLY
},
{
  id:nanoid(6),
  isActive:false,
  type:shemeType.INTERMEDIATE,
  rate:3,
  amount:300,
  charge:5,
  schedule:schedule.YEARLY,
},
{
  id:nanoid(6),
  isActive:false,
  type:shemeType.ADVANCE,
  rate:3,
  amount:300,
  charge:2,
  schedule:schedule.QUATERLY,
}
]
 
 
  
