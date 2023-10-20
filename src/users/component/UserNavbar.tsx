import React, { useEffect, useState } from 'react';
import SeachBox from './seachBox';
import Proffile from './Proffile';
import AlertBell from './AlertBell';
import {
  handleBarIcon as HandleBarIcon,
  appIcon,
  searchIcon
} from '../../assets/icon';

import logoImage from '../../assets/images/Smebud.png';
import { usePath } from '../../hooks/usePath';
import adminPic from '../../assets/adminpic.svg';
import useWidth from '../../hooks/useWidth';
import { Link } from 'react-router-dom';

export const UserNavbar = ({
  handleMenu,
  handlePlaySide,
  openSide,
  handlePath,
  displayPath
}: any) => {
  const [topMenu, setTopMenu] = useState(false);
  const [sideMenu, setSide] = useState(false);
  const path = usePath();

  const width = useWidth();
  useEffect(() => {
    if (width < 1024) {
      handlePlaySide(false);
      setTopMenu(false);
      setSide(true);
    }
  }, [width]);

  return (
    <section className=" flex  max-md:border-b-[0px] max max-sm:h-[150px] z-[100]  h-[100%]  w-[100vw] col-span-12 bg-white items-center justify-center align-middle ">
      <div className="max-sm:h-100px   justify-center w-[100%] grid grid-cols-12 items-center md:pl-5  max-sm:h-[100%] ">
        <div className=" relative lg:ml-5 hidden  mt-auto mb-auto md:w-[100%]  md:col-span-2  w-[100%] lg:col-span-1 align-middle md:grid items-center justify-center ">
          <img
            width={'100%'}
            height={'100%'}
            src={logoImage}
            alt="logo"
            srcSet=""
          />
        </div>

        <div className="  shadow-xl  shadow-[#00000008]   flex-col  max-md:flex hidden relative w-[100%]   justify-end col-span-12  lg:hidden ">
          <div className="grid grid-cols-2  justify-around w-[100%]  items-center my-3">
            <div className="flex  w-[100%] flex-1 col-span-1 flex-row items-center justify-center  align-middle">
              <div className="mr-[10%]" onClick={() => openSide()}>
                <HandleBarIcon handleMenu={handleMenu} />
              </div>
              <div>{appIcon()}</div>
            </div>
            <div className="flex  w-[100%] flex-1 col-span-1 flex-row items-center justify-center  align-middle">
              <div className="mr-[10%]">{searchIcon()}</div>
              <Link to={'profile'}>
                <img src={adminPic} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <>
          <div className=" relative overflow-hidden  lg:col-span-11   items-center max-md:w-[100vw]  justify-end lg:ml-[5%] sm:col-span-10 basis-0 flex-1  md:flex max-sm:flex-col ">
            <div className="flex w-[100%] col-span-12 max-md:flex-col   items-center justify-center ">
              <div className="grid grid-cols-12  relative  w-[100%]  lg:items-center max-md:flex-col gap-5 ">
                <div className="col-span-4 w-[100%] h-[10vh] max-sm:pl-5  max-sm:bg-white max-sm:col-span-12  relative flex-row first-letter:capitalize flex text-[#434A5B] font-bold max-sm:justify-start  items-center md:ml-10 ">
                  {displayPath}
                </div>
                <div className=" md:col-span-4   max-md:hidden  relative rounded-md">
                  <SeachBox />
                </div>

                <div className=" col-span-4 relative flex flex-row w-[100%] justify-end items-center  ">
                  <div className="md:mr-16 hidden md:flex ">
                    {AlertBell(12)}
                  </div>
                  <div className="hidden md:flex">
                    <Proffile path={'/user/dashboard/profile'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </section>
  );
};

export default UserNavbar;
