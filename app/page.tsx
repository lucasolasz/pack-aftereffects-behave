import { Metadata } from "next";
import { Funcionalidades } from "./_components/funcionalidades";
import { Hero } from "./_components/hero";
import { NavBar } from "./_components/navbar";
import Beneficios from "./_components/beneficios";
import { CompreAgora } from "./_components/compreAgora";
import { Garantia } from "./_components/garantia";

export const metadata: Metadata = {
  title: "Pack de Templates After Effects - Crie Vídeos Incríveis",
  description:
    "Adquira nosso pack de templates 100% editáveis para After Effects e crie vídeos profissionais em minutos. Perfeito para criadores, freelancers e agências!",
  keywords: [
    "After Effects",
    "Templates After Effects",
    "Motion Graphics",
    "Vídeos Profissionais",
    "Templates Editáveis",
    "Design de Vídeo",
    "Animações para Redes Sociais",
  ],
  authors: [{ name: "[Vitor Letta - Behave]" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Pack de Templates After Effects - Crie Vídeos Incríveis",
    description:
      "Transforme seus projetos com nosso pack de templates editáveis para After Effects. Crie vídeos profissionais rapidamente e impressione seus clientes!",
    url: "https://pack-aftereffects-behave.vercel.app",
    siteName: "Behave Templates",
    images: [
      {
        url: "https://i.pinimg.com/280x280_RS/32/1e/ba/321eba51584233268728895cad55eba2.jpg",
        width: 1200,
        height: 630,
        alt: "Preview do Pack de Templates After Effects",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pack de Templates After Effects - Crie Vídeos Incríveis",
    description:
      "Crie vídeos profissionais em minutos com nosso pack de templates editáveis para After Effects. Perfeito para criadores e agências!",
    images: [
      "https://i.pinimg.com/280x280_RS/32/1e/ba/321eba51584233268728895cad55eba2.jpg",
    ],
  },
};

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Beneficios />
      <Funcionalidades />
      <CompreAgora />
      <Garantia />
    </div>
  );
}
