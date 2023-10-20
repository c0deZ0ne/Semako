import React, { SyntheticEvent } from 'react';

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { userTableDataType } from '../../../utils/interfaces';
import moreIcon from '../../../assets/more.svg';
import { nanoid } from 'nanoid';
import EyeIcon from '@heroicons/react/20/solid/EyeIcon';
import TrashIcon from '@heroicons/react/20/solid/TrashIcon';
import Menu from '../../componenet/Menu';

import { Fragment, useContext } from 'react';
import { ModalContext } from '../../../hooks/modal-context';
import { IappModal } from '../../../utils/interfaces';
import UserDetailsPopUp from '../userDetailsPopUp/userDetailsPopUp';
import { useSelector, useDispatch } from 'react-redux';
import { CombinedState } from 'redux';
import { closeModal, openModal } from '../../../redux/actions-creators/modalActions';
import { combinedState } from '../../../redux/reducers';

export default function customerTable({
  userTabeData
}: {
  userTabeData: userTableDataType[];
}) {
  const hadletableData = (data: any) => {
    console.log('table', data);
  };

  // const { openModal, setComponent } = useContext(ModalContext) as IappModal;
  const {status,element} = useSelector((state:CombinedState<combinedState>) =>state.modal);
  const dispatch = useDispatch();
const haddleClose = ()=>{
  return  dispatch(closeModal())
}
// openModal
  const menus = [
    { title: ' View Customer Details', menuIcon: EyeIcon, action: 'view' },
    { title: '  Delete', menuIcon: TrashIcon, action: 'delete' }
  ];
  const displayIcon = moreIcon;
  const action = ({
    actionType,
    data
  }: {
    actionType: SyntheticEvent;
    data: any;
  }) => {
    const userOption = actionType.currentTarget.attributes
      .getNamedItem('value')
      ?.value.toString();
    if (userOption == 'view') {
      dispatch(openModal({element: (<UserDetailsPopUp details={data} />)}));
    } else {
      return null;
    }
  };

  return (
    <TableContainer className="grid col-span-full my-[24px]  font-[500] text-[16px] text-[#696E7C]  w-[100%] h-[100%] overflow-y-auto ">
      <Table
        className="grid grid-cols-6   h-[100%] font-[500] text-[16px] text-[#696E7C]  bg-white  "
        style={{ boxShadow: '0px 40px 80px 0px rgba(0, 0, 0, 0.05)' }}
      >
        <TableHead className="grid  max-h-[24px] border-b-2 border-b-[#F1F1FF] font-[500] text-[16px] text-[#696E7C] ">
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
              <TableCell className=" max-h-[24px] bg-[#ffff]  ">
                <Menu
                  menus={menus}
                  handleBar={displayIcon}
                  position={{
                    className:
                      'bg-white absolute flex flex-col w-[200px] right-[50%]'
                  }}
                  props={{
                    onClick: (eventVal: SyntheticEvent) => {
                      action({ actionType: eventVal, data: user });
                    },
                    className: `{group flex w-[100%] text-[12px] text-[#696E7C] flex flex-row  rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-white`
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
