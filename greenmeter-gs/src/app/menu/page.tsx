import Link from "next/link";

export default function Menu(){
    return(
        <main className=" h-full mx-auto min-h-[70vh] flex flex-col gap-5 text-xs sm:text-sm md:text-base">
            <Link href="/" className="border-b border-limao px-5 py-[3vh] font-semibold block w-full">
                Home
            </Link>
            <Link href="/sobre-nos" className="border-b border-limao px-5 py-3 font-semibold block w-full">
                Sobre nós
            </Link>
            <Link href="/buscar-conta" className="border-b border-limao px-5 py-3 font-semibold block w-full">
                Visualizar Dados
            </Link>
            <Link href="/descontos" className="border-b border-limao px-5 py-[3vh] font-semibold block w-full">
                Visualizar Descontos
            </Link>
        </main>
    )
}