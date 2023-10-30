import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { FC } from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  onClick?: any;
  text: string;
  variant?: 'filled' | 'outlined';
};
export type dashboardcard = {
  title: string;
  amaout: string;
  icon: string;
  mountainIcon: string;
  rate: string;
  period: string;
  color: string;
};
export type UserSchemeCard = {
  title: string;
  amaout: string;
  schemeType:string
  icon: string;
  mountainIcon?: string;
  rate: string;
  period: string;
  color: string;
};

export enum SchemeType {
  "MONTHLY",
  "QUATERLY",
  "YEARLY"
}
export type userTableDataType = {
  email: string;
  id: string;
  name: string;
  store_type: string;
  store_name: string;
  action: (id: any) => any;
};

export type userAccountHistory = {
  email: string;
  id: string;
  title: string;
  date: Date;
  type:string;
  amount: string;
  action: (id: any) => any;
};
export type actiosTypes = {
  title: string;
  total: number | string | null | string;
};

export type chartmapType = {
  title: string;
  color: string;
};
export type sidebarNavType = {
  link: string;
  display: string;
  id: nanoid;
  label: string;
  navPath: string;
  icon: any;
};

export type transactionTableDataType = {
  id: string;
  date: string;
  Customer_name: string;
  Transaction_id: string;
  Email_address: string;
  Service_purchased: string;
  Amount: string;
  action: (id: any) => any;
};

export const tabs = {
  title: string
};

export interface IappModal {
  component: ReactJSXElement | FC | Funtion;
  openModal: Function;
  closeModal: Funtion;
  setComponent?: any;
}
