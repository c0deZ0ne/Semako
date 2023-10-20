import React from 'react';
import green_mountain from '../../assets/green_mountain.svg';
import red_mountain from '../../assets/red_mountain.svg';
import { ratingStar } from '../../../assets/icon';
ratingStar;
function UserRating({ rate, title, type, value, description }: any) {
  const val = parseInt(value);
  let userStars = [];
  for (let i = 0; i < 5; i++) {
    if (i < val) {
      userStars.push(ratingStar('#FFA500'));
    } else {
      userStars.push(ratingStar());
    }
  }
  return (
    <div className="flex flex-col gap-2  text-[12px] text-[#8E929D]  ">
      <pre className="w-[110px] h-[32px]   text-[#8E929D] leading-[24px] font-Corsa-Grotesk font-[500]">
        {title}
      </pre>
      <div className="flex flex-row gap-[20px] items-center">
        <span className=" font-[700] text-[12px] ">{value}</span>

        <div
          className={`w-[94px]   flex  flex-row rounded-full justify-center items-center align-middle  `}
        >
          <span className="flex flex-row">{userStars}</span>
        </div>
      </div>
      <span>{description}</span>{' '}
    </div>
  );
}

export default UserRating;
