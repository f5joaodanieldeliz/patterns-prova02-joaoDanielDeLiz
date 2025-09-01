// // Classes concretas
// class DebitCard {
//   pay(type, amount) {
//     console.log(`Pagando com ${type} no valor de R$ ${amount}`);
//   }
// }

// class CreditCard {
//   pay(type, amount) {
//     console.log(`Pagando com ${type} no valor de R$ ${amount}`);
//   }
// }

// // Código do cliente
// function main() {
//   const type = "credit card";

//   let expenses;
//   if (type === "debit card") {
//     expenses = new DebitCard();
//   } else if (type === "credit card") {
//     expenses = new CreditCard();
//   }

---

// Interface / Estratégia
class PaymentStrategy {
  pay(amount) {
    throw new Error("Método pay precisa ser implementado");
  }
}

// Estratégias concretas
class DebitCard extends PaymentStrategy {
  pay(amount) {
    console.log(`Pagando com cartão de débito no valor de ${amount}`);
  }
}

class CreditCard extends PaymentStrategy {
  pay(amount) {
    console.log(`Pagando com cartão de crédito no valor de ${amount}`);
  }
}

// Factory Method
class PaymentFactory {
  static createPayment(type) {
    switch (type) {
      case "debit card":
        return new DebitCard();
      case "credit card":
        return new CreditCard();
      default:
        throw new Error("Tipo de pagamento inválido");
    }
  }
}

// Código do cliente
function main() {
  const type = "credit card"; // poderia vir do usuário, API, etc.
  const payment = PaymentFactory.createPayment(type);

  payment.pay("R$ 500,00");
}

main();

//Testes

// Teste unitário simulado (sem Jest, só console.log)
function testPayments() {
  const debit = PaymentFactory.createPayment("debit card");
  debit.pay("R$ 100,00"); // Esperado: "Pagando com cartão de débito no valor de R$ 100,00"

  const credit = PaymentFactory.createPayment("credit card");
  credit.pay("R$ 200,00"); // Esperado: "Pagando com cartão de crédito no valor de R$ 200,00"

  try {
    PaymentFactory.createPayment("pix"); // Deve lançar erro
  } catch (e) {
    console.log("Erro capturado corretamente:", e.message);
  }
}

testPayments();


//   expenses.pay(`${type}`, "R$ 500,00");
// }

// main();
