import React from 'react';
import { downArrow as DownArrow } from '../../assets/icon';
function innserSerachBox() {
  return (
    <div className=" w-[100%]  relative  justify-self-center mt-auto mb-auto  flex flex-1 items-center flex-row justify-between ">
      <input
        type="text"
        className=" w-[100%] bg-[#F1F1F166]  flex  absolute pl-[10px] pr-[32px] text-[12px]  h-[48px] text-gray-400 rounded-[8px] border-none focus:outline-none  "
        placeholder="Filter by date range"
      />
      <span className=" flex absolute z-40   right-[5%] ">
        <DownArrow />
      </span>
    </div>
  );
}

export default innserSerachBox;
