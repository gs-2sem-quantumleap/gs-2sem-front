export default function FormCadastro() {
  return (
    <main className="md:container mx-auto px-[5%] py-[3vh]  gap-5 text-xs sm:text-sm md:text-base h-[70vh]">
      <h1 className="font-bold mb-2">
        <span className="text-musgo">Formulário</span> de Cadastro de Morador
      </h1>
      <form action="" className="w-full bg-slate-200 rounded py-4 px-4">
        <fieldset className="w-full grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-3 mb-3">
          <div className="flex flex-col justify-between">
            <label className="font-medium" htmlFor="numero-apartamento">
              Nome:
            </label>
            <input
              type="text"
              id="numero-apartamento"
              name="numero-apartamento"
              className="w-full p-1 px-2 rounded"
              placeholder="Insira seu nome"
            />
          </div>
          <div className="flex flex-col justify-between">
            <label className="font-medium" htmlFor="numero-apartamento">
              CPF
            </label>
            <input
              type="text"
              id="data-conta"
              name="data-conta"
              className="w-full p-1 px-2 rounded"
              placeholder="123.456.789-10"
            />
          </div>
          <div className="flex flex-col justify-between">
            <label className="font-medium" htmlFor="numero-apartamento">
              E-mail
            </label>
            <input
              type="text"
              id="numero-apartamento"
              className="w-full p-1 px-2 rounded"
              placeholder="email@dominio.com"
            />
          </div>
          <div className="flex flex-col justify-between">
            <label className="font-medium" htmlFor="numero-apartamento">
              Telefone
            </label>
            <input
              type="text"
              id="numero-apartamento"
              className="w-full p-1 px-2 rounded"
              placeholder="(00) 12345-7689"
            />
          </div>
        </fieldset>
        <button className="px-3 py-1 bg-musgo rounded text-limao font-semibold ">
          Enviar
        </button>
      </form>
    </main>
  );
}
