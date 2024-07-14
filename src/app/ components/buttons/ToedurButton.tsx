// ToedurButton.tsx
import React from 'react';

interface ToedurButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const ToedurButton: React.FC<ToedurButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      className={`${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ToedurButton;