import React from 'react'

interface ButtonProps {
  label: string;
  onClick: () => void;
  styles?: string;
}

const Button: React.FC<ButtonProps> = ({label, onClick, styles}) => {
  return (
    <button className={styles} onClick={onClick}>{label}</button>
  )
}

export default Button