console.log("=== TESTE: O CODIGO COMEÇOU A RODAR ===");
import { ImpostoEletronico } from "./imposto/ImpostoEletronico";
import { PagamentoPix } from "./pagamento/PagamentoPix";
import { ServicoEmail } from "./email/ServicoEmail";
import { PedidoService } from "./service/PedidoService";

const imposto = new ImpostoEletronico();

const pagamento = new PagamentoPix();

const email = new ServicoEmail();

const pedido = new PedidoService(imposto, pagamento, email);

pedido.processarPedido(100, 2, "cliente@email.com");