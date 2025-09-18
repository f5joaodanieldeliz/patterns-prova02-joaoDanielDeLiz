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

class Transporteactory {
  static types = {
    bike: Bicicleta,
    patinete:  Patinete,
    bus : Onibus
  };

  static createTransporte(type) {
    const TransporteClass = this.types[type];
    if (!TransporteClass) {
      throw new Error("Tipo de notificação ainda não suportado");
    }
    return new TransporteClass();
  }
}

const tipoT= "onibus";
const transporteT = TransporteFactory.createTransporte(tipo);

console.log(transporteT.move());
