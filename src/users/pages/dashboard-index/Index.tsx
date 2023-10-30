import React, { Fragment, useEffect, useMemo, useState, } from 'react';
import { Tab } from '@headlessui/react';
import { nanoid } from 'nanoid';
import Search from '../../component/innserSerachBox';
import { Cards, actions, periods, schemeCards,  userTabeData } from '../../user-constants';

import Card from '../../component/card';
import { dashboardcard,UserSchemeCard } from '../../../utils/interfaces';
import UserTable from './useTable';
import SearchBox from '../../component/seachBox';
import ToggleAction from './toggleAction';
import Chart from './chart/chart';
import SchemeCard from '../../component/scheme-card';
import { useSelector } from 'react-redux';
import { CombinedState } from 'redux';
import { combinedState } from '../../../redux/reducers';
import { useDispatch } from 'react-redux';
import { SubscribeScheme } from '../../../redux/actions-creators/schemesActions';
import { IAcountSchem, shemeType } from '../../../redux/interfaces/Ischeme';
import toast from 'react-hot-toast';
import schedule from "node-schedule"
import { debitAccount } from '../../../redux/actions-creators/transactionActions';
import { shedulePay } from '../../../utils';

function DashboardIndex() {
  const [data, setData] = useState('Last 24Hours');
  const {transactions,AccountBallance} = useSelector((state:CombinedState<combinedState>) =>state.transaction);
  const user = useSelector((state:CombinedState<combinedState>) =>state.auth.user);

  const schemes = useSelector((state:CombinedState<combinedState>) =>state.scheme);
  const activeScheme = schemes.find((s)=>(s.isActive===true))
const dispatch = useDispatch()
 
  useEffect(() => {
    if(activeScheme&&activeScheme.isActive&&user){
      shedulePay(activeScheme.schedule,dispatch(debitAccount({
        title: "admin charge",
        email: user?.email,
        id: nanoid(6),
        date: new Date(),
        type: 'debite',
        amount: activeScheme?.charge
      })))
    }
  }, [activeScheme?.amount]);

  const handleChangeScheme = (e:any)=>{
    dispatch(SubscribeScheme(e.target.value))
  }
  const tabs = ['Last 24hours', 'Last week', 'Last month', 'Last year'];

  const hadlechange = (index: any) => {
    setData(tabs[index]);
  };

  const handleTogle = (data: any) => {
    console.log(data);
  };


  const action = (actionType: any) => {
    console.log(actionType);
  };
  const cad = useMemo(() => Cards, [Cards]);
  return (
    <div className="w-[100%] h-[150vh] max-sm:mt-10  flex-col pt-[10px] max-sm:px-[2%] lg:px-10 ">
      <div className=" w-[100%] whitespace-nowrap overflow-auto scrollbar-hide gap-5 grid grid-cols-12 max-sm:flex max-sm:flex-col max-sm:gap-10 align-top h-[100%] whitespace-nowrap overflow-auto scrollbar-hide ">
        <Tab.Group manual onChange={hadlechange}>
          <div
            className="flex flex-col col-span-12  max-sm-gap-10 whitespace-nowrap overflow-auto scrollbar-hide"
            style={{ boxShadow: '0px 40px 80px 0px rgba(0, 0, 0, 0.05)' }}
          >
            <div className="flex w-[100%] md:h-[48px] justify-between items-center col-span-12 max-sm:flex-col max-sm:gap-10  ">
              <div className=" w-[100%] flex  col-span-7 relative justify-end whitespace-nowrap overflow-auto scrollbar-hide whitespace-nowrap overflow-auto scrollbar-hide ">
                <Tab.List
                  className={
                    'text-[#565C6B] font-[400] flex-row w-[100%]   items-center  h-[40px]   text-[14px] flex   font-Corsa-Grotesk  whitespace-nowrap overflow-auto scrollbar-hide'
                  }
                >
                  {tabs.map((tab) => (
                    <Tab as={Fragment} key={nanoid(5)}>
                      {({ selected }) => (
                        <pre
                          className={` py-2 px-2 m-2 cursor-pointer md:px-3 font-Corsa-Grotesk text-[14px]  ${
                            selected
                              ? ' outline-none  border-b border-solid border-[#4B6EFF] text-[#4B6EFF]  '
                              : null
                          }`}
                        >
                          {tab}
                        </pre>
                      )}
                    </Tab>
                  ))}
                </Tab.List>
              </div>
              <div className=" max-sm:w-[100%]  object-cover flex  max-sm:mx-[2%] ">
                <>
                <select name="" id=""  onChange={(e)=>handleChangeScheme(e)}>
                  {schemes.map((scheme)=>(<option selected={scheme.isActive} value={scheme.id}>{scheme.schedule.toLocaleLowerCase()}</option>))}
                </select>
              
                </>
              </div>
            </div>
            <div className="flex whitespace-nowrap overflow-auto scrollbar-hide mt-10  lg:flex-row gap-5 col-span-12 w-[100%] max-md:flex-col whitespace-nowrap overflow-auto scrollbar-hide ">
              {cad.map((data: dashboardcard) => (
                <Card data={data} key={nanoid(4)} AccountBallance={AccountBallance} />
              ))}
              {activeScheme?(<SchemeCard data={activeScheme} />):"Select a Scheme"}
            </div>
          </div>
          <Tab.Panels
            className={
              '  gap-5  grid grid-cols-12 col-span-12 w-[100%]  bg-white  mt-5 max-sm:overflow-auto  max-sm:p-2 max-sm:justify-center whitespace-nowrap overflow-auto scrollbar-hide '
            }
          >
            <div className=" h-[500px] relative  w-[100%] col-span-12 border rounded-lg border-1 border-[#F1F1F1] whitespace-nowrap overflow-auto scrollbar-hide whitespace-nowrap overflow-auto scrollbar-hide">
              <div className="  flex   w-[100%] justify-center col-span-12 flex-col h-[64px] border-b-[1px]   ">
                <span className="flex text-[#565C6B] font-Corsa-Grotesk font-[500] ml-[20px] ">
                Account History
                </span>
              </div>
              <div className=" grid col-span-12 grid-cols-12 max-sm:gap-5 gap-10 md:px-[24px] ">
                <div className="flex w-[100%]   justify-between  max-sm:w-[100%] max-sm:mt-[10px] md:mt-[24px] max-sm:flex max-sm:flex-col max-sm:h-[100%] h-[40px]   col-span-12 ">
                  <div className=" text-[#696E7C] rounded-2xl ml-2 max-sm:gap-1 max-sm:mb-5  max-w-[300px] items-center justify-center align-middle bg-[#F1F1F180] relative col-span-10  max-sm:w-[100%] max-md:w-[100%]  grid grid-cols-3 max-lg:w-[100%]">
                    <ToggleAction callback={handleTogle} data={actions} />
                  </div>
                  <div className=" md:w-[300px] w-[307px]   md:ml-5 max-sm:ml-2  sm:justify-center col-span-6  flex  max-sm:mt-5 max-sm:mb-5">
                    <SearchBox placeholder="Search name,email or ID" />
                  </div>
                </div>

                <div className="bg-white h-[100%] row-span-5  whitespace-nowrap overflow-auto scrollbar-hide max-sm:col-span-12 lg:col-span-12   flex flex-com  items-stretch md:col-span-12  max-md:col-span-12  w-[100%] z-[1000] whitespace-nowrap overflow-auto scrollbar-hide">
                  <UserTable accountHistoryData={transactions} />
                </div>
              </div>
            </div>

            <div className=" relative col-span-12 row-span-6 h-[600px] border pt-[24px] whitespace-nowrap overflow-auto scrollbar-hide grid grid-cols-12 whitespace-nowrap overflow-auto scrollbar-hide ">
              <div className="w-[100%] row-span-1 object-contain  max-sm:items-start max-sm:justify-center    col-span-12  flex  max-sm:flex-col gap-5 flex-row  justify-between  max-sm:px-[3%] md:px-[16px] relative ">
                <div className="flex flex-col gap-5">
                  <span className="text-[#565C6B] w-[129px] h-[24px] font-Corsa-Grotesk font-[400] text-[16px]">
                    Revenue Growth
                  </span>

                  <pre className="w-[391px] flex text-[#565C6B]  h-[24px] font-Corsa-Grotesk font-[400] text-[12px]">
                    of the week compared between service charge, earnings and deductions
                  </pre>
                </div>
                <div className=" text-[#696E7C] h-[40px] rounded-2xl max-sm:gap-1 max-sm:mb-5 max-w-[238px] items-center justify-center align-middle bg-[#F1F1F180] relative col-span-10  max-sm:w-[100%] max-md:w-[100%] max-sm:w-100% grid grid-cols-3 max-lg:w-[100%]">
                  <ToggleAction callback={handleTogle} data={periods} />
                </div>
              </div>

              <div className="relative col-span-12 row-span-5 flex  w-[100%] h-[400px] whitespace-nowrap overflow-auto scrollbar-hide flex-col whitespace-nowrap overflow-auto scrollbar-hide">
                <div className="relativet flex min-w-[1024px] h-[500px] flex-col mt-10">
                  <Chart />
                </div>
              </div>
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default DashboardIndex;
