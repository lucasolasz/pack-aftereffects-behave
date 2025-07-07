import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";
import Beneficios from "./_components/beneficios";
import { Funcionalidades } from "./_components/funcionalidades";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Beneficios />
      <Funcionalidades />
    </div>
  );
}
