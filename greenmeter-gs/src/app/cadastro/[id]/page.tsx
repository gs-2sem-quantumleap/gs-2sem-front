"use client";

import { TipoMorador } from "@/types/types";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";

export default function EditarUsuario() {
  const params = useParams<{ id: string }>();

  const [mostrarMensagemErro, setMostrarMensagemErro] =
    useState<boolean>(false);

  const [idMorador, setIdMorador] = useState<number>(0);

  const [morador, setMorador] = useState<TipoMorador>({
    nomeMorador: "",
    cpf: "",
    email: "",
    telefone: "",
  });

  const handleChangeCpf: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    setMorador({ ...morador, cpf: value });
  };

  const handleChangeTelefone: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");

    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d)/, "($1) $2");
      value = value.replace(/(\d{4})(\d)/, "$1-$2");
    } else {
      value = value.replace(/(\d{2})(\d)/, "($1) $2");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
    }

    setMorador({ ...morador, telefone: value });
  };

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/moradores/buscarPorCpf/${params.id}`
        );
        const data = await response.json();
        setIdMorador(data.idMorador);
        setMorador({
          nomeMorador: data.nomeMorador || "",
          cpf: data.cpf || "",
          email: data.email || "",
          telefone: data.telefone || "",
        });
      } catch (error) {
        console.error("Erro ao buscar o morador.", error);
      }
    };
    fetchUsuario();
  }, [params]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();


    if (
      morador.telefone.length < 14 ||
      morador.cpf.length < 14 ||
      morador.email.length < 11 ||
      !morador.email.includes("@")
    ) {
      setMostrarMensagemErro(true);
    } else {
      setMostrarMensagemErro(false);
      const moradorSemMascara: TipoMorador = {
        ...morador,
        cpf: morador.cpf.replaceAll(".", "").replace("-", ""),
        telefone: morador.telefone
          .replace("(", "")
          .replace(")", "")
          .replace("-", "")
          .replace(" ", ""),
      };

      try {
        const response = await fetch(`http://localhost:8080/moradores/${idMorador}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          // Fazendo o destructuring do cliente, pois o método POST não exige idCliente, que está presente em tipoCliente
          body: JSON.stringify(moradorSemMascara),
        })

        if(response.ok){
            setMostrarMensagemErro(false);
        } else {
            setMostrarMensagemErro(true);
        }

      } catch (error) {
        console.error("Erro ao atualizar o cliente.", error);
      }

      console.log(moradorSemMascara);
    }
  };

  return (
    <main className="md:container mx-auto px-[5%] py-[3vh]  gap-5 text-xs sm:text-sm md:text-base h-[70vh]">
      <div className="text-start w-full mb-2">
        <p>
          <Link href="/">
            <span className="text-musgo">Home</span>
          </Link>{" "}
          &gt;
          <Link href="" className="text-musgo">
            {" "}
            Visualizar dados
          </Link>
          &gt; Editar dados
        </p>
      </div>
      <h1 className="font-bold mb-2">
        <span className="text-musgo">Formulário</span> para Editar Dados do
        Morador
      </h1>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-slate-200 rounded py-4 px-4"
      >
        <fieldset className="w-full grid grid-cols-2 grid-rows-2 gap-x-5 gap-y-3 mb-3">
          <div className="flex flex-col justify-between">
            <label className="font-medium" htmlFor="nome">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={morador.nomeMorador}
              onChange={(e) => {
                setMorador({ ...morador, nomeMorador: e.target.value });
              }}
              className="w-full p-1 px-2 rounded"
              placeholder="Insira seu nome"
              required
              minLength={3}
            />
          </div>
          <div className="flex flex-col justify-between">
            <label className="font-medium" htmlFor="cpf">
              CPF
            </label>
            <input
              type="text"
              id="cpf"
              name="cpf"
              value={morador.cpf}
              onChange={handleChangeCpf}
              className="w-full p-1 px-2 rounded"
              placeholder="123.456.789-10"
              maxLength={14}
              minLength={14}
              required
            />
          </div>
          <div className="flex flex-col justify-between">
            <label className="font-medium" htmlFor="numero-apartamento">
              E-mail
            </label>
            <input
              type="text"
              id="numero-apartamento"
              value={morador.email}
              onChange={(e) => {
                setMorador({ ...morador, email: e.target.value });
              }}
              className="w-full p-1 px-2 rounded"
              placeholder="email@dominio.com"
              minLength={11}
              required
            />
          </div>
          <div className="flex flex-col justify-between">
            <label className="font-medium" htmlFor="numero-apartamento">
              Telefone
            </label>
            <input
              type="text"
              id="numero-apartamento"
              value={morador.telefone}
              onChange={handleChangeTelefone}
              className="w-full p-1 px-2 rounded"
              placeholder="(00) 12345-7689"
              maxLength={15}
              minLength={14}
              required
            />
          </div>
        </fieldset>
        <button className="px-3 py-1 bg-musgo rounded text-limao font-semibold ">
          Enviar
        </button>
      </form>

      {mostrarMensagemErro ? (
        <p className="font-semibold text-red-600 block w-full text-center mt-3">
          Erro no envio do formulário. Verifique os valores inseridos e tente
          novamente.
        </p>
      ) : null}
    </main>
  );
}
