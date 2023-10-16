import React from 'react';
import TotalReview from './totalReview';
import UserRating from './userRating';
import { Divider } from '@mui/material';
import RatingChart from './RatingChart';

function ratingReview() {
  return (
    <>
      <div className="flex flex-col w-[100%]">
        <div className="flex w-[100%] mb-10 gap-20 p-[16px]  relative flex-row justify-center align-middle md:gap-[10%] mt-10 max-sm:flex-col">
          <TotalReview
            rate={'60%'}
            type={'up'}
            title={'Total Reviews'}
            value={'10.0k'}
            description={'Growth in reviews this year'}
          />
          <Divider orientation="vertical" className="hidden md:flex " />
          <UserRating
            rate={'60%'}
            type={'up'}
            title={'Average ratings'}
            value={'5.0'}
            description={'Average ratings this year'}
          />
        </div>
        <hr className="h-[1px] hidden md:flex  px-[16px]  max-sm:mt-[50px] mr-auto ml-auto w-[80%] max-sm:w-[96%] justify-self-center  max-sm:flex  bg-[#F1F1F1]" />
        <section className="flex flex-col justify-center items-center align-middle mt-[26px]  ">
          <div className="flex flex-col max-sm:w-[100%] px-[16px] md:w-[300px] relative">
            <RatingChart
              props={{
                className: 'bg-[#4B6EFF] h-[4px] p-[4px] w-[100%]  rounded-lg'
              }}
              rating={5}
              value="3.0K"
              color={''}
            />
            <RatingChart
              props={{
                className: 'bg-[#A64BFF] h-[4px] p-[4px] w-[60%]  rounded-lg'
              }}
              rating={4}
              value="2.0K"
              color={''}
            />
            <RatingChart
              props={{
                className: 'bg-[#FFB733] h-[4px] p-[4px] w-[40%]  rounded-lg'
              }}
              rating={3}
              value="500"
              color={''}
            />
            <RatingChart
              props={{
                className: 'bg-[#33ADFE] h-[4px] p-[4px] w-[20%]  rounded-lg'
              }}
              rating={2}
              value="200"
              color={''}
            />
            <RatingChart
              props={{
                className: 'bg-red-500 h-[4px] p-[4px] w-[10%] rounded-lg'
              }}
              rating={1}
              value="0"
              color={''}
            />
          </div>
        </section>
      </div>
    </>
  );
}

export default ratingReview;
