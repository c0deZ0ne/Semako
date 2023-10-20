import Divider from '@mui/material/Divider';
import React, { useState } from 'react';
import { onlineStatus } from '../../../assets/icon';
import { nanoid } from 'nanoid';
const reviews = [
  { title: 'A new login attempt was made', date: 'Friday 06,April 2023' },
  { title: 'A new login attempt was made', date: 'Friday 06,April 2023' },
  { title: 'A new login attempt was made', date: 'Friday 06,April 2023' },
  { title: 'A new login attempt was made', date: 'Friday 06,April 2023' },
  { title: 'A new login attempt was made', date: 'Friday 06,April 2023' },
  { title: 'A new login attempt was made', date: 'Friday 06,April 2023' },
  { title: 'A new login attempt was made', date: 'Friday 06,April 2023' },
  { title: 'A new login attempt was made', date: 'Friday 06,April 2023' }
];
function recentActivity() {
  const [viewAll, setViewAll] = useState(false);
  const [semore, setSemore] = useState('See More');
  const [display, setDisplay] = useState<any>(reviews);

  const togleViewAll = () => {
    setViewAll(true);
  };
  const handleSeeMore = () => {
    setSemore('See Less');
    setViewAll((cur) => !cur);
  };

  return (
    <>
      <section className="flex flex-col relative  rounded-lg w-[100%] h-[400px] border border-[#F1F1F1] align-middle ">
        <span className="flex flex-row md:w-[100%] font-[500] pt-[32px] px-[24px]  mb-[18px] w-[100%] font-Corsa-Grotesk  text-[16px]  md:items-center  text-[#000000] ">
          Reviews
        </span>
        <Divider />

        <div
          className={`flex  flex-col px-[16px] max-sm:mt-[20px]  align-middle  overflow-hidden items-center  text-[12px] w-[100%]  justify-between  mt-2   ${
            !viewAll ? 'whitespace-nowrap overflow-auto scrollbar-hide h-[80%] ' : ''
          }px-[16px]`}
        >
          {display.map((review: any) => (
            <>
              <div
                key={nanoid(5)}
                className="flex flex-col my-[16px] max-sm:gap-[8px]  md:flex-row mb-[10px] w-[100%] justify-between  "
              >
                <div className="flex max-sm:mb-[8px] gap-[8px] flex-row items-center  align-middle md:w-[279px] max-sm:[100%]">
                  <span>{onlineStatus('#00AA55')}</span>
                  <span className="text-[#434A5B]">{review.title}</span>
                </div>
                <span className="text-[#A1A5AD]">{review.date}</span>
              </div>
              <Divider className="w-[100%]  " />
            </>
          ))}

          <span
            onClick={() => handleSeeMore()}
            className="w-[100px] py-10 max-sm:-[90%] top-[100%] justify-center justify-self-center  mr-auto ml-auto absolute   text-[#4B6EFF]  hover:cursor-pointer flex"
          >
            {viewAll ? 'See More' : 'See Less'}
          </span>
        </div>
      </section>
    </>
  );
}

export default recentActivity;
