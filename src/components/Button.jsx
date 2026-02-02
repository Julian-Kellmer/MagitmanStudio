import React from 'react'

const Button = ({
  children,
  onClick,
  className = '',
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer px-4 py-2 rounded transition-colors duration-200 ${className}`}
      {...props}>
      {children}
    </button>
  )
}

export default Button
