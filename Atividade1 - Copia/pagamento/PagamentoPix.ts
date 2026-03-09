
export class PagamentoPix {
    processar(valor: number): void {
        console.log(`Pagamento de R$ ${valor.toFixed(2)} realizado via Pix.`);
    }
}