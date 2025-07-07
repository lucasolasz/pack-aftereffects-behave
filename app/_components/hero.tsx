import { ButtonComprar } from "./button-comprar";

export function Hero() {
  return (
    <div>
      <div className="w-full flex items-center justify-center">
        <div className="hero-background max-w-[1400px] mx-auto md:grid md:grid-cols-2 h-150 rounded-4xl flex items-center justify-center flex-col p-8 text-center md:text-start">
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1
              className="
            text-4xl md:text-5xl font-bold text-white mb-4 "
            >
              Crie <span className="gradient-text">vídeos profissionais </span>
              em minutos com nosso pack exclusivo de After Effects
            </h1>

            <p className="text-lg md:text-xl mb-6 text-white ">
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
