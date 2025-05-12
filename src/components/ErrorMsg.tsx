import type { ReactNode } from "react";

interface ErrorMsg {
  children: ReactNode;
}

const ErrorMsg = ({ children }: ErrorMsg) => {
  return <div className="text-red-500 font-bold">{children}</div>;
};

export default ErrorMsg;
