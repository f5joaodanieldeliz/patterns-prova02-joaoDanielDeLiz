// Interface interna do sistema
class Notifier {
    send(message) {
      console.log(`Notificação enviada: ${message}`);
    }
  }
  
  // Biblioteca externa (incompatível com o sistema)
  class SMSService {
    sendSMS(text) {
      console.log(`SMS enviado: ${text}`);
    }
  }
  
  class ExternalSMSAdapter extends Notifier {
    constructor(externalService) {
      super();
      this.externalService = externalService;
    }
  
    processNotifier(amount) {
      // Adaptando o método
      this.externalService.sendSMS(amount);
    }
  }
  
  // Cliente
  function notifyUser(notifier, message) {
    notifier.processNotifier(message);
  }
  
  // Testando com o Notifier interno
  const emailNotifier = new Notifier();
  notifyUser(emailNotifier, "Bem-vindo ao sistema!");
  
  // Tentando usar o SMSService diretamente (vai falhar)
  const externalService = new SMSService();
  const adaptedService = new ExternalSMSAdapter(externalService);
  payOrder(adaptedService, 200);
  