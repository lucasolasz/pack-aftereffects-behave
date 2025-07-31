import { CardBeneficioDireita } from "./cardBeneficioDireita";
import { CardBeneficioEsquerda } from "./cardBeneficioEsquerda";

import { BannerPackDisponivel } from "./bannerPackDisponivel";

export default function Beneficios() {
  return (
    <div className="w-full flex flex-col items-center bg-cor-azul-site py-16 px-4">
      <BannerPackDisponivel
        titulo="PROMO PACK 01"
        descricao="5 Completely editable projetcs"
      />

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
