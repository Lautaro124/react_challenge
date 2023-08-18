interface ButtonProps {
  children: React.ReactNode
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-[#32cd32] py-2 px-5 rounded-md text-white">
      {children}
    </button>
  )
}

export default Button
