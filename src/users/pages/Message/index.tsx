import React from 'react';

const Message = () => {
  return (
    <section className="">
      <div className="border-b p-5 border-gray-100">
        <p className="font-bold text-[#434A5B] md:text-[1.5rem] text-[1.2rem]">
          Your Messages
        </p>
      </div>
      <div className="flex-1 justify-center mt-[200px] items-center flex flex-col ">
        {/* <MessageIcon /> */}
        <p className="mt-5 text-[#A1A5AD]">No Messages Yet</p>
      </div>
    </section>
  );
};

export default Message;
