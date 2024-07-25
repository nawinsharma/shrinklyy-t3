'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  startIcon?: ReactNode
}

const Button = ({ children, className, startIcon, ...props }: Props) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded bg-gray-200 px-4 py-1.5 transition-colors hover:bg-gray-300 active:bg-gray-400 ${className}`}
      {...props}
    >
      {startIcon}

      <span>{children}</span>
    </button>
  )
}

export default Button
