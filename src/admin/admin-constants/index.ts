import { nanoid } from 'nanoid';
import {
  invoicesIcon,
  messagesIcon,
  overViewIcon,
  paymentIcon,
  watchingIcon
} from '../../assets/icon';

import revenueIcon from '../../assets/revenue.svg';
import cutomerIcon from '../../assets/cardPeopleIcon.svg';
import totalTransactionIcon from '../../assets/total_transaction.svg';
import redMountain from '../../assets/red_mountain.svg';
import greenMountain from '../../assets/green_mountain.svg';
export const tabs = ['Last 24hours', 'Last week', 'Last month', 'Last year'];
export const Cards: dashboardcard[] = [
  {
    title: 'Total Revenue',
    amaout: '$600,976',
    icon: revenueIcon,
    mountainIcon: greenMountain,
    rate: '16%',
    period: 'vs last 7days',
    color: '#1AB366'
  },
  {
    title: 'Total Customers',
    amaout: '$600,976',
    icon: cutomerIcon,
    mountainIcon: redMountain,
    rate: '16%',
    period: 'vs last 7days',
    color: '#901EFF'
  },
  {
    title: 'Total Transactions',
    amaout: '$600,976',
    icon: totalTransactionIcon,
    mountainIcon: greenMountain,
    rate: '16%',
    period: 'vs last 7days',
    color: ' #0099FE'
  }
];

import adminPhoto from '../../assets/adminPhoto.svg';
import {
  actiosTypes,
  dashboardcard,
  sidebarNavType,
  transactionTableDataType
} from '../../utils/interfaces';
import { userTableDataType } from '../../utils/interfaces';
export const ADMIN_SIDEBAR_MENU: sidebarNavType[] = [
  {
    id: nanoid(5) as string,
    label: 'Dashboard',
    navPath: 'dashboard',
    icon: overViewIcon,
    link: '/admin/dashboard',
    display: 'Dashboard'
  },
  {
    id: nanoid(),
    label: 'Customer',
    navPath: 'customer',
    icon: messagesIcon,
    link: '/admin/dashboard/customer',
    display: 'Customer'
  },
  {
    id: nanoid(),
    label: 'Payment',
    icon: paymentIcon,
    navPath: 'payment',
    link: '/admin/dashboard/payment',
    display: 'Payment Checkout'
  },
  {
    id: nanoid(),
    label: 'Transactions',
    navPath: 'transactions',
    link: '/admin/dashboard/transactions',
    icon: invoicesIcon,
    display: 'Transaction'
  }
];

export const LOGIN_USER = {
  fullName: 'Dagana Lois',
  adminPhoto
};

type payload = {
  id: string;
  action: string;
};

const edit = (payload: payload) => {
  console.log(payload);
};

export const userTabeData: userTableDataType[] = [
  {
    id: '#324ab',
    name: 'john doe',
    store_name: 'splenzer',
    store_type: 'E-commerce',
    email: 'johnsnow@gmail.com',
    action: edit
  },
  {
    id: '#324ab',
    name: 'john doe',
    store_name: 'splenzer',
    store_type: 'E-commerce',
    email: 'johnsnow@gmail.com',
    action: edit
  },
  {
    id: '#324ab',
    name: 'john doe',
    store_name: 'splenzer',
    store_type: 'E-commerce',
    email: 'johnsnow@gmail.com',
    action: edit
  },
  {
    id: '#324ab',
    name: 'john doe',
    store_name: 'splenzer',
    store_type: 'E-commerce',
    email: 'johnsnow@gmail.com',
    action: edit
  },
  {
    id: '#324ab',
    name: 'john doe',
    store_name: 'splenzer',
    store_type: 'E-commerce',
    email: 'johnsnow@gmail.com',
    action: edit
  },
  {
    id: '#324ab',
    name: 'john doe',
    store_name: 'splenzer',
    store_type: 'E-commerce',
    email: 'johnsnow@gmail.com',
    action: edit
  },
  {
    id: '#324ab',
    name: 'john doe',
    store_name: 'splenzer',
    store_type: 'E-commerce',
    email: 'johnsnow@gmail.com',
    action: edit
  },
  {
    id: '#324ab',
    name: 'john doe',
    store_name: 'splenzer',
    store_type: 'E-commerce',
    email: 'johnsnow@gmail.com',
    action: edit
  },
  {
    id: '#324ab',
    name: 'john doe',
    store_name: 'splenzer',
    store_type: 'E-commerce',
    email: 'johnsnow@gmail.com',
    action: edit
  },
  {
    id: '#324ab',
    name: 'john doe',
    store_name: 'splenzer',
    store_type: 'E-commerce',
    email: 'johnsnow@gmail.com',
    action: edit
  },
  {
    id: '#324ab',
    name: 'john doe',
    store_name: 'splenzer',
    store_type: 'E-commerce',
    email: 'johnsnow@gmail.com',
    action: edit
  }
];

export const actions: actiosTypes[] = [
  {
    title: 'Pending',
    total: 50
  },
  {
    title: 'Accepted',
    total: 80
  },
  {
    title: 'Rejected',
    total: 300
  }
];

export const periods: actiosTypes[] = [
  {
    title: 'Monthly',
    total: null
  },
  {
    title: 'Daily',
    total: null
  },
  {
    title: 'Weekly',
    total: null
  }
];

export const customerAction: actiosTypes[] = [
  {
    title: 'All',
    total: null
  },
  {
    title: 'Deleted',
    total: null
  }
];

export const transastionTableData: transactionTableDataType[] = [
  {
    id: '#324ab',
    date: '28-04-23',
    Customer_name: 'splenzer',
    Transaction_id: 'Rx9075TSME-B',
    Email_address: 'splenzert@gmail.com',
    Service_purchased: 'Legal Service',
    Amount: '$1,400',
    action: edit
  },
  {
    id: '#324ab',
    date: '28-04-23',
    Customer_name: 'splenzer',
    Transaction_id: 'Rx9075TSME-B',
    Email_address: 'splenzert@gmail.com',
    Service_purchased: 'Legal Service',
    Amount: '$1,400',
    action: edit
  },
  {
    id: '#324ab',
    date: '28-04-23',
    Customer_name: 'splenzer',
    Transaction_id: 'Rx9075TSME-B',
    Email_address: 'splenzert@gmail.com',
    Service_purchased: 'Legal Service',
    Amount: '$1,400',
    action: edit
  },
  {
    id: '#324ab',
    date: '28-04-23',
    Customer_name: 'splenzer',
    Transaction_id: 'Rx9075TSME-B',
    Email_address: 'splenzert@gmail.com',
    Service_purchased: 'Legal Service',
    Amount: '$1,400',
    action: edit
  },
  {
    id: '#324ab',
    date: '28-04-23',
    Customer_name: 'splenzer',
    Transaction_id: 'Rx9075TSME-B',
    Email_address: 'splenzert@gmail.com',
    Service_purchased: 'Legal Service',
    Amount: '$1,400',
    action: edit
  },
  {
    id: '#324ab',
    date: '28-04-23',
    Customer_name: 'splenzer',
    Transaction_id: 'Rx9075TSME-B',
    Email_address: 'splenzert@gmail.com',
    Service_purchased: 'Legal Service',
    Amount: '$1,400',
    action: edit
  },
  {
    id: '#324ab',
    date: '28-04-23',
    Customer_name: 'splenzer',
    Transaction_id: 'Rx9075TSME-B',
    Email_address: 'splenzert@gmail.com',
    Service_purchased: 'Legal Service',
    Amount: '$1,400',
    action: edit
  },
  {
    id: '#324ab',
    date: '28-04-23',
    Customer_name: 'splenzer',
    Transaction_id: 'Rx9075TSME-B',
    Email_address: 'splenzert@gmail.com',
    Service_purchased: 'Legal Service',
    Amount: '$1,400',
    action: edit
  },
  {
    id: '#324ab',
    date: '28-04-23',
    Customer_name: 'splenzer',
    Transaction_id: 'Rx9075TSME-B',
    Email_address: 'splenzert@gmail.com',
    Service_purchased: 'Legal Service',
    Amount: '$1,400',
    action: edit
  }
];
