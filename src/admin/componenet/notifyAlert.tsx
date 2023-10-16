import React from 'react';

function notifyAlert(value: number | null | string, color?: string) {
  return (
    <span
      className={`${
        color ? color : 'bg-red-500'
      } w-6 h-6 text-[13px] font-bold flex flex-col text-white justify-center items-center rounded-full`}
    >
      {value}
    </span>
  );
}

export default notifyAlert;
