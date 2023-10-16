import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from '../../utils/interfaces';
const Button = ({
  type = 'button',
  className = '',
  onClick,
  text,
  variant = 'filled'
}: ButtonProps) => {
  return (
    <button type={type} className={twMerge(className)} onClick={onClick}>
      {text}
    </button>
  );
};

<button>Get NDA</button>;
export default Button;
