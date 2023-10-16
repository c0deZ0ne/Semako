import React from 'react';
import { chartmapType } from '../../../../utils/interfaces';

function ChartMap({ data }: { data: chartmapType }) {
  return (
    <div className="flex flex-row right-[10%]  mb-10   items-end ">
      <div className="flex flex-row">
        <span className="flex w-[100px] text-[#000000] bg-[#ffff] h-[25px] flex-row items-center border border-[#F1F1F1] border-solid   justify-evenly rounded-md mx-2">
          <span className={`${data.color} w-4 h-4 rounded-2xl px-2 `}></span>
          <span className="h-[18px] flex text-[12px] font-Corsa-Grotesk ">
            {data.title}
          </span>
        </span>
      </div>
    </div>
  );
}

export default ChartMap;
