class CardFactory {
    static types = {
        debit: DebitCard,
        credit: CreditCard
    };

    static createPayment(types) {
        const PaymentClass = this.types[type];
        if (!PaymentClass) {
        throw new Error("Tipo de pagamento ainda não suportado");
        }
        return new PaymentClass();
    }
}

// Código do cliente
function main() {
  const payments = ["debit", "credit"];

  try {
    payments.forEach((type) => {
      const card = CardFactory.createPayment(type);
      card.pay(type, "R$ 500,00");
    });
  } catch (err) {
    console.error("Erro ao pagar...", err.message);
  }
}

main();