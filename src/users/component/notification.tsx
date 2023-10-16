import React from 'react';
import notifyAlert from './notifyAlert';
import { bellNotification } from '../../assets/icon';

function notification() {
  return (
    <>
      <div className="flex flex-row w-[100%] text-[] ">
        <div className="flex flex-row flex-1 gap-[5%]">
          <div>{bellNotification()}</div>
          <div>Notification </div>
        </div>

        <div className='mx-2'> {notifyAlert(3)}</div>
      </div>
    </>
  );
}

export default notification;
