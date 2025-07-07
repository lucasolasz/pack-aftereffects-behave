import { ButtonComprar } from "./buttonComprar";

export function CompreAgora() {
  return (
    <div className="w-full my-20 p-5">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-[2px] rounded-3xl max-w-[1400px] mx-auto">
        <div className="flex flex-col justify-center items-center p-8 h-150 bg-[#00081f] rounded-3xl ">
          <div className="flex flex-col items-center text-center max-w-200">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Adquira agora nosso pacote de
              <span className="gradient-text"> After Effects</span>
            </h1>
            <div className="flex items-center mt-5">
              <span className="text-[40px] text-white">$</span>
              <h1 className="text-7xl text-white font-bold">5</h1>
            </div>

            <p className="text-gray-400 mb-5">Envio imediato</p>
            <ButtonComprar>Comprar Agora</ButtonComprar>
            <p className="text-white mt-5">Compra 100% segura.</p>
            <p className="text-white">Pagamento único e acesso vitalício</p>
            <img
              src="/images/cartoes.svg"
              alt="Cartões aceitos"
              className="mt-6 w-100 h-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
