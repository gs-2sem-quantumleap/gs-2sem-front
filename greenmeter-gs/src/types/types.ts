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
    valorConta: number;
    dataConta: Date;
    consumoKwh: number;
    idApartamento: number;
}
  