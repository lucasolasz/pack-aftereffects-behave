import Image from "next/image";
import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
}
