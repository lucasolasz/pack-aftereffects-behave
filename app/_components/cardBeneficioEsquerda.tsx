type CardBeneficioProps = {
  titulo: string;
  descricao: string;
  videoSrc: string;
};

export function CardBeneficioEsquerda({
  titulo,
  descricao,
  videoSrc,
}: CardBeneficioProps) {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center p-6 bg-cor-azul-site">
      <div className="grid md:grid-cols-2 items-center gap-0 min-h-[260px]">
        <div className="flex items-center justify-center px-8 py-6">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-200 h-100 rounded-lg object-cover shadow"
          />
        </div>
        <div className="flex flex-col justify-center items-start px-8 py-6">
          <h1 className="font-bold text-2xl mb-2 text-white">{titulo}</h1>
          <p className="text-gray-500 text-base leading-relaxed">{descricao}</p>
        </div>
      </div>
    </div>
  );
}
