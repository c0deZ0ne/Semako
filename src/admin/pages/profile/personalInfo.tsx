import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import smebudLogo from '../../assets/smebud_logoTwo.svg';
import rectangle from '../../assets/background.svg';
import eye from '../../assets/eye.svg';
import key from '../../assets/key.svg';
import Button from '../../componenet/Button';
import useWidth from '../../../hooks/useWidth';
import { LOGIN_USER } from '../../constants';
import { camIcon } from '../../../assets/icon';
import { CombinedState } from 'redux';
import { combinedState } from '../../../redux/reducers';
import { useSelector } from 'react-redux';
const PersonalInfo: FC = () => {
  const user = useSelector((state:CombinedState<combinedState>) =>state.auth.user);

  const userData = {
    image: '',
    email: 'hanzabobson@gmail.com',
    accountType: 'Main admin'
  };
  const winwith = useWidth();
  return (
    <>
      <div className="flex-col w-[100%]  md:pt-5 max-sm:justify-center overflow-x-auto max-sm:flex  max-sm:flex-col lg:grid grid-cols-12 md:h-[100vh]  max-sm:px-[2%]    overflow-y-auto ">
        <section
          style={{
            boxShadow: `${
              winwith > 700 ? '0px 20px 40px rgba(0, 0, 0, 0.05)' : ''
            }`
          }}
          className=" flex h-[167px] w-[217px]  mb-[5%] ml-auto mr-auto lg:ml-10 overflow-hidden max-sm:pt-10   md:col-span-5 max-sm:flex-col justify-center align-middle max-sm:items-center"
        >
          <div className=" flex flex-col  min-w-[217px] justify-center rounded max-sm:w-[100%] ">
            <label
              htmlFor="upload"
              className="  flex w-[100%] h-[100%] relative justify-center align-middle items-center   "
            >
              <img
                src={LOGIN_USER.adminPhoto}
                alt="profile headshot absolute"
                width={'60px'}
                height={'60px'}
                className="absolute flex "
              />
              <span className=" flex rounded-full  flex-col bg-[#00000080] shadow-2xl justify-center align-middle items-center w-[60px] h-[60px] absolute">
                {camIcon()}
              </span>
              <input id="upload" className="hidden" type="file" />
            </label>

            <div className="flex flex-col items-center justify-center  max-sm:mt-10  ">
              <pre className=" font-Corsa-Grotesk text-[#434A5B] lg:text-[16px] mb-[15px]">
                {user&&user.email}
              </pre>
              <pre className=" font-Corsa-Grotesk text-[#434A5B]  lg:text-[16px] mb-5">
                {"user account"}
              </pre>
            </div>
          </div>
        </section>
        <section
          style={{
            boxShadow: `${
              winwith > 700 ? '0px 20px 40px rgba(0, 0, 0, 0.05)' : ''
            }`
          }}
          className=" h-[480px] w-[427px]  max-sm:w-[100%] flex-col ml-auto mr-auto  md:p-[20px] md:col-span-7 flex justify-center   max-sm:flex-col max-sm:items-cente lg:w-[80%] lg:ml-10  overflow-hidden "
        >
          <span
            className={`flex flex-row my-[20px] md:text-[24px]  font-Corsa-Grotesk text-[#434A5B] font-[700]  `}
          >
            {'Edit Profile'}
          </span>
          <div>
            <form className="relative text-[12px] text-[#696E7C] `">
              <div className="mb-4 relative">
                <label htmlFor="full_nale">{'Full name'}</label>
                <input
                  className="h-[52px] mt-[8px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                  id="full_name"
                  type="text"
                  placeholder="Hamza Bobson"
                />
              </div>
              <div className="mb-4 relative">
                <label className={` mb-[8px]`} htmlFor="email_address">
                  {'Email address'}
                </label>
                <input
                  className="h-[52px] mt-[8px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                  id="email_address"
                  type="text"
                  placeholder="hamzabobson@gmail.com"
                />
              </div>
              <div className="mb-4 relative">
                <label className={` mb-[8px]`} htmlFor="email_address">
                  {'Location'}
                </label>
                <input
                  className="h-[52px] mt-[8px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
                  id="Locations"
                  type="text"
                  placeholder="Sweden"
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
          {/* </div> */}
        </section>
      </div>
    </>
  );
};

export default PersonalInfo;
