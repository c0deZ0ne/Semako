import React, { Fragment, useEffect, useMemo, useState } from 'react';
import { Tab } from '@headlessui/react';
import { nanoid } from 'nanoid';
import { Cards, customerAction, userTabeData } from '../../user-constants';

import Card from '../../component/card';
import SearchBox from '../../component/seachBox';
import ToggleAction from '../dashboard-index/toggleAction';
import CustomerTable from './customerTable';
import Pagination from './pagination';
import filterBy from '../../../assets/filterby.svg';
import filterBy_large from '../../../assets/filterBy_large.svg';
import AppMenu from '../../component/Menu';
function customer() {
  const [data, setData] = useState('Last 24Hours');

  useEffect(() => {
    console.log(data);
    // make request for new data here
  }, [data]);

  const tabs = ['Last 24hours', 'Last week', 'Last month', 'Last year'];

  const hadlechange = (index: any) => {
    setData(tabs[index]);
  };

  const handleTogle = (data: any) => {
    console.log(data);
  };

  const cad = useMemo(() => Cards, [Cards]);

  const customersDetails = cad.find((index) => {
    console.log(index);
    return index.title == 'Total Customers';
  });

  const onPageChange = (data: any) => {
    console.log('page chnage', data);
  };

  const menus = [
    { title: ' E-commerce', menuIcon: null },
    { title: '  Domains', menuIcon: null },
    { title: '  Websites', menuIcon: null }
  ];

  const fillterBy_data = [
    { title: 'Month', menuIcon: null },
    { title: '  Day', menuIcon: null },
    { title: '  Year', menuIcon: null }
  ];
  const action = (actionType: any) => {
    console.log(actionType);
  };

  return (
    <div className="w-[100%] h-[100vh] max-sm:mt-10  flex-col pt-[10px] max-sm:px-[2%] lg:px-10 ">
      <div className=" w-[100%]  gap-5 grid grid-cols-12 max-sm:flex max-sm:flex-col max-sm:gap-10 align-top h-[100vh] ">
        <Tab.Group manual onChange={hadlechange}>
          <div className="flex flex-col col-span-12  max-sm-gap-10">
            <div className="flex w-[100%] md:h-[48px] justify-between items-center col-span-12 max-sm:flex-col max-sm:gap-10  ">
              <div className=" w-[100%] flex  col-span-7 relative justify-end whitespace-nowrap overflow-auto scrollbar-hide whitespace-nowrap overflow-auto scrollbar-hide ">
                <Tab.List
                  className={
                    'text-[#565C6B] font-[400] flex-row w-[100%]   items-center  h-[40px]   text-[14px] flex   font-Corsa-Grotesk '
                  }
                >
                  {tabs.map((tab) => (
                    <Tab as={Fragment} key={nanoid(5)}>
                      {({ selected }) => (
                        <pre
                        key={nanoid(5)}
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
                      className: `{group text-[#565C6B] bg-white border-none w-[100%] outline-none flex w-full items-center rounded-md p-2 m-2 text-sm hover:bg-[#901EFF] hover:text-white`
                    }}
                  />
                </>
              </div>
            </div>
            <div
              className="flex  whitespace-nowrap overflow-auto scrollbar-hide mt-10  lg:flex-row gap-5 col-span-12 w-[100%] max-md:flex-col  "
              style={{ boxShadow: '0px 40px 80px 0px rgba(0, 0, 0, 0.05)' }}
            >
              {customersDetails && <Card data={customersDetails} />}
            </div>
          </div>

          <Tab.Panels
            className={
              ' grid grid-cols-12 col-span-12 w-[100%]  max-sm:overflow-auto  max-sm:p-2 max-sm:justify-center '
            }
          >
            <div className=" h-[500px] relative  w-[100%] col-span-12 border rounded-lg border-1 border-[#F1F1F1] whitespace-nowrap overflow-auto scrollbar-hide whitespace-nowrap overflow-auto scrollbar-hide">
              <div className=" relative max-sm:h-[68px] md:h-[100px] md:px-[24px] flex flex-col align-middle items-center border-r-0 border-t-0 border-l-0 border border-b-1  ">
                <div className=" font-[500] hidden max-sm:flex w-[100%] h-[100%] text-[#565C6B] font-Corsa-Grotesk mt-[20px] ml-[18px]">{`Customers Profile`}</div>
                <div className="flex w-[100%] gap-5   max-md:absolute max-sm:top-[60px]  justify-between  max-sm:w-[100%] max-sm:mt-[10px] max-sm:py-[10px]  md:mt-[24px] max-sm:flex max-sm:flex-col max-sm:h-[100%] h-[40px] md:items-center md:align-middle   col-span-12 ">
                  <div className=" max-w-[150px] ml-2  text-[#696E7C] h-[45px] rounded-2xl max-sm:gap-1  items-center justify-center align-middle bg-[#F1F1F180] relative col-span-10  max-sm:w-[100%] max-md:w-[100%] max-sm:w-100% grid grid-cols-3 max-lg:w-[100%]">
                    <ToggleAction
                      callback={handleTogle}
                      data={customerAction}
                    />
                  </div>

                  <div className="max-sm:w-[100px] max-sm:flex-col flex-row max-sm:gap-5 md:gap-10 relative flex md:col-span-7 md:w-[100%]   max-sm:justify-start justify-end  align-middle  max-sm:mt-[20px] max-sm:mx-[2%] md:right-[0%] ">
                    <div className=" md:w-[300px] w-[307px]   sm:justify-center col-span-5 flex-row  flex max-sm:my-1">
                      <SearchBox placeholder="Search name,email or ID" />
                    </div>
                    <AppMenu
                      menus={menus}
                      handleBar={filterBy}
                      position={{
                        className:
                          'bg-white absolute w-[200px] max-sm:left-[20%] mt-2 md:right-[20%]'
                      }}
                      props={{
                        onClick: action,
                        className: `{group text-[#565C6B] border-none outline-none flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-white`
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className=" grid col-span-12 grid-cols-12 max-sm:gap-10 gap-10 md:px-[24px] max-sm:mt-[200px] ">
                <div className=" h-[100%] row-span-5 flex-col  whitespace-nowrap overflow-auto scrollbar-hide max-sm:col-span-12 lg:col-span-12   flex flex-com  items-stretch md:col-span-12  w-[100%] whitespace-nowrap overflow-auto scrollbar-hide ">
                  <CustomerTable userTabeData={userTabeData} />
                </div>
              </div>
              <div className="  w-[100%] justify-center items-center align-middle h-[12%] md:my-5 ">
                <Pagination
                  totalItems={100}
                  itemsPerPage={10}
                  onPageChange={onPageChange}
                  currentPage={1}
                />
              </div>
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default customer;
