import { BannerPackDisponivel } from "./bannerPackDisponivel";
import { ButtonComprar } from "./button-comprar";
import VideoPack from "./videoPack";

export default function PromoPack01() {
  return (
    <div className="w-full flex flex-col items-center bg-cor-azul-site py-16 px-4">
      <BannerPackDisponivel
        titulo="PROMO PACK 01"
        descricao="5 Completely editable projetcs"
      />

      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center bg-cor-azul-site">
        <div className="md:grid md:grid-cols-2 flex gap-4 p-3">
          <VideoPack src="/videos/promo_pack_01/coffe.mp4" />

          <VideoPack src="/videos/promo_pack_01/tenis_nike.mp4" />
        </div>

        <div className="md:grid md:grid-cols-2 flex gap-4 p-3 md:p-0">
          <VideoPack src="/videos/promo_pack_01/spider.mp4" />
          <VideoPack src="/videos/promo_pack_01/ghost.mp4" />
        </div>

        <div className="grid grid-cols-2 gap-4 p-3 items-center">
          <VideoPack src="/videos/promo_pack_01/michael_jordan.mp4" />
          <div className="h-full py-4">
            <div className="h-full p-3 bg-degrade-venda">
              <h1 className="font-extrabold text-2xl text-white font-montserrat  md:text-6xl">
                Project
              </h1>
              <h1 className="font-extrabold text-2xl text-white font-montserrat md:text-6xl">
                Features
              </h1>
              <p className="text-white text-sm mt-2 md:text-base md:my-5">
                - <span className="font-bold text-white">5</span> individual
                ".aep" files
              </p>
              <p className="text-white text-sm my-1 md:text-base md:my-5">
                - Completely editable
              </p>
              <p className="text-white text-sm my-1 md:text-base md:my-5">
                - No plug-ins needed
              </p>
              <p className="text-white text-sm my-1 md:text-base md:my-5">
                - Assets Included
              </p>
              <p className="text-white text-sm my-1 md:text-base md:my-5">
                - Use it in your work
              </p>
              <p className="text-white text-sm my-1 md:text-base md:my-5">
                - Compatible with Windows and MacOS
              </p>
              <p className="text-white text-sm my-1 md:text-base md:my-5">
                - Amazing Time Saver
              </p>
              <div className="flex items-center justify-center mt-5">
                <span className="text-[10px] text-white md:text-[40px]">$</span>
                <h1 className="text-3xl text-white font-bold md:text-7xl ">
                  5
                </h1>
              </div>
            </div>
          </div>
        </div>
        <ButtonComprar>Buy now</ButtonComprar>
        <p className="text-white mt-5">100% secure purchase.</p>
        <p className="text-white">One-time payment and lifetime access</p>
        <img
          src="/images/cartoes.svg"
          alt="Cartões aceitos"
          className="mt-6 w-100 h-auto mx-auto"
        />
      </div>
    </div>
  );
}
