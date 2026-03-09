import { ProcessadorPagamento } from "./ProcessadorPagamento";

export class PagamentoCartao implements ProcessadorPagamento {

    pagar(valor: number): void {

        console.log(`Processando cartão: R$ ${valor}`);

    }

}