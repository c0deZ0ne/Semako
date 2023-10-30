import { Menu, Transition } from '@headlessui/react';
import { nanoid } from 'nanoid';
import { Fragment } from 'react';

export default function AppMenu({
  menus,
  props,
  handleBar,
  position,
  menuTitle,
}: {
  menus?: any;
  props?: any;
  handleBar?: any;
  position: any;
  menuTitle?:string
}) {
  return (
    <div className={`relative text-right outline-none  `}>
      <Menu as="div" className={`relative   `}>
        <div
          className={` w-[100%] h-[100%] flex flex-col items-center justify-self-center`}
        >
          <Menu.Button>
            {handleBar ? (
              <img className="w-[100%] h-[100%]" src={handleBar} alt="menu" />
            ) : (<span className='text-[#434A5B] font-Corsa-Grotesk'>{
              menuTitle?menuTitle: '...'
            }</span>
            )}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items {...position}>
            <>
              {menus &&
                menus.map((item: any) => (
                  <div className=" " key={nanoid(5)}>
                    <Menu.Item>
                      {({ active }) => (
                        <span {...props} value={item.action}>
                          {active ? (
                            <>
                              {item.menuIcon && (
                                <span className="flex w-[20px] h-[20px]  mx-2 ">
                                  <item.menuIcon />
                                </span>
                              )}
                            </>
                          ) : (
                            <>
                              {item.menuIcon && (
                                <span className="flex w-[20px] h-[20px]  mx-2 ">
                                  <item.menuIcon />
                                </span>
                              )}
                            </>
                          )}
                          {item.title}
                        </span>
                      )}
                    </Menu.Item>
                  </div>
                ))}
            </>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
