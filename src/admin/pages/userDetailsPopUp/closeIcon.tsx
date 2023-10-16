import React, { useContext } from 'react';

function closeIcon({closeModal}:any) {
  return (
    <svg
      width="16"
      height="67"
      viewBox="0 0 16 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={closeModal}
    >
      <path
        d="M0 0H8C12.4183 0 16 3.58172 16 8V59C16 63.4183 12.4183 67 8 67H0V0Z"
        fill="#4B6EFF"
      />
      <line
        x1="6.5"
        y1="17.5"
        x2="6.5"
        y2="50.5"
        stroke="white"
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
}

export default closeIcon;
