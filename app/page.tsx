import Image from "next/image";
import GradientWaves from "../components/GradientWaves";
import TextType from "../components/TextType";

export default function Home() {
  return (
    <div className="lg:pt-92 pt-25">
      <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
        <main>
          <Image
            className=""
            src="/imgs/andrescondeviajeslogo1.jpg"
            alt="Next.js logo"
            width={800}
            height={200}
            priority
          />
          
          <h1 className="text-green-700 font-bold text-3xl lg:pl-40 pl-4 ">
            <TextType
            text={["Sitio web en construcción!", "Nos vemos pronto!", "Atento a las novedades!"]}
            typingSpeed={60}
            pauseDuration={3300}
            showCursor
            cursorCharacter="|"
            deletingSpeed={20}
            cursorBlinkDuration={1.2}
          />
          </h1>
        </main>
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <GradientWaves
            horizonColor="#3ccc16"
            waveColor="#16cc33"
            crestColor="#16cc3b"
            speed={0.4}
            amplitude={2.5}
            waveScale={0.6}
            waveRatio={0.9}
            swell={35}
            turbulence={20}
            tilt={1.11}
            zoom={1}
            height={5.5}
            fogDepth={15}
            detail="medium"
            brightness={1}
            opacity={1}
            mouseInteraction
            parallaxStrength={0.5}
            grain
            grainIntensity={0.05}
          />
        </div>
      </div>
    </div>
  );
}
