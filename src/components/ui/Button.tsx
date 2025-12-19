import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
  download?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  href,
  download
}) => {
  const baseClasses = variant === 'primary' 
    ? 'neo-button' 
    : 'neo-button-blue';
  
  const buttonClasses = `${baseClasses} ${className}`;
  
  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={buttonClasses}
        target="_blank"
        rel="noopener noreferrer"
        download={download}
      >
        {children}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
    >
      {children}
    </motion.button>
  );
};

export default Button;