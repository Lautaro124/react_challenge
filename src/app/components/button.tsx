import { type ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const Button = ({ children, ...restOffProps }: ButtonProps) => {
  return (
    <button {...restOffProps} className="bg-[#32cd32] py-2 px-5 rounded-md text-white">
      {children}
    </button>
  )
}

export default Button
