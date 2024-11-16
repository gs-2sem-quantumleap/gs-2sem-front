import Image from "next/image";
import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className="bg-gradient-to-b from-black/50 from-80% text-white text-sm h-[5vh] flex justify-between items-center px-[6%]">
      <h1 className="font-semibold">
        <span className="text-limao">Green</span>Meter
      </h1>
      <Link href="" className="h-[60%] w-auto">
        <Image
          src="/img/icone-menu.png"
          alt="ícone de menu"
          width={200}
          height={100}
          className="h-full w-auto"
        />
      </Link>
    </header>
  );
}
