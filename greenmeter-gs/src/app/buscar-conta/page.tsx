"use client";
import { TipoConta, TipoContaResponse } from "@/types/types";
import Link from "next/link";
import { FormEventHandler, useState } from "react";

export default function BuscarConta() {
  const [mostrarTabela, setMostrarTabela] = useState<boolean>(false);
  const [cpf, setCpf] = useState<string>("");
  const [listaDeContas, setListaDeContas] = useState<TipoConta[]>([]);
  const [mostrarMensagemErro, setMostrarMensagemErro] =
    useState<boolean>(false);

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
    buscaContas(cpfParaBusca);
  };

  const buscaContas = async (cpf: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/contas/buscaPorCPF/${cpf}`
      );
      const dados = await response.json();

      let listaDeContas: TipoConta[] = [];
      let listaDeContasResponse: TipoContaResponse[] = [];
      listaDeContasResponse = dados.map((item: TipoContaResponse) => item);

      listaDeContas = listaDeContasResponse.map((item: TipoContaResponse) => {
        return {
          ...item,
          dataConta: {
            dia: item.dataConta[2],
            mes: item.dataConta[1],
            ano: item.dataConta[0],
          },
        };
      });

      if (listaDeContas.length > 0) {
        setListaDeContas(listaDeContas);
        setMostrarTabela(true);
        setMostrarMensagemErro(false);
      } else {
        setMostrarMensagemErro(true);
        setMostrarTabela(false);
      }
    } catch (error) {
      console.log("Não foi possível carregar os dados do usuário.", error);
    }
  };

  const handleDelete = async (idContaDeEnergia: number) => {
    console.log("handle delete");
    try {
      const response = await fetch(
        `http://localhost:8080/contas/${idContaDeEnergia}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Conta de energia deletada com sucesso!");
        // setListaDeContas(listaDeContas.filter((item: TipoConta) => item.idContaDeEnergia !== idContaDeEnergia))
        window.location.reload();
        buscaContas(cpf);
      }
    } catch (error) {
      console.log("Não foi possível excluir a conta de energia.", error);
    }
  };

  return (
    <main className="md:container mx-auto px-[5%] py-[3vh] text-xs sm:text-sm md:text-base h-[70vh] flex flex-col gap-[5vh]">
      <div className="text-start w-full mb-2">
        <p>
          <Link href="/">
            <span className="text-musgo">Home</span>
          </Link>{" "}
          &gt; Visualizar dados
        </p>
      </div>
      <div className="flex flex-col gap-[1vh]">
        <div className="flex justify-between mb-3">
          <h1 className="font-semibold text-sm sm:text-base md:text-lg">
            Consulte suas contas de Energia
          </h1>
          {listaDeContas.length > 0 && (
            <Link
              href={`/cadastro/${cpf}`}
              className="block rounded text-musgo text-center px-3 py-1 bg-slate-200 w-fit font-semibold"
            >
              Editar seus dados
            </Link>
          )}
        </div>
        <form
          className="w-full bg-slate-200 rounded py-4 px-5 flex flex-col gap-3"
          onSubmit={handleSubmit}
        >
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
              <th className="border border-slate-400 py-2">Data da conta</th>
              <th className="border border-slate-400">Valor da Conta</th>
              <th className="border border-slate-400">Consumo de Energia</th>
              <th className="border border-slate-400">
                <button>Editar</button>/<button>Excluir</button>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {listaDeContas.map((contaDeEnergia) => (
              <tr key={contaDeEnergia.idContaDeEnergia}>
                <td className="font-semibold text-center border">
                  {contaDeEnergia.dataConta.dia}/{contaDeEnergia.dataConta.mes}/
                  {contaDeEnergia.dataConta.ano}
                </td>
                <td className="font-semibold text-center border">
                  R${contaDeEnergia.valorConta}
                </td>
                <td className="font-semibold text-center border">
                  {contaDeEnergia.consumoKwh}KWh
                </td>
                <td className="font-semibold text-center border">
                  <Link
                    href={`/buscar-conta/${contaDeEnergia.idContaDeEnergia}`}
                  >
                    Editar
                  </Link>{" "}
                  |
                  <button
                    onClick={() =>
                      handleDelete(contaDeEnergia.idContaDeEnergia)
                    }
                  >
                    {" "}
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full text-center rounded bg-slate-200 py-2 px-4 text-slate-400">
          {mostrarMensagemErro ? (
            <p className="text-red-500">
              CPF inserido não está cadastrado.{" "}
              <Link href="/cadastro" className="underline font-semibold">
                Cadastre-se já
              </Link>
              .
            </p>
          ) : (
            <h1>Suas contas de energia cadastradas serão exibidas aqui.</h1>
          )}
        </div>
      )}
    </main>
  );
}
