import React from 'react';
import { chartmapType } from '../../utils/interfaces';

function statusButton({
  data,
  callBack
}: {
  data: chartmapType;
  callBack: Function | any;
}) {
  return (
    <div className="flex flex-row w-[100%]  items-end " onClick={callBack}>
      <div className="flex flex-row w-[100%] ">
        <span className="flex w-[100%] h-[100%] justify-start flex-row items-center   rounded-md ">
          <span
            className={`${data.color} w-4 h-4 rounded-2xl px-2  mx-[8px]`}
          ></span>
          <span className="h-[18px] flex text-[12px] font-Corsa-Grotesk ">
            {data.title}
          </span>
        </span>
      </div>
    </div>
  );
}

export default statusButton;
