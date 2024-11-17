import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="md:container h-full mx-auto px-[5%] py-[3vh] flex flex-col gap-5 text-xs sm:text-sm md:text-base">
        <div className="flex justify-between items-center gap-5">
          <h1 className="font-bold block sm:text-base md:text-lg">Ranking de Moradores</h1>
          <Link
            href="/"
            className="block text-right w-fit font-medium rounded bg-slate-300 px-3 py-1 sm:text-base md:text-lg"
          >
            Acesse o Ranking Detalhado
          </Link>
        </div>

        <div className="text-white  flex flex-col gap-4">
          <div className="bg-musgo px-3 py-2 items-center rounded grid grid-cols-12 md:px-6">
            <h1 className="text-limao text-base md:text-xl font-bold col-span-1">1º</h1>
            <div className="col-span-8">
              <h1 className="font-semibold">Lucas Almeida</h1>
              <h2>Apartamentos(s): 301, 305</h2>
            </div>
            <h1 className="text-limao text-base font-bold col-span-3 text-right md:text-xl">
              200kWh
            </h1>
          </div>

          <div className="bg-musgo px-3 py-2 items-center rounded grid grid-cols-12 md:px-6">
            <h1 className="text-limao text-base md:text-xl font-bold col-span-1">2º</h1>
            <div className="col-span-8">
              <h1 className="font-semibold">Victor Nascimento Cosme</h1>
              <h2>Apartamentos(s): 301, 305</h2>
            </div>
            <h1 className="text-limao text-base font-bold col-span-3 text-right md:text-xl">
              210kWh
            </h1>
          </div>

          <div className="bg-musgo px-3 py-2 items-center rounded grid grid-cols-12 md:px-6">
            <h1 className="text-limao text-base font-bold col-span-1 md:text-xl">3º</h1>
            <div className="col-span-8">
              <h1 className="font-semibold">Arthur Eduardo</h1>
              <h2>Apartamentos(s): 301, 305</h2>
            </div>
            <h1 className="text-limao text-base font-bold col-span-3 text-right md:text-xl">
              300kWh
            </h1>
          </div>
        </div>

        <div className="">
          <div className="mb-3">
            <h1 className="font-bold text-sm sm:text-base md:text-lg"><span className="text-musgo">Formulário</span> de Cadastro de Conta</h1>
            <p>Insira seus dados no formulário e cadastre sua conta</p>
          </div>
          <form action="" className="w-full bg-slate-200 rounded py-4 px-4">
            <fieldset className="w-full grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-3 mb-3">
              <div className="flex flex-col justify-between">
                <label className="font-medium" htmlFor="numero-apartamento">Número do Apartamento</label>
                <input type="number" id="numero-apartamento" name="numero-apartamento" className="w-full p-1 rounded"/>
              </div>
              <div className="flex flex-col justify-between">
                <label className="font-medium" htmlFor="numero-apartamento">Data da Conta</label>
                <input type="number" id="data-conta" name="data-conta" className="w-full p-1 rounded"/>
              </div>
              <div className="flex flex-col justify-between">
                <label className="font-medium" htmlFor="numero-apartamento">Valor da Conta</label>
                <input type="number" id="numero-apartamento" className="w-full p-1 rounded"/>
              </div>
              <div className="flex flex-col justify-between">
                <label className="font-medium" htmlFor="numero-apartamento">Consumo no período (kWh)</label>
                <input type="number" id="numero-apartamento" className="w-full p-1 rounded"/>
              </div>
            </fieldset>
            <button className="px-3 py-1 bg-musgo rounded text-limao font-semibold ">
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="bg-musgo/30 w-full px-[5%] py-[3vh] text-sm">
        <div className="md:container">
          <h1 className="font-bold block mb-1 sm:text-base md:text-lg">Sobre a nossa Solução</h1>
          <p className="text-xs sm:text-sm md:text-base"> 
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </div>
    </main>
  );
}
