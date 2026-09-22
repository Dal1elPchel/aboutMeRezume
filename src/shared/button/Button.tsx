import styles from './Button.module.scss';
import * as React from 'react';

interface buttonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Button = ({ icon, text, onClick, isActive }: buttonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.btn} ${isActive ? styles.active : ''}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
