import React from 'react';

function SellBtm(val: string) {
  return (
    <div className="flex flex-row w-[100%]">
      <span className=" mt-auto mb-auto align-middle flex flex-row rounded-lg px-5 py-2 font-normal w-[100%] lg:flex justify-items-center  bg-[#4B6EFF] text-white  h-[100%]  justify-center   ">
        <pre className=" font-Corsa-Grotesk">{val}</pre>
      </span>
    </div>
  );
}

export default SellBtm;
