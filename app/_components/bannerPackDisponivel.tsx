import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";

type BannerPackDisponivel = {};

export function BannerPackDisponivel({}: BannerPackDisponivel) {
  return (
    <div className="max-w-4xl md:w-[550px] min-h-[80px] flex justify-between bg-degrade-promopack rounded p-5">
      <div className="flex flex-col justify-center mr-6">
        <h1 className="font-extrabold text-2xl md:text-4xl text-white font-montserrat">
          PROMO PACK 01
        </h1>
        <p className="text-white leading-relaxed font-[150] md:text-base">
          5 Completely editable projetcs
        </p>
      </div>
      <div className="flex items-center">
        <Image
          src="/images/after_effects_icon.png"
          alt="After Effects Icon"
          width={40}
          height={40}
        />
        <MdOutlineFileDownload className="text-4xl text-white ml-3" />
      </div>
    </div>
  );
}
