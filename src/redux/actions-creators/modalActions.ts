import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { FC} from "react";

export const OPENMODAL = 'OPENMODAL';
export const CLOSEMODAL = 'CLOSEMODAL';

export const openModal = ({element}:{element:FC|null|ReactJSXElement}) => ({
  type: OPENMODAL,
  element:element
});

export const closeModal = () => ({
  type: CLOSEMODAL,
});

