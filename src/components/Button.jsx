import React from 'react';

const Button = ({ styles }) => {
  return (
    <button
      type='button'
      className={`py-4 px-6 bg-blue-gradient font-poppins 
                  font-medium text-[18px] mt-10 rounded-[10px] text-primary outline-none transition duration-700 animate-pulse
                   hover:animate-none ${styles}`}
    >
      {' '}
      Get Started
    </button>
  );
};

export default Button;
