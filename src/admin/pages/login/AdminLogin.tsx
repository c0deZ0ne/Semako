import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import smebudLogo from '../../../assets/smebud_logoTwo.svg';
import rectangle from '../../../assets/background.svg';
import eye from '../../../assets/eye.svg';
import key from '../../../assets/key.svg';
import Button from '../../componenet/Button';
const AdminLogin: FC = () => {
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
        <div>
          <div className="flex justify-center items-center md:h-screen align-middle ">
            <div className="  w-[100%] md:w-[100%] md:pl-6 md:pr-6 lg:w-[80%] items-center justify-center ">
              <div className="flex justify-center align-center py-3">
                <img src={smebudLogo} alt="smebud-logo" />
              </div>
              <hr className="sm:flex md:hidden bg-slate-50 h-[3px] mb-5 border-0 rounded" />
              <div className="bg-white md:shadow-2xl rounded md:w-[100%] sm:w-[100%] sm: px-[5%] items-center justify-center p-8">
                <span
                  className={`flex flex-row my-5 font-Corsa-Grotesk text-[#434A5B]  lg:text-[1.3rem] md:text-[0.9rem] font-[700] justify-center mr-auto ml-auto align-middle  justify-self-center `}
                >
                  Admin Auth{' '}
                </span>
                <div>
                  <form className="relative">
                    <div className="mb-4 ">
                      <label
                        className={`${createAcctStyles.formText} mb-[8px]`}
                        htmlFor="email"
                      >
                        Email address
                      </label>
                      <input
                        className="h-[52px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                        id="company"
                        type="text"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                    <div className="mb-4 relative">
                      <label
                        className={`${createAcctStyles.formText} mb-[8px]`}
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        className="h-[52px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                        id="username"
                        type="text"
                        placeholder="Optional"
                      />
                      <img
                        src={eye}
                        alt=""
                        className="absolute top-[60%] left-[92%] "
                      />
                    </div>
                    <div className="flex justify-end  my-8">
                      <Link
                        to={'/admin/recover-password'}
                        className="font-light text-[#3A56CD] text-[13px] dark:text-blue-500 hover:underline"
                      >
                        Forgot password
                      </Link>
                    </div>
                    <label
                      htmlFor="default-checkbox"
                      className={`ml-2  flex  mb-10`}
                    >
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-5 h-5 text-blue-600 cursor-pointer rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <span className=" sm:text-[0.9rem] flex text-[#696E7C] ml-5 font-Corsa-Grotesk  md:text-[1rem] lg:text-[1rem]">
                        Remember me always
                      </span>
                    </label>

                    <div className="">
                      <Link to={'/admin/dashboard'}>
                        <Button
                          type="submit"
                          text="log in "
                          className="w-full  h-[10%] bg-[#3A56CD] font-Corsa-Grotesk font-normal  text-[#FCFCFC]  py-2 px-4 text-[1rem] rounded-lg"
                        />
                      </Link>
                    </div>

                    <div className=" sm:mt-[40%]  lg:text-[1rem]  max-sm:text-[0.7rem] flex flex-row justify-self-center justify-center align-middle mr-auto ml-auto max-sm:mt-[50%] max-md:mt-6 lg:mt-6 ">
                      <img src={key} alt="" />
                      <span className="text-[#434A5B] font-Corsa-Grotesk font-[400] sm:text-[0.75rem] ml-2 max-md:ml-5">
                        Your login details are securely encrypted
                      </span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const createAcctStyles = {
  text: 'font-corsa-grotesk font-extrabold text-[#434A5B] text-center md:text-[24px]  text-base leading-5',
  formText: `block text-sm font-corsa-grotesk font-light text-[#696E7C] text-base leading-5 tracking-wider`
};

export default AdminLogin;
