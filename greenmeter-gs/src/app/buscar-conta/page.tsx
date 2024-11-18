"use client";
import { FormEventHandler, useState } from "react";

export default function BuscarConta() {
  const [mostrarTabela, setMostrarTabela] = useState<boolean>(true);
  const [cpf, setCpf] = useState<string>("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setCpf(value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const cpfParaBusca = cpf.replaceAll(".", "").replace("-", "");
    // Atributo pronto para buscar o CPF
    console.log(cpfParaBusca);
    setMostrarTabela(true);
  }

  return (
    <main className="md:container mx-auto px-[5%] py-[3vh] text-xs sm:text-sm md:text-base h-[70vh] flex flex-col gap-[5vh]">
      <div className="flex flex-col gap-[1vh]">
        <h1 className="font-semibold text-sm sm:text-base md:text-lg">
          Consulte suas contas de Energia
        </h1>
        <form className="w-full bg-slate-200 rounded py-4 px-5 flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="" className="font-semibold">
              CPF
            </label>
            <input
              type="text"
              className="rounded py-1 px-3"
              placeholder="123.456.789.10"
              id="cpf"
              value={cpf}
              name="cpf"
              onChange={handleChange}
            />
          </div>
          <button className="px-3 py-1 bg-musgo text-limao w-fit rounded">
            Enviar
          </button>
        </form>
      </div>

      {mostrarTabela ? (
        <table className="table-auto border-x border-slate-400 bg-slate-200">
          <thead>
            <tr>
              <th className="border-y border-slate-400 py-2">Data da conta</th>
              <th className="border-y border-slate-400">Valor da Conta</th>
              <th className="border-y border-slate-400">Consumo de Energia</th>
              <th className="border-y border-slate-400">Editar/Excluir</th>
            </tr>
          </thead>
        </table>
      ) : (
        <div className="w-full text-center rounded bg-slate-200 py-2 px-4 text-slate-400">
          <h1>Suas contas de energia cadastradas serão exibidas aqui.</h1>
        </div>
      )}
    </main>
  );
}
