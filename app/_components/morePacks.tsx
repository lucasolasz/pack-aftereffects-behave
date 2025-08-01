import Pack from "./pack";

export default function MorePacks() {
  return (
    <div className="w-full flex flex-col items-center bg-cor-azul-site px-4">
      <h1 className="text-white font-extrabold text-4xl my-4 md:text-6xl">
        MORE PACKS
      </h1>

      <div className="max-w-[1000px] mx-auto flex flex-col items-center justify-center ">
        <div className="flex gap-4 m-3 md:grid md:grid-cols-2 md:m-0">
          <Pack />
        </div>
      </div>
    </div>
  );
}
