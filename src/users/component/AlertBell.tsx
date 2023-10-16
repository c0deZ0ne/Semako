import React from 'react';
import { bellNotification } from '../../assets/icon';

function AlertBell(val: number) {
  return (
    <div className=" bg-[#F6F6F7] w-[40px] h-[40px] rounded-full flex col items-center justify-center mt-auto mb-auto  ">
      <span className="flex ">{bellNotification()}</span>
      <span className=" absolute ml-[18px] mt-[1px] bg-[#FA3246] w-[15px] h-[15px] text-xs   flex flex-col text-white font-[500] items-center rounded-full">
        {val}
      </span>
    </div>
  );
}

export default AlertBell;
