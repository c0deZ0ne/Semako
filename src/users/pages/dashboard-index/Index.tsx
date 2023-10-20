import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Tab } from '@headlessui/react';
import { nanoid } from 'nanoid';
import Search from '../../component/innserSerachBox';
import { Cards, actions, periods, userTabeData } from '../../constants';

import Card from '../../component/card';
import { dashboardcard } from '../../../utils/interfaces';
import UserTable from './useTable';
import SearchBox from '../../component/seachBox';
import ToggleAction from './toggleAction';
import Chart from './chart/chart';
import AppMenu from '../../component/Menu';
import filterBy_large from '../../../assets/filterBy_large.svg';

function DashboardIndex() {
  const [data, setData] = useState('Last 24Hours');
  useEffect(() => {
    console.log(data);
  }, [data]);

  const tabs = ['Last 24hours', 'Last week', 'Last month', 'Last year'];

  const hadlechange = (index: any) => {
    setData(tabs[index]);
  };

  const handleTogle = (data: any) => {
    console.log(data);
  };

  const fillterBy_data = [
    { title: 'Month', menuIcon: null },
    { title: '  Day', menuIcon: null },
    { title: '  Year', menuIcon: null }
  ];
  const action = (actionType: any) => {
    console.log(actionType);
  };
  const cad = useMemo(() => Cards, [Cards]);
  return (
    <div className="w-[100%] h-[150vh] max-sm:mt-10  flex-col pt-[10px] max-sm:px-[2%] lg:px-10 ">
      <div className=" w-[100%] overflow-y-auto gap-5 grid grid-cols-12 max-sm:flex max-sm:flex-col max-sm:gap-10 align-top h-[100%] ">
        <Tab.Group manual onChange={hadlechange}>
          <div
            className="flex flex-col col-span-12  max-sm-gap-10"
            style={{ boxShadow: '0px 40px 80px 0px rgba(0, 0, 0, 0.05)' }}
          >
            <div className="flex w-[100%] md:h-[48px] justify-between items-center col-span-12 max-sm:flex-col max-sm:gap-10  ">
              <div className=" w-[100%] flex  col-span-7 relative justify-end overflow-x-auto  ">
                <Tab.List
                  className={
                    'text-[#565C6B] font-[400] flex-row w-[100%]   items-center  h-[40px]   text-[14px] flex   font-Corsa-Grotesk '
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
                  <AppMenu
                    menus={fillterBy_data}
                    handleBar={filterBy_large}
                    position={{
                      className:
                        ' absolute  h-[100%] w-[95%] rounded-md max-sm:left-[20%] mt-2 '
                    }}
                    props={{
                      onClick: action,
                      className: `{group text-[#565C6B] bg-white border-none w-[100%] outline-none flex w-full items-center rounded-md p-2 m-2 text-sm hover:bg-[#00AA55] hover:text-white`
                    }}
                  />
                </>
              </div>
            </div>
            <div className="flex overflow-x-auto mt-10  lg:flex-row gap-5 col-span-12 w-[100%] max-md:flex-col ">
              {cad.map((data: dashboardcard) => (
                <Card data={data} key={nanoid(4)} />
              ))}
            </div>
          </div>
          <Tab.Panels
            className={
              '  gap-5  grid grid-cols-12 col-span-12 w-[100%]  bg-white  mt-5 max-sm:overflow-auto  max-sm:p-2 max-sm:justify-center '
            }
          >
            <div className=" h-[500px] relative  w-[100%] col-span-12 border rounded-lg border-1 border-[#F1F1F1] overflow-y-auto">
              <div className="  flex   w-[100%] justify-center col-span-12 flex-col h-[64px] border-b-[1px]   ">
                <span className="flex text-[#565C6B] font-Corsa-Grotesk font-[500] ml-[20px] ">
                  Customer Profile
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

                <div className="bg-white h-[100%] row-span-5  overflow-y-auto max-sm:col-span-12 lg:col-span-12   flex flex-com  items-stretch md:col-span-12  max-md:col-span-12  w-[100%] z-[1000]">
                  <UserTable userTabeData={userTabeData} />
                </div>
              </div>
            </div>

            <div className=" relative col-span-12 row-span-6 h-[600px] border pt-[24px] overflow-x-auto grid grid-cols-12 ">
              <div className="w-[100%] row-span-1 object-contain  max-sm:items-start max-sm:justify-center    col-span-12  flex  max-sm:flex-col gap-5 flex-row  justify-between  max-sm:px-[3%] md:px-[16px] relative ">
                <div className="flex flex-col gap-5">
                  <span className="text-[#565C6B] w-[129px] h-[24px] font-Corsa-Grotesk font-[400] text-[16px]">
                    Revenue Growth
                  </span>

                  <pre className="w-[391px] flex text-[#565C6B]  h-[24px] font-Corsa-Grotesk font-[400] text-[12px]">
                    of the week compared between domain E-commerce and websites
                  </pre>
                </div>
                <div className=" text-[#696E7C] h-[40px] rounded-2xl max-sm:gap-1 max-sm:mb-5 max-w-[238px] items-center justify-center align-middle bg-[#F1F1F180] relative col-span-10  max-sm:w-[100%] max-md:w-[100%] max-sm:w-100% grid grid-cols-3 max-lg:w-[100%]">
                  <ToggleAction callback={handleTogle} data={periods} />
                </div>
              </div>

              <div className="relative col-span-12 row-span-5 flex  w-[100%] h-[400px] overflow-x-auto flex-col ">
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
