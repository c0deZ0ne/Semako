import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import smebudLogo from '../../../assets/smebud_logoTwo.svg';
import rectangle from '../../assets/background.svg';
import eye from '../../../assets/eye.svg';
import key from '../../assets/key.svg';
import Button from '../../component/Button';
import useWidth from '../../../hooks/useWidth';
const ChangePAssword: FC = () => {
  const winwith = useWidth();
  return (
    <section className="  md:h-[100vh] h-[100%] max-sm:flex-col max-sm:items-center max-sm:px-[2%] md:px-10 flex w-[100%] md:pt-3  overflow-hidden ">
      <div
        style={{
          boxShadow: `${
            winwith > 700 ? '0px 20px 40px rgba(0, 0, 0, 0.05)' : ''
          }`
        }}
        className=" md:h-[355px] flex flex-col max-sm:p-[5%]  md:w-[427px] md:px-[40px] rounded max-sm:w-[100%] "
      >
        <span
          className={`flex flex-row my-[20px] md:text-[24px]  font-Corsa-Grotesk text-[#434A5B] font-[700]  `}
        >
          Change Password
        </span>
        <div>
          <form className="relative text-[12px] text-[#696E7C] `">
            <div className="mb-4 relative">
              <label htmlFor="password">Old password</label>
              <input
                className="h-[52px] mt-[8px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                id="username"
                type="text"
                placeholder="must be same as current password"
              />
              <img
                src={eye}
                alt=""
                className="absolute top-[60%] left-[92%] "
              />
            </div>
            <div className="mb-4 relative">
              <label className={` mb-[8px]`} htmlFor="password">
                New Password
              </label>
              <input
                className="h-[52px] mt-[8px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                id="username"
                type="text"
                placeholder="Must be 8-charactered"
              />
              <img
                src={eye}
                alt=""
                className="absolute top-[60%] left-[92%] "
              />
            </div>

            <div className=" mb-10">
              <Link to={'/admin/reset-success'}>
                <Button
                  type="submit"
                  text="Save changes"
                  className="w-full  mt-5  sm:h-[8%]  bg-[#3A56CD] font-Corsa-Grotesk font-normal   text-[#FCFCFC]  py-2 px-4 text-[14px] rounded-lg"
                />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePAssword;
