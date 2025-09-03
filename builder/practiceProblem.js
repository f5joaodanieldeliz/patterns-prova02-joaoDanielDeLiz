class Car {
  constructor() {
    this.brand = null;
    this.model = null;
    this.year = null;
    this.engine = null;
    this.color = null;
    this.gps = false;
  }

  showDetails() {
    console.log(`
--------------------
Detalhes do Carro:
  Ano: ${this.year} 
  Marca: ${this.brand} 
  Modelo: ${this.model} 
  - Motor: ${this.engine}
  - Cor: ${this.color}
  - GPS: ${this.gps ? "Sim" : "Não"}
--------------------`);
  }
}

class CarBuilder {
  constructor() {
    this.car = new Car();
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setYear(year) {
    this.car.year = year;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  addGPS() {
    this.car.gps = true;
    return this;
  }

  build() {
    if (!this.car.brand || !this.car.model || !this.car.year) {
      throw new Error("Marca, modelo e ano são obrigatórios para construir um carro.");
    }
    return this.car;
  }
}

class CarDirector {
  static buildCorollaCompleto() {
    return new CarBuilder()
      .setBrand("Toyota")
      .setModel("Corolla")
      .setYear(2024)
      .setEngine("2.0 Flex")
      .setColor("Preto")
      .addGPS()
      .build();
  }

  static buildCivicIntermediario() {
    return new CarBuilder()
      .setBrand("Honda")
      .setModel("Civic")
      .setYear(2023)
      .setEngine("1.5 Turbo")
      .setColor("Prata")
      .build();
  }

  static buildSuvTopDeLinha() {
    return new CarBuilder()
      .setBrand("Jeep")
      .setModel("Compass")
      .setYear(2025)
      .setEngine("1.3 Turbo Flex")
      .setColor("Cinza Granite")
      .addGPS()
      .build();
  }

  static buildMercedesLuxo() {
    return new CarBuilder()
      .setBrand("Mercedes-Benz")
      .setModel("Classe C")
      .setYear(2025)
      .setEngine("2.0 Turbo Híbrido")
      .setColor("Azul Spectral")
      .addGPS()
      .build();
  }
}

console.log("### Construindo carros manualmente com o Builder ###");

const car1_corolla = new CarBuilder()
  .setYear(2024)
  .setBrand("Toyota")
  .setModel("Corolla")
  .setEngine("2.0")
  .setColor("Preto")
  .addGPS()
  .build();

const car2_mustang = new CarBuilder()
  .setBrand("Ford")
  .setModel("Mustang GT")
  .setYear(2024)
  .setEngine("5.0 V8")
  .setColor("Vermelho Racing")
  .addGPS()
  .build();
  
const car3_mobi = new CarBuilder()
  .setBrand("Fiat")
  .setModel("Mobi Like")
  .setYear(2025)
  .setEngine("1.0 Fire")
  .setColor("Branco Banchisa")
  .build();

car1_corolla.showDetails();
car2_mustang.showDetails();
car3_mobi.showDetails();


console.log("\n### Usando o Director para obter carros pré-configurados ###");

const car4_civic = CarDirector.buildCivicIntermediario();
const car5_compass = CarDirector.buildSuvTopDeLinha();
const car6_mercedes = CarDirector.buildMercedesLuxo();


car4_civic.showDetails();
car5_compass.showDetails();
car6_mercedes.showDetails();