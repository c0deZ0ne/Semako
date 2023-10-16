import React, { Fragment } from 'react';
import { goBack } from '../../../assets/icon';
import { useNavigate } from 'react-router-dom';
import { Tab } from '@headlessui/react';
import SatusButton from '../../componenet/satusButton';
import ChangePassword from './changePassword';
import PersonalInfo from './personalInfo';
function Profile() {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  const handleTitleMenu = (clicked: any) => {
    console.log(clicked);
  };
  const profileoption = [
    {
      title: 'Personal information'
    },
    {
      title: 'Change password'
    }
  ];
  return (
    <section className=" md:px-2 relative max-sm:mt-10 max-sm:px-2 lg:px-[28px] w-[100%] h-[100%] flex flex-col grid-cols-12">
      <div
        className="flex relative h-[50%] flex-col  justify-center max-sm:mt-5 col-span-12 "
        onClick={handleGoBack}
      >
        <span className=" flex flex-flex-row">{goBack()}</span>
      </div>
      <div className="grid grid-cols-12  w-[100%] mr-auto ml-auto  md:flex-row max-sm:flex-col">
        <Tab.Group>
          <div className="relative mt-5 flex gap-3 flex-col col-span-3 max-sm:col-span-12 h-[120px]  md:h-[233px] w-[100%] align-middle">
            <div className="flex flex-col max-md:max-w-[100%]  justify-start gap-4 h-[196px] md:border-r-[1px] md:pt-10 ">
              <span className="flex font-Corsa-Grotesk font-[700] text-[#4B6EFF]">
                My Profile
              </span>
              <Tab.List
                className={`flex flex-col items-start justify-center align-middle gap-3  `}
              >
                {profileoption &&
                  profileoption.map(({ title }) => (
                    <Tab as={Fragment}>
                      {({ selected }: any) => (
                        <div className="flex relative w-[100%] h-[30px] items-center justify-center  flex-row outline-none text-[#8E929D]">
                          <SatusButton
                            callBack={handleTitleMenu}
                            data={{
                              title: `${title}`,
                              color: `${
                                selected ? 'bg-[#4B6EFF]' : 'bg-[#D9DBDE]'
                              }`
                            }}
                          />
                        </div>
                      )}
                    </Tab>
                  ))}
              </Tab.List>
            </div>
          </div>
          <div className="flex col-span-9 max-sm:col-span-12 w-[100%] max-sm:py-10  justify-center align-middle justify-self-center ">
            <Tab.Panels className={'flex flex-1  '}>
              <Tab.Panel
                className={`flex w-[100%] max-sm:h-[100%] justify-center  align-middle items-center `}
              >
                <PersonalInfo />
              </Tab.Panel>
              <Tab.Panel
                className={`flex w-[100%] max-sm:h-[100%] justify-center  align-middle items-center `}
              >
                <ChangePassword />
              </Tab.Panel>
            </Tab.Panels>
          </div>
        </Tab.Group>
      </div>
    </section>
  );
}

export default Profile;
