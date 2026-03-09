export class ServicoEmail {

    enviar(contato: string, mensagem: string): void {
        console.log(`Enviando e-mail para ${contato}: ${mensagem}`);
    }
}