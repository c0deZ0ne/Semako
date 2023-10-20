import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../component/Button';
import Paypal_button from '../../component/payment/paypal_button';
const payment: FC = () => {
  return (
    <>
      <div className="flex md:h-screen  items-top  justify-center text-[12px] pt-10 ">
        <div className=" max-sm:w-[100%] md:w-[426px] md:pl-6 md:pr-6 items-center justify-center ">
          <div className="bg-white md:shadow-2xl rounded md:w-[100%] sm:w-[100%] sm: px-[5%] items-center justify-center p-8">
            <div className="flex flex-col justify-center align-center ">
              <Paypal_button />
            </div>
            <div className="inline-flex relative my-[33px] items-center justify-center w-full">
              <hr className="w-full h-px  bg-[#F1F1F1] border-0" />
              <span
                className={`absolute px-2 text-[14px] font-{400} -translate-x-1/2 font-Corsa-Grotesk bg-white left-1/2 text-[#696E7C]`}
              >
                {'Or'}
              </span>
            </div>
            <div>
              <form className="relative  text-[#696E7C] font-Corsa-Grotesk">
                <div className="mb-4 ">
                  <label
                    className={`${createAcctStyles.formText} mb-[8px]`}
                    htmlFor="card_number"
                  >
                    Card Number
                  </label>
                  <input
                    className="h-[52px] pl-[15px] appearance-none border rounded-lg w-full py-2 px-3 text-[#696E7C] leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                    id="card_number"
                    type="number"
                    placeholder="1234 1234 1234 1234"
                  />
                </div>

                <div className="flex relative flex-row gap-10 w-[100%] align-middle items-center text-[12px] text-[#696E7C]">
                  <label
                    className={` max-sm:w-[100%] w-[180] `}
                    htmlFor="Expiry"
                  >
                    {' Expiry(MM/YY)'}
                    <input
                      className="h-[48px] mt-[8px] pl-[15px] max-sm:w-full  flex  appearance-none border rounded-lg  text-[#696E7C] leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                      id="Expiry"
                      type="text"
                      placeholder="12/23"
                    />
                  </label>
                  <label
                    className={` max-sm:w-[100%] w-[180] `}
                    htmlFor="Expiry"
                  >
                    {'CVV'}
                    <input
                      className="h-[48px] pl-[15px] mt-[8px] max-sm:w-full   flex  appearance-none border rounded-lg  text-[#696E7C] leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                      id="Expiry"
                      type="text"
                      placeholder="12/23"
                    />
                  </label>
                </div>
                <div className="mb-4 ">
                  <label
                    className={`${createAcctStyles.formText} mt-[24px]`}
                    htmlFor="card_owner_name"
                  >
                    {'Name on card'}

                    <input
                      className="h-[52px] pl-[15px] mt-[8px]  appearance-none border rounded-lg w-full py-2 px-3 text-[#696E7C] leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                      id="card_owner_name"
                      type="text"
                      placeholder="Full name"
                    />
                  </label>
                </div>

                <label
                  htmlFor="default-checkbox"
                  className={` flex  my-[24px]  flex-row`}
                >
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    value=""
                    className=" h-5 text-blue-600 cursor-pointer rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <span className=" flex text-[#696E7C] ml-[11px] font-Corsa-Grotesk text-[14px]">
                    {'Save my details'}
                  </span>
                </label>

                <div className="">
                  <Link to={'/user/dashboard'}>
                    <Button
                      type="submit"
                      text={'Pay $120'}
                      className="w-full outline-none border-none h-[10%] bg-[#000000] font-Corsa-Grotesk font-normal  text-[#FCFCFC]  py-[5px] px-4 text-[14px] rounded-lg"
                    />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const createAcctStyles = {
  text: 'font-corsa-grotesk font-extrabold text-[#434A5B] text-center md:text-[24px]  text-base leading-5',
  formText: `block text-sm font-corsa-grotesk font-light text-[#696E7C] text-base leading-5 tracking-wider`
};

export default payment;
