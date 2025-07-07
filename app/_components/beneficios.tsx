import { CardBeneficioDireita } from "./cardBeneficioDireita";
import { CardBeneficioEsquerda } from "./cardBeneficioEsquerda";

export default function Beneficios() {
  return (
    <div
      className="w-full bg-cor-azul-site
     py-16 px-4"
    >
      <div className="max-w-[700px] flex items-center justify-center flex-col mx-auto ">
        <h1 className="text-4xl font-bold text-center text-white">
          Por que nosso pack de{" "}
          <span className="gradient-text">After Effects</span> é perfeito para
          você?
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-600 font-bold text-center mt-4">
          Descubra como nossos templates vão elevar seus projetos a outro nível.
        </p>
      </div>

      <CardBeneficioDireita
        titulo="Rápido de editar."
        descricao="Prontos para uso profissional, otimize seu tempo com projetos já estruturados para acelerar sua produção."
        videoSrc="/videos/video-1.mp4"
      />

      <CardBeneficioEsquerda
        titulo="Versatilidade máxima."
        descricao="Diversos estilos, transições, templates e animações editáveis que se encaixam em qualquer projeto."
        videoSrc="/videos/video-3.mp4"
      />
    </div>
  );
}
