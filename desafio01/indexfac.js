class Bicicleta {
  move() {
    return "Pedalando a bicicleta no pátio da UNISATC";
  }
}

class Patinete {
  move() {
    return "Andando de patinete pelo estacionamento da UNISATC";
  }
}

class Onibus {
  move() {
    return "Andando de ônibus e chegando na UNISATC";
  }
}

class TransporteFactory {
  static types = {
    bike: Bicicleta,
    patinete:  Patinete,
    bus : Onibus
  };

  static createTransporte(type) {
    const TransporteClass = this.types[type];
    if (!TransporteClass) {
      throw new Error("Tipo de transporte ainda não suportado");
    }
    return new TransporteClass();
  }
}

const tipoT= "Carro";
const transporteT = TransporteFactory.createTransporte(tipoT);

console.log(transporteT.move());
