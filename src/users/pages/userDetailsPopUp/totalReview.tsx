import React from 'react';
import green_mountain from '../../../assets/green_mountain.svg';
import red_mountain from '../../../assets/red_mountain.svg';
function TotalReview({ rate, title, type, value, description }: any) {
  return (
    <div className="flex flex-col gap-2  text-[12px] text-[#8E929D]  ">
      <pre className="w-[110px] h-[32px]   text-[#8E929D] leading-[24px] font-Corsa-Grotesk font-[500]">
        {title}
      </pre>
      <div className="flex flex-row gap-[20px] items-center">
        <span className=" font-[700] text-[12px] ">{value}</span>
        <div
          className={`${
            type == 'up' ? 'bg-[#E6F7EE]' : 'bg-[#FA5F64]'
          } w-[60px]   flex  flex-row rounded-full justify-center items-center align-middle  `}
        >
          <img
            src={type == 'up' ? green_mountain : red_mountain}
            alt="icon"
            srcSet=""
            className="flex"
          />
          {/* </span> */}
          <span
            className={`${
              type == 'up' ? 'text-[#00AA55]' : 'text-[#F94D53]'
            }  `}
          >
            {rate}
          </span>
        </div>
      </div>
      <span>{description}</span>{' '}
    </div>
  );
}

export default TotalReview;
