"use client";
import { TipoContaInput } from "@/types/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditarConta() {
  const [conta, setConta] = useState<TipoContaInput>({
    valorConta: 0,
    dataConta: new Date(),
    consumoKwh: 0,
    idApartamento: 0,
  });




  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataConta = new Date(conta.dataConta);
    const dadosEnvio: TipoContaInput = {
        ...conta,
        dataConta: dataConta,
    }

    console.log(dadosEnvio);
    // try {
    //   const response = await fetch("http://localhost:8080/contas/", {
    //     method: "POST",
    //     credentials: "include",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       ...conta,
    //       dataConta: dataConta.toISOString(),
    //     }),
    //   });

    //   if (response.ok) {
    //     alert("Conta cadastrada com sucesso!");

    //     setConta({
    //       valorConta: 0,
    //       dataConta: new Date(),
    //       consumoKwh: 0,
    //       idApartamento: 0,
    //     });
    //   }
    // } catch (error) {
    //   console.error("Erro ao cadastrar conta:", error);
    // }
  };

  const params = useParams<{ id: string }>();

  useEffect(() => {
    console.log(params);
    const fetchConta = async () => {
      try {
        const response = await fetch(`http://localhost:8080/contas/${params.id}`);
        const data = await response.json();
        setConta(data);
      } catch (error) {
        console.error("Erro ao buscar conta:", error);
      }
    };
    fetchConta();

  }, [params]);


  return (
    <main className="md:container mx-auto px-[5%] py-[3vh] text-xs sm:text-sm md:text-base h-[70vh] flex flex-col gap-[5vh]">
      <div className="text-start w-full mb-2">
        <p>
          <Link href="/">
            <span className="text-musgo">Home</span>
          </Link>{" "}
          &gt;
          <Link href="/buscar-conta">
            <span className="text-musgo"> Visualizar dados</span>
          </Link>{" "}
          &gt; Editar conta de energia
        </p>
      </div>
      <div className="flex flex-col gap-[1vh]">
        <div className="flex justify-between mb-3">
          <h1 className="font-semibold text-sm sm:text-base md:text-lg">
            Edite sua conta de energia
          </h1>
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
                value={
                    conta.dataConta
                      ? new Date(conta.dataConta).toISOString().split("T")[0]
                      : ""
                }              
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
    </main>
  );
}
