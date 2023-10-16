import React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN_USER } from '../constants';
import { useSelector } from 'react-redux';
import { combinedState } from '../../redux/reducers';
import { CombinedState } from 'redux';

function Proffile({ path }: { path: string }) {
  const user = useSelector((state:CombinedState<combinedState>) =>state.auth.user);
  return (
    <Link
      to={'profile'}
      className=" flex-row  lg:flex-row w-[40%] justify-center h-[50%] flex  items-center  border-none align-middle bg-white/0 "
    >
      <img
        src={user?.avatar?user.avatar:LOGIN_USER.adminPhoto}
        alt="profile headshot"
        width={'40px'}
        height={'40px'}
        className="mx-5"
      />
      <div className="flex flex-col md:hidden lg:flex ">
        <span className="text-[#434A5B] font-Corsa-Grotesk">
          <pre className=" font-Corsa-Grotesk  ">{user&&user.name||null}</pre>
        </span>
        <Link
          to={`${path}`}
          className="text-blue-500  font-Corsa-Grotesk  text-sm  cursor-pointer mt-1"
        >
          View Profile
        </Link>
      </div>
    </Link>
  );
}

export default Proffile;
