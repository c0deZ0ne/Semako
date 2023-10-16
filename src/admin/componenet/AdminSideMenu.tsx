import React, { FC, useState } from 'react';
import closeBtn from '../../assets/close.svg';
import { Link } from 'react-router-dom';
import notification from './notification';
import { usePath } from '../../hooks/usePath';
import { ADMIN_SIDEBAR_MENU } from '../constants';
import { nanoid } from 'nanoid';
import { sidebarNavType } from '../../utils/interfaces';
const AdminSideMenu = ({
  handleMenu,
  showSideLinks,
  sideMenu,
  side,
  handlePlaySide,
  handlePath
}: {
  showSideLinks?: boolean;
  handleMenu: Function;
  sideMenu: boolean;
  side: boolean;
  handlePlaySide: Function;
  handlePath: Function;
}) => {
  const path = usePath();
  console.log(showSideLinks);
  return (
    <div className="  h-[100%] w-[90%]  flex flex-col  relative  lg:border-t ">
      <div className=" relative w-[100%] h-[100%] flex flex-col ">
        <div className="flex  flex-col  w-[100%] font-[500] relative bg-[#ffff] h-[100%] p-5 gap-12">
          <div
            className=" relative right-[-70%] hidden max-md:flex  "
            onClick={() => handleMenu('side')}
          >
            <img src={closeBtn} alt="" />
          </div>
          <div className="  flex flex-col gap-3 w-[100%] ">
            <div className=" text-[#565C6B]  hidden mb-5 lg:flex">Menu</div>
            {ADMIN_SIDEBAR_MENU.map((items: sidebarNavType) => {
              return (
                <div key={nanoid(5)}>
                  <Link
                    to={`${items.link}`}
                    className="cursor-pointer font-[500]"
                    key={nanoid(5)}
                    onClick={() => handlePath(items.display)}
                  >
                    <div className=" flex row h-[40px]" key={items.id}>
                      {items?.icon(
                        `${path == items.navPath ? '#4B6EFF' : '#696E7C'}`
                      )}
                      {showSideLinks && sideMenu && (
                        <span className="cursor-pointer  text-[#696E7C] w-[100%] relative ">
                          {items.label == 'Messages' ? (
                            <div className="flex justify-between ">
                              {path == items.navPath ? (
                                <span className="text-[#4B6EFF] pl-3">
                                  {items.label}
                                </span>
                              ) : (
                                <span className="pl-3">{items.label}</span>
                              )}
                              <div className="flex flex-col bg-[#FA3246] w-[23px] h-[20px] rounded-full items-center text-[#F6F6F7]">
                                <div className="text-[12px]">{4}</div>
                              </div>
                            </div>
                          ) : path == items.navPath ? (
                            <span className="text-[#4B6EFF] pl-3">
                              {items.label}
                            </span>
                          ) : (
                            <span className="pl-3">{items.label}</span>
                          )}
                        </span>
                      )}
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="hidden lg:flex text-[#696E7C] font-Corsa-Grotesk max-sm:flex">
            {notification()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSideMenu;
