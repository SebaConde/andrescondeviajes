import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans ">
      <main>
        <Image
          className=""
          src="/imgs/andrescondeviajeslogo1.jpg"
          alt="Next.js logo"
          width={800}
          height={200}
          priority
        />
        <h1 className="text-green-700 font-bold">Sitio web en construccion.</h1>
        
      </main>
    </div>
  );
}
