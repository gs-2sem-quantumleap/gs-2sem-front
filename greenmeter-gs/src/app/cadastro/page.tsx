"use client";

import { TipoMorador } from "@/types/types";
import Link from "next/link";
import { FormEventHandler, useState } from "react";

export default function FormCadastro() {
  const [morador, setMorador] = useState<TipoMorador>({
    nome: "",
    cpf: "",
    email: "",
    telefone: "",
  });

  const [mostrarMensagemErro, setMostrarMensagemErro] =
    useState<boolean>(false);

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

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (
      morador.telefone.length < 14 ||
      morador.cpf.length < 14 ||
      morador.email.length < 11 ||
      !morador.email.includes("@")
    ) {
      setMostrarMensagemErro(true);

      const moradorSemMascara: TipoMorador = {
        ...morador,
        cpf: morador.cpf.replaceAll(".", "").replace("-", ""),
        telefone: morador.telefone
          .replace("(", "")
          .replace(")", "")
          .replace("-", "")
          .replace(" ", ""),
      };

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
          &gt; Cadastro de Morador
        </p>
      </div>
      <h1 className="font-bold mb-2">
        <span className="text-musgo">Formulário</span> de Cadastro de Morador
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
              value={morador.nome}
              onChange={(e) => {
                setMorador({ ...morador, nome: e.target.value });
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
