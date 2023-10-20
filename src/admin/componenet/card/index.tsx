import React from 'react';
import { dashboardcard } from '../../../utils/interfaces';
function Card({
  data: { color, title, icon, amaout, mountainIcon, rate, period }
}: {
  data: dashboardcard;
}) {
  return (
    <div
      className={`w-[99%] pt-2 h-[100%] bg-white px-[1rem]  border-b-2 border-solid ${
        color == '#1AB366'
          ? 'border-[#00AA55]'
          : color == '#901EFF'
          ? 'border-b-[#901EFF]'
          : 'border-b-[#0099FE]'
      }`}
      style={{ boxShadow: '0px 10px 50px 0px rgba(0, 0, 0, 0.05)' }}
    >
      <div className="flex flex-row items-center gap-[12px] ">
        <img src={icon} alt="icon" srcSet="" />
        <pre className="w-[110px] h-[24px] text-[16px] text-[#8E929D] leading-[24px] font-Corsa-Grotesk font-[400]">
          {title}
        </pre>
      </div>
      <div className="flex felx-row justify-between mt-[12px] ">
        <pre className="w-[100%] h-[100%] text-[24px] mt-[20px] text-[#8E929D]  font-Corsa-Grotesk font-[500]">
          {amaout}
        </pre>
        <div className="flex flex-col gap-2">
          <span className="flex flex-row gap-2">
            <span className="flex">
              <img src={mountainIcon} alt="icon" srcSet="" />
            </span>
            <span
              className={`${
                color == '#901EFF' ? 'text-[#F94D53]' : 'text-[#00AA55]'
              }`}
            >
              {rate}
            </span>
          </span>
          <pre className="w-[110px] h-[32px] text-[1rem] text-[#8E929D] leading-[24px] font-Corsa-Grotesk font-[500]">
            {period}
          </pre>
        </div>
      </div>
    </div>
  );
}

export default Card;
