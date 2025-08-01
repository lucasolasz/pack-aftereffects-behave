import Image from "next/image";
import { ButtonComprarPacks } from "./button-comprar-packs";

type PackProps = {
  titulo: string;
  descricao1: string;
  descricao2: string;
};

export default function Pack() {
  return (
    <div className="flex flex-col">
      <Image
        src="/images/pack01.jpg"
        alt="Pack 01 image"
        width={320}
        height={320}
        className="rounded-lg mb-3"
      />
      <h1 className="text-white font-extrabold">Big Pack</h1>
      <h1 className="text-white font-extrabold">Instagram</h1>
      <p className="text-white text-sm my-2">640 Animações e Efeitos</p>
      <button className="bg-gray-400 w-full rounded mb-3 font-semibold cursor-pointer">
        Ver Animações
      </button>
      <ButtonComprarPacks>Buy Now</ButtonComprarPacks>
    </div>
  );
}
