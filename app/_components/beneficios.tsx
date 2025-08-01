import { CardBeneficioDireita } from "./cardBeneficioDireita";
import { CardBeneficioEsquerda } from "./cardBeneficioEsquerda";

import { BannerPackDisponivel } from "./bannerPackDisponivel";
import VideoPack from "./videoPack";

export default function Beneficios() {
  return (
    <div className="w-full flex flex-col items-center bg-cor-azul-site py-16 px-4">
      <BannerPackDisponivel
        titulo="PROMO PACK 01"
        descricao="5 Completely editable projetcs"
      />

      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center bg-cor-azul-site">
        <div className="flex items-center mx-4 mt-4">
          <VideoPack src="/videos/promo_pack_01/coffe.mp4" />

          <VideoPack src="/videos/promo_pack_01/tenis_nike.mp4" />
        </div>
        <div className="flex items-center mx-4">
          <VideoPack src="/videos/promo_pack_01/spider.mp4" />
          <VideoPack src="/videos/promo_pack_01/ghost.mp4" />
        </div>

        <div className="flex items-center mx-4">
          <VideoPack src="/videos/promo_pack_01/michael_jordan.mp4" />
          <div className="h- bg-degrade-venda">
            <h1>Project</h1>
            <h1>Features</h1>
            <p>
              <span>5</span> individual ".aep" files
            </p>
            <p>Completely editable</p>
            <p>No plug-ins needed</p>
            <p>Assets Included</p>
            <p>Use it in your work</p>
            <p>Compatible with Windows and MacOS</p>
            <p>Amazing Time Saver</p>
          </div>
        </div>
      </div>
    </div>
  );
}
