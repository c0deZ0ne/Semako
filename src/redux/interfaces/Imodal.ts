import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { FC } from "react";

export interface IModalState {
    status: boolean;
    element:FC|null|ReactJSXElement
  }
   
  export interface IModalAction {
    type:string,
    element:FC|null|ReactJSXElement
  }


 