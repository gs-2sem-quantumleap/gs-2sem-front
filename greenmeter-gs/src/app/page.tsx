"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TipoConsumoMorador, TipoConta } from "@/types/types";

export default function Home() {

  const [moradores, setMoradores] = useState<TipoConsumoMorador[]>([]);
  const [conta, setConta] = useState<TipoConta>({
    valorConta: 0,
    dataConta: new Date(),
    consumoKwh: 0,
    idApartamento: 0,
  });

  const chamadaApi = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/apartamentos/menoresGastos`,
        {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar dados");
      }

      const data: TipoConsumoMorador[] = await response.json();
      setMoradores(data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    chamadaApi();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataConta = new Date(conta.dataConta);

    try {
      const response = await fetch("http://localhost:8080/contas/", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...conta,
          dataConta: dataConta.toISOString(),
        }),
      });

      if (response.ok) {
        alert("Conta cadastrada com sucesso!");

        setConta({
          valorConta: 0,
          dataConta: new Date(),
          consumoKwh: 0,
          idApartamento: 0,
        });

        chamadaApi();
      }
    } catch (error) {
      console.error("Erro ao cadastrar conta:", error);
    }
  };
  

  return (
    <main className="">
      <div className="md:container h-full mx-auto px-[5%] py-[3vh] flex flex-col gap-5 text-xs sm:text-sm md:text-base">
        <div className="flex justify-between items-center gap-5">
          <h1 className="font-bold block sm:text-base md:text-lg">
            Ranking de Moradores
          </h1>
          <Link
            href="/buscar-conta"
            className="block text-right w-fit font-medium rounded bg-slate-300 px-3 py-1 sm:text-base md:text-lg"
          >
            Acesse o Ranking Detalhado
          </Link>
        </div>

        <table className="text-white flex flex-col gap-4">
          <tbody>
            {moradores.map((morador, index) => (
              <tr
                key={morador.numeroApartamento}
                className="bg-musgo px-3 py-2 items-center rounded grid grid-cols-12 md:px-6"
                style={{ marginBottom: "10px" }}
              >
                <td className="text-limao text-base md:text-xl font-bold col-span-1">
                  {index + 1}º
                </td>
                <td className="col-span-8">
                  <h1 className="font-semibold">{morador.nomeMorador}</h1>
                  <h2>Apartamento: {morador.numeroApartamento}</h2>
                </td>
                <td className="text-limao text-base font-bold col-span-3 text-right md:text-xl">
                  {morador.consumoTotalKwh.toFixed(2)} kWh
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="">
          <div className="mb-3">
            <h1 className="font-bold text-sm sm:text-base md:text-lg">
              <span className="text-musgo">Formulário</span> de Cadastro de
              Conta
            </h1>
            <p>Insira seus dados no formulário e cadastre sua conta</p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full bg-slate-200 rounded py-4 px-4"
          >
            <fieldset className="w-full grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-3 mb-3">
              <div className="flex flex-col justify-between">
                <label className="font-medium" htmlFor="idApartamento">
                  Número do Apartamento
                </label>
                <input
                  type="number"
                  id="idApartamento"
                  name="idApartamento"
                  value={conta.idApartamento || ""}
                  onChange={(e) =>
                    setConta({
                      ...conta,
                      idApartamento: parseInt(e.target.value, 10),
                    })
                  }
                  className="w-full p-1 rounded"
                />
              </div>
              <div className="flex flex-col justify-between">
                <label className="font-medium" htmlFor="dataConta">
                  Data da Conta
                </label>
                <input
                  type="date"
                  id="dataConta"
                  name="dataConta"
                  value={conta.dataConta.toISOString().split("T")[0]}
                  onChange={(e) =>
                    setConta({ ...conta, dataConta: new Date(e.target.value) })
                  }
                  className="w-full p-1 rounded"
                />
              </div>
              <div className="flex flex-col justify-between">
                <label className="font-medium" htmlFor="valorConta">
                  Valor da Conta
                </label>
                <input
                  type="number"
                  id="valorConta"
                  name="valorConta"
                  value={conta.valorConta || ""}
                  onChange={(e) =>
                    setConta({
                      ...conta,
                      valorConta: parseFloat(e.target.value),
                    })
                  }
                  className="w-full p-1 rounded"
                />
              </div>
              <div className="flex flex-col justify-between">
                <label className="font-medium" htmlFor="consumoKwh">
                  Consumo no período (kWh)
                </label>
                <input
                  type="number"
                  id="consumoKwh"
                  name="consumoKwh"
                  value={conta.consumoKwh || ""}
                  onChange={(e) =>
                    setConta({
                      ...conta,
                      consumoKwh: parseFloat(e.target.value),
                    })
                  }
                  className="w-full p-1 rounded"
                />
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
          <h1 className="font-bold block mb-1 sm:text-base md:text-lg">
            Sobre a nossa Solução
          </h1>
          <p className="text-xs sm:text-sm md:text-base">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </div>
      </div>
    </main>
  );
}
