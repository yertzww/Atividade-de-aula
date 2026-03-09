import { ProcessadorPagamento } from "./ProcessadorPagamento";

export class PagamentoCriptomoeda implements ProcessadorPagamento {

    pagar(valor: number): void {

        console.log(`Pagamento com criptomoeda: R$ ${valor}`);

    }

}