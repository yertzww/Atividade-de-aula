import { ImpostoEletronico } from "../imposto/ImpostoEletronico";
import { PagamentoPix } from "../pagamento/PagamentoPix";
import { ServicoEmail } from "../email/ServicoEmail";

export class PedidoService {
    constructor(
        private imposto: ImpostoEletronico,
        private pagamento: PagamentoPix,
        private email: ServicoEmail
    ) {}

    processarPedido(valor: number, quantidade: number, contato: string): void {
        const totalComImposto = this.imposto.calcular(valor * quantidade);
        
        // Chama o processamento do pagamento
        this.pagamento.processar(totalComImposto);
        
        // Envia o e-mail (Corrigido: apenas um '$')
        this.email.enviar(contato, `Seu pedido de R$ ${totalComImposto.toFixed(2)} foi processado!`);
    }
}