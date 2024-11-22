"use client";
import { TipoDesconto } from "@/types/types";
import { useState, useEffect } from "react";

export default function BuscarDesconto() {
  const [descontos, setDescontos] = useState<TipoDesconto[]>([]);
  const [mostrarTabela, setMostrarTabela] = useState<boolean>(false);
  const [mostrarMensagemErro, setMostrarMensagemErro] = useState<boolean>(false);

  const chamadaApi = async () => {
    try {
      const response = await fetch(`http://localhost:8080/descontos`, {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const data: TipoDesconto[] = await response.json();
      if (data.length > 0) {
        setDescontos(data);
        setMostrarTabela(true);
      } else {
        setMostrarMensagemErro(true);
      }
    } catch (error) {
      console.error(error);
      setMostrarMensagemErro(true);
    }
  };

  useEffect(() => {
    chamadaApi();
  }, []);

  return (
    <main className="md:container mx-auto px-[5%] py-[3vh] text-xs sm:text-sm md:text-base min-h-[70vh] flex flex-col gap-[5vh]">
      <div className="text-start w-full mb-2">
        <h1 className="font-semibold text-sm sm:text-base md:text-lg">
          Histórico de Descontos:
        </h1>
      </div>

      {mostrarTabela ? (
        <table className="table-auto border-x border-slate-400 bg-slate-200">
          <thead>
            <tr>
              <th className="border border-slate-400 py-2">Data do Desconto</th>
              <th className="border border-slate-400">Valor do Desconto</th>
              <th className="border border-slate-400">Descrição</th>
              <th className="border border-slate-400">Apartamento</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {descontos.map((desconto) => (
              <tr key={desconto.idDesconto}>
                <td className="font-semibold text-center border">
                  {new Date(desconto.dataDesconto).toLocaleDateString()}
                </td>
                <td className="font-semibold text-center border">
                  R${desconto.valorDesconto.toFixed(2)}
                </td>
                <td className="font-semibold text-center border">
                  {desconto.descricaoDesconto}
                </td>
                <td className="font-semibold text-center border">
                  {desconto.idApartamento}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="w-full text-center rounded bg-slate-200 py-2 px-4 text-slate-400">
          {mostrarMensagemErro ? (
            <p className="text-red-500">
              Nenhum desconto encontrado.
            </p>
          ) : (
            <h1>Seus descontos recebidos serão exibidos aqui.</h1>
          )}
        </div>
      )}
    </main>
  );
}
