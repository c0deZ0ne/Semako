import React, { Fragment } from 'react';
import notifyAlert from '../../componenet/notifyAlert';
import { Tab } from '@headlessui/react';
import { nanoid } from 'nanoid';
import { actiosTypes } from '../../../utils/interfaces';

function toggleAction({
  callback,
  data
}: {
  callback: Function;
  data: actiosTypes[];
}) {
  return (
    <>
      <Tab.Group>
        <Tab.List
          className={`outline-none flex border-none  w-[100%] h-[100%] col-span-3  px-2 items-center justify-center`}
        >
          {data.map((option) => (
            <Tab as={Fragment} key={nanoid(5)}>
              {({ selected }) => (
                <div
                  className={`${
                    selected ? 'bg-[#ffffff] ' : ''
                  } rounded-xl sm:col-span-3 border-none outline-none  flex flex-row  cursor-pointer h-[90%]`}
                >
                  {selected && callback(option)}
                  <span className="flex font-Corsa-Grotesk text-[14px] leading-snug items-center p-2 min-w-[70px] justify-center ">
                    {option.title}
                  </span>
                  {selected && option.total ? (
                    <span className="flex items-center mx-2">
                      {notifyAlert(option.total, 'bg-[#FFA500]')}
                    </span>
                  ) : null}
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </>
  );
}

export default toggleAction;
