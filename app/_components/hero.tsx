import { ButtonComprar } from "./button-comprar";

export function Hero() {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="hero-background max-w-[1400px] mx-auto grid md:grid-cols-2 h-150 rounded-4xl">
          <div className="flex flex-col justify-center">
            <h1
              className="
            text-4xl md:text-5xl font-bold text-white mb-4 "
            >
              Crie <span className="gradient-text">Vídeos Profissionais </span>
              em Minutos com Nosso Pack Exclusivo de After Effects
            </h1>

            <p className="text-lg md:text-xl mb-6 text-gray-300 font-bold">
              Transforme suas ideias em animações incríveis com templates 100%
              editáveis, prontos para uso e perfeitos para qualquer projeto.
            </p>

            <ButtonComprar>Comprar Agora</ButtonComprar>
          </div>
        </div>
      </div>
    </div>
  );
}
