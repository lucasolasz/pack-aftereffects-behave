import { ReactNode } from "react";

type ButtonComprarProps = {
  children: ReactNode;
};

export function ButtonComprar({ children }: ButtonComprarProps) {
  return (
    <button className="px-20 py-2 cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white text-lg font-semibold rounded-full border-none shadow-none transition duration-300 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600">
      {children}
    </button>
  );
}
