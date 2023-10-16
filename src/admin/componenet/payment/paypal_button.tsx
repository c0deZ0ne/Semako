import React from 'react';
import paypal_loggo from '../../../assets/PayPal_Logo.png';
export default function paypal_button() {
  return (
    <div className=" flex flex-col w-[100%] h-[100%] bg-[#FFA500] py-[10px] items-center justify-center align-middle  rounded-md">
      <span className=" flex flex-col w-[79.25px] h-[21px] ">
        <img
          className="w-[100%] h-[100%] "
          src={paypal_loggo}
          alt=""
          srcSet=""
        />
      </span>
    </div>
  );
}
