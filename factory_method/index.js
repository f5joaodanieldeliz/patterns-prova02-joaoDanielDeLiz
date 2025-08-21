// // Classes concretas
// class EmailNotification {
//   send(message) {
//     console.log(`Enviando ${message}`);
//   }
// }

// class SMSNotification {
//   send(message) {
//     console.log(`Enviando ${message}`);
//   }
// }

// class PushNotification {
//   send(message) {
//     console.log(`Enviando ${message}`);
//   }
// }

// // Usando Factory Method
// class NotificationFactory {
//   static types = {
//     email: EmailNotification,
//     sms: SMSNotification,
//     push: PushNotification,
//   };

//   static createNotification(type) {
//     const NotificationClass = this.types[type];
//     if (!NotificationClass) {
//       throw new Error("Tipo de notificação ainda não suportado");
//     }
//     return new NotificationClass();
//   }
// }

// // Código do cliente
// function main() {
//   const notifications = ["email", "sms", "push", "whatsapp"];
//   try {
//     notifications.forEach((type) => {
//       const notification = NotificationFactory.createNotification(type);
//       notification.send(
//         `${type}... Pix recebido de Ugioni no valor de R$ 100,00`
//       );
//     });
//   } catch (err) {
//     console.error("Erro ao enviar...", err.message);
//   }
// }

// main();
---
interface INotification {
    send(message: string): void
}

class EmailNotification implements INotification {
  send(message: string) {
    console.log(`Enviando Email: ${message}`);
  }
}

class SMSNotification implements INotification {
  send(message: string) {
    console.log(`Enviando SMS: ${message}`);
  }
}

class NotificationFactory {
    notificationType = {
        sms: SMSNotification,
        email: EmailNotification
    }

    create(teste: keyof typeof this.notificationType) {
        return new this.notificationType[teste]
    }
}

const main = () => {
    const notification = new NotificationFactory().create('email')

    notification.send('Olá tudo certo!')
}

main()
