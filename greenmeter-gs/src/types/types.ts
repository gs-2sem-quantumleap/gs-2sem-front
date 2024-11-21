export type TipoMorador = {
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
} 

export type TipoConsumoMorador = {
    nomeMorador: string;
    numeroApartamento: number;
    consumoTotalKwh: number;
}

export type TipoConta = {
    consumoKwh: number;
    dataConta: DataConta;
    idApartamento: number;
    idContaDeEnergia: number;
    valorConta: number;
}

export type TipoContaInput = {
    consumoKwh: number;
    dataConta: Date;
    idApartamento: number;
    valorConta: number;
}

export type TipoContaResponse = {
    consumoKwh: number;
    dataConta: [number, number, number];
    idApartamento: number;
    idContaDeEnergia: number;
    valorConta: number;
}
  

export type DataConta = {
    dia: number;
    mes: number;
    ano: number;
}