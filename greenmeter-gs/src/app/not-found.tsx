import Link from "next/link";

export default function NotFound() {
  return (
    <main className="md:container mx-auto px-[5%] py-[3vh] text-sm md:text-base h-[70vh] flex flex-col items-center justify-center">
      <h1 className="font-bold text-base">
        Página<span className="text-musgo"> não encontrada.</span>
      </h1>
      <p className="text-center">
        Acho que você se perdeu... Por favor, volte à{" "}
        <Link href="/" className="underline text-blue-600">página principal.</Link>
      </p>
    </main>
  );
}
