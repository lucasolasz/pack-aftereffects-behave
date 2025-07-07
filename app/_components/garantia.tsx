export function Garantia() {
  return (
    <div className="w-full py-15 bg-white">
      <div className="flex flex-col items-center text-center max-w-500 mx-auto p-5">
        <img
          src="/images/selo-garantia.webp"
          alt="Cartões aceitos"
          className="w-40 h-auto mx-auto"
        />
        <div className="my-5">
          <h1 className="text-4xl font-bold cor-azul-site">
            100% do seu dinheiro de volta
          </h1>
          <p className="text-gray-500">
            Caso o produto não funcione ou não seja do seu agrado, faremos a
            devolução total do seu dinheiro e o cancelamento da compra.
          </p>
        </div>
      </div>
    </div>
  );
}
