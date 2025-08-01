import { ReactNode } from "react";

type ButtonComprarPacksProps = {
  children: ReactNode;
};

export function ButtonComprarPacks({ children }: ButtonComprarPacksProps) {
  return (
    <button className="w-full cursor-pointer bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white rounded-full border-none shadow-none transition duration-300 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600">
      {children}
    </button>
  );
}
