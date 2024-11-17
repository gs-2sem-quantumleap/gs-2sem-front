import Image from "next/image";
import Link from "next/link";

export default function SobreNos() {
  return (
    <main className="md:container h-full mx-auto px-[5%] py-[3vh] flex flex-col items-center gap-5 text-xs sm:text-sm md:text-base">
      <h1 className="font-bold text-sm sm:text-base w-full md:text-lg">Integrantes do Grupo</h1>
      {/* Card do Integrante */}
      <div className="bg-musgo w-[75%] lg:w-[60%] xl-w[50%] rounded p-5 font-bold flex flex-col sm:text-base md:text-lg items-center gap-3 hover:shadow-2xl shadow-black">
        <div className="flex flex-col items-center">
          <Image
            src="/img/foto-arthur.png"
            width={100}
            height={100}
            alt="foto do integrante Arthur"
            className="w-[35%] sm:w-[50%] rounded-md mb-2"
          />
          <div className="text-center">
            <h1 className="text-white">Arthur Eduardo Luna Pulini</h1>
            <h2 className="text-limao">RM 554848</h2>
          </div>
        </div>
        <div className="w-[40%] flex justify-between">
          <Link
            href="https://www.linkedin.com/in/arthur-pulini/"
            className="w-[35%] sm:w-[28%] lg:w-[20%] h-auto"
          >
            <Image
              src="/img/logo-linkedin.png"
              width={50}
              height={50}
              alt="link para o linkedin do arthur"
              className="w-full h-auto"
            />
          </Link>
          <Link
            href="https://github.com/arthur-pulini"
            className="w-[35%] sm:w-[28%] lg:w-[20%] h-auto"
          >
            <Image
              src="/img/logo-github.png"
              width={50}
              height={50}
              alt="link para o github do arthur"
              className="w-full h-auto"
            />
          </Link>
        </div>
      </div>
      <div className="bg-musgo w-[75%] lg:w-[60%] xl-w[50%] rounded p-5 font-bold flex flex-col sm:text-base md:text-lg items-center gap-3 hover:shadow-2xl shadow-black">
        <div className="flex flex-col items-center">
          <Image
            src="/img/foto-lucas.jpg"
            width={100}
            height={100}
            alt="foto do integrante Lucas"
            className="w-[35%] sm:w-[50%] rounded-md mb-2"
          />
          <div className="text-center">
            <h1 className="text-white">Lucas Almeida Fernandes de Moraes</h1>
            <h2 className="text-limao">RM 557569</h2>
          </div>
        </div>
        <div className="w-[40%] flex justify-between">
          <Link
            href="https://www.linkedin.com/in/lucas-almeida-fernandes-de-moraes/"
            className="w-[35%] sm:w-[28%] lg:w-[20%] h-auto"
          >
            <Image
              src="/img/logo-linkedin.png"
              width={50}
              height={50}
              alt="link para o linkedin do Lucas"
              className="w-full h-auto"
            />
          </Link>
          <Link
            href="https://github.com/LucasAlmeida-cmd"
            className="w-[35%] sm:w-[28%] lg:w-[20%] h-auto"
          >
            <Image
              src="/img/logo-github.png"
              width={50}
              height={50}
              alt="link para o github do Lucas"
              className="w-full h-auto"
            />
          </Link>
        </div>
      </div>
      <div className="bg-musgo w-[75%] lg:w-[60%] xl-w[50%] rounded p-5 font-bold flex flex-col sm:text-base md:text-lg items-center gap-3 hover:shadow-2xl shadow-black">
        <div className="flex flex-col items-center">
          <Image
            src="/img/foto-victor.jpg"
            width={100}
            height={100}
            alt="foto do integrante Victor"
            className="w-[35%] sm:w-[50%] rounded-md mb-2"
          />
          <div className="text-center">
            <h1 className="text-white">Victor Nascimento Cosme</h1>
            <h2 className="text-limao">RM 558856</h2>
          </div>
        </div>
        <div className="w-[40%] flex justify-between">
          <Link
            href="https://www.linkedin.com/in/victorcosmepro"
            className="w-[35%] sm:w-[28%] lg:w-[20%] h-auto"
          >
            <Image
              src="/img/logo-linkedin.png"
              width={50}
              height={50}
              alt="link para o linkedin do Victor"
              className="w-full h-auto"
            />
          </Link>
          <Link
            href="https://github.com/victorcosmedev"
            className="w-[35%] sm:w-[28%] lg:w-[20%] h-auto"
          >
            <Image
              src="/img/logo-github.png"
              width={50}
              height={50}
              alt="link para o github do Lucas"
              className="w-full h-auto"
            />
          </Link>
        </div>
      </div>
    </main>
  );
}
