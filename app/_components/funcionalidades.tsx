import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { ButtonComprar } from "./button-comprar";

export function Funcionalidades() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center gap-8">
        <div className="flex items-center justify-center">
          <Image
            src="/images/funcionalidades.jpg"
            alt="Funcionalidades"
            width={320}
            height={320}
            className="rounded-xl object-cover shadow"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[cor-azul-site] text-3xl md:text-3xl font-bold">
            Tudo o que você recebe no nosso pack
          </h1>

          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-start gap-8 py-4">
            <div>
              <p className="flex items-center gap-2 text-gray-600">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <FaCheck className="text-3xl text-green-500" />
                </span>
                +50 templates exclusivos para After Effects (prontos para redes
                sociais, apresentações, intros e mais).
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-gray-600">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <FaCheck className="text-3xl text-green-500" />
                </span>
                Arquivos organizados e fáceis de editar, mesmo para iniciantes.
              </p>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-start gap-8 py-4">
            <div>
              <p className="flex items-center gap-2 text-gray-600">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <FaCheck className="text-3xl text-green-500" />
                </span>
                Compatibilidade com todas as versões recentes do After Effects.
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2 text-gray-600">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                  <FaCheck className="text-3xl text-green-500" />
                </span>
                Tutoriais em vídeo para personalização rápida.
              </p>
            </div>
          </div>

          <p className="text-center mb-10">
            Tudo isso por um único pagamento acessível. Invista no seu sucesso e
            comece a criar vídeos que impressionam hoje mesmo!
          </p>

          <ButtonComprar>Comprar Agora</ButtonComprar>
        </div>
      </div>
    </div>
  );
}
