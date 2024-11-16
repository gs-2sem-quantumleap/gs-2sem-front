import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="flex justify-between items-center bg-gradient-to-b from-black/50 from-80% text-white text-sm h-[5vh] px-[6%] pb-1 sm:h-[7vh] sm:[pt-3] sm:pb-2  sm:text-base md:text-lg lg:h-[9vh]">
      <h1 className="font-semibold">
        <span className="text-limao">Green</span>Meter
      </h1>
      <Link href="" className="h-[50%] w-auto">
        <Image
          src="/img/icone-menu.png"
          alt="ícone de menu"
          width={200}
          height={100}
          className="h-full w-auto md:hidden"
        />
      </Link>
      <div className="hidden md:flex gap-3">
        <Link href="/sobre-nos" className="font-semibold">Sobre nós</Link>
        <Link href="/sobre" className="font-semibold">Sobre nós</Link>
        <Link href="/sobre" className="font-semibold">Sobre nós</Link>

      </div>
    </header>
  );
}
