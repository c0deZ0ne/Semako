import React from 'react';
import {  UserSchemeCard } from '../../../utils/interfaces';
import { IAcountSchem } from '../../../redux/interfaces/Ischeme';
function SchemeCard({
  data: { type,schedule,amount,charge,rate}
}: {
  data: IAcountSchem;
}) {
  // console.log("in card",color, title);
 const  color='1AB366';
  return (
    <div
      className={`w-[99%] pt-2 h-[100%] bg-white px-[1rem]  border-b-2 border-solid ${
        color
          ? 'border-[#1AB366]'
          : color == '#901EFF'
          ? 'border-b-[#901EFF]'
          : 'border-b-[#0099FE]'
      }`}
      style={{ boxShadow: '0px 10px 50px 0px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="flex flex-row items-center gap-[12px] ">
        <pre className="w-[110px] h-[24px] text-[16px] text-[#8E929D] leading-[24px] font-Corsa-Grotesk font-[400]">
          {"Active Scheme"}
        </pre>
      </div>
      <div className="flex felx-row justify-between mt-[12px] ">
        <pre className="w-[100%] h-[100%] text-[24px] mt-[20px] text-[#8E929D]  font-Corsa-Grotesk font-[500]">
          {type.toLocaleLowerCase()}
        </pre>
        <div className="flex flex-col gap-2">
          <span className="flex flex-row gap-2">
            <span className={`flex ${
                 'text-[#901EFF]'
              }`}>
                Rate:
              {/* <img src={mountainIcon} alt="icon" srcSet="" /> */}
            </span>
            <span
              className={'text-[#00AA55]'}
            >
              {rate}%
            </span>
          </span>
          <pre className="w-[110px] h-[32px] text-[1rem] text-[#8E929D] leading-[24px] font-Corsa-Grotesk font-[500]">
            {schedule.toLocaleLowerCase()}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default SchemeCard;
