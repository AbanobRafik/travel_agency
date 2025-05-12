import clsx from "clsx";
import React, { type InputHTMLAttributes } from "react";

interface InputCProps extends InputHTMLAttributes<HTMLInputElement> {
  htmlFor?: string;
  className?: string;
}

const InputC = React.forwardRef<HTMLInputElement, InputCProps>(
  ({ type = "text", placeholder, className, id, htmlFor, ...rest }, ref) => {
    return (
      <div>
        <label
          className="block text-gray-800 text-shadow-md text-shadow-gray-400 font-medium mb-2"
          htmlFor={htmlFor || id}
        >
          {placeholder}
        </label>
        <input
          type={type}
          placeholder={placeholder}
          className={clsx(
            `w-full px-4 py-3 inp shadow-md shadow-gray-500 bg-opacity-70 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-400 placeholder-pink-500 placeholder-opacity-70`,
            className
          )}
          id={id}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

export default InputC;
