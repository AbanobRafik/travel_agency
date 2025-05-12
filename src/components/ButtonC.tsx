import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface ButtonCProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}
const ButtonC = ({ children, className, ...props }: ButtonCProps) => {
  return (
    <button
      className={clsx("text-white px-10 py-3 rounded-md", className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonC;
