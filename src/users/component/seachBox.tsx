import React from 'react';
import { searchIcon } from '../../assets/icon';
function seachBox({ placeholder }: { placeholder?: any }) {
  return (
    <div className="relative flex w-[100%] h-[100%] items-center ">
      <span className="flex  pl-2 z-40 ">{searchIcon()}</span>
      <input
        type="text"
        className=" w-[100%] bg-[#F6F6F7] absolute pl-[40px] text-[12px]  flex-1 h-[48px] text-gray-400 rounded-[8px] border-none focus:outline-none  "
        placeholder={
          placeholder
            ? placeholder
            : 'Search thousands of website & bussinesses'
        }
      />
    </div>
  );
}

export default seachBox;
