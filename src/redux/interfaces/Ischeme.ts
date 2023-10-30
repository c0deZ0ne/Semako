export interface IAcountSchem {
    id:string
    type:shemeType,
    rate:number,
    amount:number,
    charge:number,
    isActive:boolean,
    schedule:schedule
  }
export enum shemeType {BASIC="BASIC",INTERMEDIATE="INTERMEDIATE",ADVANCE="ADVANCE"}
export enum schedule {MONTHLY="MONTHLY",QUATERLY="QUATERLY", YEARLY="YEARLY"}

export interface IschemeAction {
    type:string;
    payload:IAcountSchem|string
  }