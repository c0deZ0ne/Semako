import React, { useEffect, useState } from 'react';
import Sidebar from './AdminSideMenu';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import useWidth from '../../hooks/useWidth';

export default function Layout({ children }: any) {
  const [topMenu, setTopMenu] = useState(false);
  const [sideMenu, setSide] = useState(false);
  const [showSideLinks, setShowSideMenu] = useState(false);
  const [side, handleSide] = useState(true);
  const [displayPath, setDisplaPath] = useState('Dashboard');

  const width = useWidth();
  useEffect(() => {
    handleMenu('side');
  }, [width]);

  const handlePlaySide = (satus: any) => {
    setShowSideMenu(satus);
  };
  const handleMenu: Function = (curenet: any) => {
    switch (curenet) {
      case 'top':
        setSide(false);
        setTopMenu((cur) => !cur);
        break;
      case 'side':
        setTopMenu(false);

        if (width >= 1024) {
          setSide(true);
          setShowSideMenu(true);
        } else if (width >= 640) {
          setSide(true);
          setShowSideMenu(false);
        } else {
          setSide(false);
        }

        break;
    }
  };
  const openSide = () => {
    if (width <= 640) {
      setSide((cur) => !cur);
      setShowSideMenu(true);
    }
  };

  const handlePath = (path: string) => {
    setDisplaPath(path);
  };

  return (
    <>
      <section className=" h-[100vh]   whitespace-nowrap overflow-auto scrollbar-hide max-w-screen-2xl  antialiased justify-items-center   w-[100vw] justify-center  grid grid-cols-12 whitespace-nowrap overflow-auto scrollbar-hide ">
        <section className=" top-2 col-span-12 h-[80px] ">
          <AdminNavbar
            handleMenu={handleMenu}
            openSide={openSide}
            handlePlaySide={handlePlaySide}
            handlePath={handlePath}
            displayPath={displayPath}
          />
        </section>

        <>
          {sideMenu && (
            <section className=" relative max-sm:absolute max-md:max-w-[100%] max-md:absolute  max-sm:overflow-hidden md:overflow-hidden h-[100vh] md:col-span-1 lg:col-span-2 w-[100%] col-span-12 z-[100] flex ">
              {
                <Sidebar
                  showSideLinks={showSideLinks}
                  handleMenu={handleMenu}
                  sideMenu={sideMenu}
                  side={side}
                  handlePlaySide={handlePlaySide}
                  handlePath={handlePath}
                />
              }
            </section>
          )}
        </>
        <section className=" whitespace-nowrap overflow-auto scrollbar-hide  py-2 px-1 relaitve md:col-span-11 col-span-12 lg:relative md:relative w-[100%] h-[100%] max-sm:border-0  lg:col-span-10 border-[1px]  ">
          <Outlet />
        </section>
      </section>
    </>
  );
}
