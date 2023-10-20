import React from 'react';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { userTableDataType } from '../../../utils/interfaces';
import { nanoid } from 'nanoid';

export default function userTable({
  userTabeData
}: {
  userTabeData: userTableDataType[];
}) {
  return (
    <TableContainer className="grid col-span-full  font-[500] text-[16px] text-[#696E7C]  w-[100%] h-[100%] whitespace-nowrap overflow-auto scrollbar-hide  whitespace-nowrap overflow-auto scrollbar-hide">
      <Table
        className="grid grid-cols-6 bor    whitespace-nowrap overflow-auto scrollbar-hide h-[100%] font-[500] text-[16px] text-[#696E7C] whitespace-nowrap overflow-auto scrollbar-hide  "
        style={{ boxShadow: '0px 40px 80px 0px rgba(0, 0, 0, 0.05)' }}
      >
        <TableHead className="grid  max-h-[24px] border-b-2 border-b-[#F1F1FF] tfont-[500] text-[16px] text-[#696E7C] ">
          <TableRow className=" font-[500] text-[16px] text-[#696E7C]  flex bg-[#FAF9F9]   ">
            <TableCell className="h-[24px] font-Corsa-Grotesk text-[bold] font-[500] text-[16px] text-[#696E7C]  border-0 border-r-2 border-r-1 border-r-[#F1F1F1] ">
              <span className='max-h-[24px]  bg-[#FAF9F9] font-Corsa-Grotesk text-[bold] font-[500] text-[16px] text-[#696E7C] "'>
                ID
              </span>
            </TableCell>
            <TableCell className=" max-h-[24px] justify-center items-center flex flex-col ">
              <span className="flex font-[500] text-[16px] text-[#696E7C] max-h-[24px]  px-2">
                Name
              </span>
            </TableCell>
            <TableCell className="font-[500] max-h-[24px] border-0 border-r-2 border-r-1 border-r-[#F1F1F1]">
              <span className="font-[500] max-h-[24px] text-[16px] text-[#696E7C] ">
                Email{' '}
              </span>
            </TableCell>
            <TableCell className=" max-h-[24px] font-[500] text-[16px] text-[#696E7C]   border-0  border-r-[2px] border-r-[#F1F1F1] ">
              <span className="pl-[10%] tfont-[500] text-[16px] text-[#696E7C] ">
                {' '}
                Store name
              </span>
            </TableCell>
            <TableCell className=" max-h-[24px] tfont-[500] text-[16px] text-[#696E7C]  flex flex-row mr-auto ml-auto align-middle ">
              <span className="tfont-[500] max-h-[24px] text-[16px] text-[#696E7C] h-[24px] w-[53px] flex flex-row mr-auto ml-auto align-middle">
                Action
              </span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userTabeData.map((user) => (
            <TableRow
              className="border-b-2 max-h-[24px] border-b-[#F1F1FF]  border-l-2   border-l-[#F1F1FF] border-r-2   border-r-[#F1F1FF] "
              key={nanoid(4)}
            >
              <TableCell className="bg-[#FAF9F9] max-h-[24px] border-0  border-r-[2px] border-r-[#F1F1F1] ">
                <span className="text-[14px] text-[#696E7C] max-h-[24px]">
                  {user.id}
                </span>
              </TableCell>
              <TableCell className="max-h-[24px] bg-[#ffff]">
                <pre className=" max-h-[24px] text-[#696E7C] items-center w-[100px]  py-1 px-2 rounded-2xl font-Corsa-Grotesk">
                  {user.name}
                </pre>
              </TableCell>
              <TableCell className=" max-h-[24px] bg-[#FAF9F9]   text-[#696E7C] border-0  border-r-[2px] border-r-[#F1F1F1]">
                <span className=" max-h-[24px]  text-[#696E7C]">
                  {user.email}
                </span>
              </TableCell>
              <TableCell className=" max-h-[24px]  bg-[#ffff]  border-0  border-r-[2px] border-r-[#F1F1F1]  justify-between ">
                <div className="flex max-h-[24px] text-[#696E7C] flex-row  justify-evenly gap-3  max-sm:flex-col h-100% ">
                  {user.store_name}
                  <pre className="text-[#4B6EFF]  bg-[#F2F5FF] items-center w-[100px]  py-1 px-2 rounded-2xl font-Corsa-Grotesk ">
                    {user.store_type}
                  </pre>
                </div>
              </TableCell>
              <TableCell className=" max-h-[24px] bg-[#ffff] ">
                <div className="flex flex-row justify-around gap-2">
                  <span
                    className="text-[#FCFCFC] w-[ 91px] bg-[#00AA55]  py-1 px-5 rounded-[8px] cursor-pointer hover:opacity-[0.7]"
                    onClick={() =>
                      user.action({
                        id: user.id,
                        action: 'Accept'
                      })
                    }
                  >
                    Accept
                  </span>
                  <span
                    className="text-[#FA3246] w-[ 91px] bg-[#FFEBED]  py-1 px-5 rounded-[8px]"
                    onClick={() =>
                      user.action({
                        id: user.id,
                        action: 'Delete'
                      })
                    }
                  >
                    Delete
                  </span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
