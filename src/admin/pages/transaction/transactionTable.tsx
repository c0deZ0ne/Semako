import React from 'react';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { transactionTableDataType } from '../../../utils/interfaces';
import moreIcon from '../../../assets/more.svg';
import { nanoid } from 'nanoid';
import EyeIcon from '@heroicons/react/20/solid/EyeIcon';
import TrashIcon from '@heroicons/react/20/solid/TrashIcon';

export default function transactionTable({
  transastionTableData
}: {
  transastionTableData: transactionTableDataType[];
}) {
  const hadletableData = (data: any) => {
    console.log('table', data);
  };

  const menus = [
    { title: ' View Customer Details', menuIcon: EyeIcon },
    { title: '  Delete', menuIcon: TrashIcon }
  ];
  const displayIcon = moreIcon;
  const action = (actionType: any) => {
    console.log(actionType);
  };

  return (
    <TableContainer className="grid col-span-full my-[24px]  font-[500] text-[16px] text-[#696E7C]  w-[100%] h-[100%] overflow-y-auto ">
      <Table
        className="grid grid-cols-6   h-[100%] font-[500] text-[16px] text-[#696E7C]  bg-white  "
        style={{ boxShadow: '0px 40px 80px 0px rgba(0, 0, 0, 0.05)' }}
      >
        <TableHead className="grid align-middle  max-h-[24px] border-b-2 border-b-[#F1F1FF] tfont-[500] items-center justify-center text-[16px] text-[#696E7C] ">
          <TableRow className="  align-middle items-center justify-center font-[500] text-[16px] text-[#696E7C]  flex bg-[#FAF9F9]   ">
            <TableCell className="h-[24px] items-center justify-center align-middle font-Corsa-Grotesk text-[bold] font-[500] text-[16px] text-[#696E7C] ">
              <pre className='  flex items-center justify-center max-h-[24px]  bg-[#FAF9F9] font-Corsa-Grotesk text-[bold] font-[500] text-[16px] text-[#696E7C] "'>
                Date
              </pre>
            </TableCell>
            <TableCell className=" max-h-[24px] justify-center items-center flex flex-col ">
              <pre className="  font-Corsa-Grotesk flex font-[500] text-[16px] text-[#696E7C] max-h-[24px] justify-center align-middle ">
                Transaction Id
              </pre>
            </TableCell>
            <TableCell className="font-[500] max-h-[24px] justify-center align-middle  ">
              <pre className="  font-Corsa-Grotesk  flex font-[500] max-h-[24px] text-[16px] text-[#696E7C] justify-center align-middle  ">
                {` Customer name`}
              </pre>
            </TableCell>
            <TableCell className="  flex justify-center align-middle  max-h-[24px] font-[500] text-[16px] text-[#696E7C]   ">
              <pre className="  font-Corsa-Grotesk flex  justify-center font-[500] text-[16px] text-[#696E7C] ">
                {'Email address '}
              </pre>
            </TableCell>
            <TableCell className=" justify-center  max-h-[24px] tfont-[500] text-[16px] text-[#696E7C]  flex flex-row mr-auto ml-auto align-middle ">
              <pre className="    justify-center font-Corsa-Grotesk font-[500] max-h-[24px] text-[16px] text-[#696E7C] h-[24px]  flex flex-row mr-auto ml-auto align-middle">
                {`Service purchased`}
              </pre>
            </TableCell>
            <TableCell className=" justify-center  max-h-[24px] tfont-[500] text-[16px] text-[#696E7C]  flex flex-row mr-auto ml-auto align-middle ">
              <pre className="  font-Corsa-Grotesk  justify-center  font-[500] max-h-[24px] text-[16px] text-[#696E7C] h-[24px]  flex flex-row mr-auto ml-auto align-middle">
                Amount
              </pre>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transastionTableData.map((transaction) => (
            <TableRow
              className="border-b-2 max-h-[24px] border-b-[#F1F1FF]  border-l-2   border-l-[#F1F1FF] border-r-2   border-r-[#F1F1FF] "
              key={nanoid(4)}
            >
              <TableCell className="bg-[#FAF9F9] max-h-[24px] border-0  border-r-[2px] border-r-[#F1F1F1] ">
                <pre className="  flex items-center justify-center font-Corsa-Grotesk text-[14px] text-[#696E7C] max-h-[24px]">
                  {transaction.date}
                </pre>
              </TableCell>
              <TableCell className="max-h-[24px] bg-[#ffff]">
                <pre className="    max-h-[24px] text-[#696E7C] items-center w-[100px]  py-1 px-2 rounded-2xl font-Corsa-Grotesk">
                  {transaction.Transaction_id}
                </pre>
              </TableCell>
              <TableCell className=" max-h-[24px] bg-[#FAF9F9]   text-[#696E7C] border-0  border-r-[2px] border-r-[#F1F1F1]">
                <pre className="  flex font-Corsa-Grotesk items-center justify-center  max-h-[24px]  text-[#696E7C]">
                  {transaction.Customer_name}
                </pre>
              </TableCell>
              <TableCell className=" max-h-[24px]  bg-[#ffff]  border-0  border-r-[2px] border-r-[#F1F1F1]  justify-between ">
                <div className="flex items-center max-h-[24px] text-[#696E7C] flex-row  justify-evenly gap-3  max-sm:flex-col h-100% ">
                  {transaction.Email_address}
                </div>
              </TableCell>
              <TableCell className=" max-h-[24px]  bg-[#ffff]  border-0  border-r-[2px] border-r-[#F1F1F1]  justify-between ">
                <div className="flex max-h-[24px] items-center text-[#696E7C] flex-row  justify-evenly gap-3  max-sm:flex-col h-100% ">
                  {transaction.Service_purchased}
                </div>
              </TableCell>
              <TableCell className=" max-h-[24px] items-center  bg-[#ffff]  border-0  border-r-[2px] border-r-[#F1F1F1]  justify-between ">
                <div className="flex max-h-[24px] text-[#4B6EFF] flex-row  justify-evenly gap-3 font-[700]  max-sm:flex-col h-100% ">
                  {transaction.Amount}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
