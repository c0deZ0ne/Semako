export interface IAcountSchem {
    id:string
    type:shemeType,
    rate:number,
    amount:number,
    charge:number,
    isActive:boolean,
    schedule:schedule
  }
export enum shemeType {BASIC="BASIC",INTERMEDIATE="INTERMEDIATE",ADVANCE="ADVANCE",TEST="TEST"}
export enum schedule {monthly="monthly",quarterly="quarterly", yearly="yearly",minute='minute'}

export interface IschemeAction {
    type:string;
    payload:IAcountSchem|string
  }