import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";
import Beneficios from "./_components/beneficios";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Beneficios />
    </div>
  );
}
