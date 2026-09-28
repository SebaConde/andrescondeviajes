import Image from "next/image";
import GradientWaves from "../../components/GradientWaves";
import TextType from "../../components/TextType";
import Mapa from "@/components/shared/mapa";
import IconGrid from "@/components/shared/icons-grid";
import HeroSection from "@/components/shared/hero";
import { Separator } from "@/components/ui/separator";
import Services from "@/components/shared/services";
import About from "@/components/shared/about";
import Footer from "@/components/shared/footer";
import Horarios from "@/components/shared/horarios";

export default function Home() {
  return (
    <div className="bg-ink-800">
      <HeroSection />
        <Services />
        <Separator />
        <Horarios />
        <Separator />
        <About />
        <Separator />
        <Mapa />
        <Separator />
    </div>
  );
}
