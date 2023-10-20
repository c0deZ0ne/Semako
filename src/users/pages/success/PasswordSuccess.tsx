import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import smebudLogo from '../../../assets/smebud_logoTwo.svg';
import rectangle from '../../../assets/background.svg';
import key from '../../../assets/key.svg';
import sucessimage from '../../../assets/success.svg';
import Button from '../../component/Button';
const PasswordSuccess: FC = () => {
  return (
    <div className=" grid-cols-1 relative grid md:grid-cols-2 bg-[white] ">
      <section className=" hidden md:grid md:grid-cols-1 ">
        <div className=" ">
          <img
            src={rectangle}
            width={'100%'}
            height={'100%'}
            alt=""
            className=" w-[100%] h-[100vh] object-cover"
          />
        </div>
      </section>

      <section className=" grid-cols-2 md:col-span-1 w-[100%]">
        <div className="w-[100%]">
          <div className="flex justify-center items-center md:h-screen align-middle ">
            <div className="  w-[100%] md:w-[100%] md:pl-6 md:pr-6 lg:w-[80%] items-center justify-center ">
              <div className="flex justify-center align-center py-3">
                <img src={smebudLogo} alt="smebud-logo" />
              </div>

              <hr className="sm:flex md:hidden bg-slate-50 h-[3px] mb-5 border-0 rounded relative" />
              <div className="flex flex-row w-[100%] relative">
                <div className="  w-[100%] h-[100%] flex flex-col md:w-[100%] lg:w-[1000%] items-center justify-center align-middle ">
                  <div className="bg-white md:shadow-2xl rounded md:w-[100%] sm:w-[100%]  items-center justify-center  align-middle pb-10 w-[100%] ">
                    <div className=" max-sm:w-[56px] flex md: w-20 flex-row  items-center align-middle justify-center mt-10 mr-auto ml-auto">
                      <img
                        src={sucessimage}
                        width={'100%'}
                        height={'100%'}
                        alt=""
                      />
                    </div>
                    <div className=" mb-10 sm:mt-[10%]  text-[1rem]  max-sm:text-[0.7rem] flex flex-row justify-self-center justify-center align-middle  max-sm:mt-[10%] max-md:mt-10 lg:mt-10 ">
                      <span className=" lg: w-[100%] text-[0.9rem] md:text-center sm:text-[1rem] text-[#696E7C] text-center   lg:text-[1rem] font-Corsa-Grotesk  max-md:ml-5">
                        The password reset process has been completed
                        successfully
                      </span>
                    </div>
                    <div className=" items-center  justify-center  flex  flex-row w-[100%]">
                      <Link to={'/user/dashboard'}>
                        <Button
                          type="submit"
                          text="log in "
                          className=" h-[48px] max-md:w-[60vw] lg:w-[20vw] max-sm:w-[90vw] bg-[#3A56CD] font-Corsa-Grotesk font-normal  text-[#FCFCFC]  py-2 px-4 text-[1rem] rounded-lg mr-auto ml-auto"
                        />
                      </Link>
                    </div>

                    <div className=" sm:mt-[40%]  lg:text-[1rem]  max-sm:text-[0.7rem] flex flex-row justify-self-center justify-center align-middle mr-auto ml-auto max-sm:mt-[50%] max-md:mt-6 lg:mt-6 ">
                      <img src={key} alt="" />
                      <span className="text-[#434A5B] font-Corsa-Grotesk font-[400] sm:text-[0.75rem] ml-2 max-md:ml-5">
                        Your login details are securely encrypted
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PasswordSuccess;
