class Car {
  constructor(builder) {
    this.brand = builder.brand;
    this.model = builder.model;
    this.year = builder.year;
    this.engine = builder.engine;
    this.color = builder.color;
    this.gps = builder.gps;
  }

  showDetails() {
    console.log(
      `\nDetalhes do Carro:\n` +
      `  - ${this.year} ${this.brand} ${this.model}\n` +
      `  - Motor: ${this.engine}\n` +
      `  - Cor: ${this.color}\n` +
      `  - GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}

class CarBuilder {
  constructor() {
    this.brand = "";
    this.model = "";
    this.year = new Date().getFullYear();
    this.engine = "1.0";
    this.color = "Branco";
    this.gps = false;
  }

  setBrand(brand) {
    this.brand = brand;
    return this;
  }

  setModel(model) {
    this.model = model;
    return this;
  }

  setYear(year) {
    this.year = year;
    return this;
  }

  setEngine(engine) {
    this.engine = engine;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  withGps(hasGps) {
    this.gps = hasGps;
    return this;
  }

  build() {
    if (!this.brand || !this.model) {
      throw new Error("Marca e modelo são obrigatórios.");
    }
    return new Car(this);
  }
}

class CarDirector {
  constructSuv(builder) {
    return builder
      .setEngine("2.0 Turbo")
      .setColor("Cinza")
      .withGps(true)
      .build();
  }

  constructPopular(builder) {
    return builder
      .setEngine("1.0 Flex")
      .setColor("Prata")
      .withGps(false)
      .build();
  }
}

console.log("--- Construindo manualmente com Builder ---");
const car1 = new CarBuilder()
  .setBrand("Toyota")
  .setModel("Corolla")
  .setYear(2024)
  .setEngine("2.0")
  .setColor("Preto")
  .withGps(true)
  .build();

const car2 = new CarBuilder()
  .setBrand("Honda")
  .setModel("Civic")
  .setYear(2023)
  .setEngine("1.5 Turbo")
  .setColor("Prata")
  .build();

car1.showDetails();
car2.showDetails();

console.log("\n--- Construindo com o Diretor ---");
const director = new CarDirector();
const builder = new CarBuilder();

const jeepCompass = director.constructSuv(
  builder.setBrand("Jeep").setModel("Compass").setYear(2025)
);

const fiatMobi = director.constructPopular(
  new CarBuilder().setBrand("Fiat").setModel("Mobi").setYear(2024)
);

jeepCompass.showDetails();
fiatMobi.showDetais();

console.log("\n--- Mais 5 exemplos de carros ---");

const fordRanger = new CarBuilder()
  .setBrand("Ford")
  .setModel("Ranger")
  .setYear(2024)
  .setEngine("3.0 V6 Diesel")
  .setColor("Azul")
  .withGps(true)
  .build();

const teslaModelS = new CarBuilder()
  .setBrand("Tesla")
  .setModel("Model S")
  .setYear(2025)
  .setEngine("Elétrico Dual Motor")
  .setColor("Branco Perolizado")
  .withGps(true)
  .build();

const chevroletOnix = director.constructPopular(
  new CarBuilder()
    .setBrand("Chevrolet")
    .setModel("Onix")
    .setYear(2023)
);

const bmwSerie3 = new CarBuilder()
  .setBrand("BMW")
  .setModel("Série 3")
  .setYear(2025)
  .setEngine("2.0 Turbo")
  .setColor("Cinza Metálico")
  .withGps(true)
  .build();

const hyundaiCreta = director.constructSuv(
    new CarBuilder()
        .setBrand("Hyundai")
        .setModel("Creta")
        .setYear(2024)
);


fordRanger.showDetails();
teslaModelS.showDetails();
chevroletOnix.showDetails();
bmwSerie3.showDetails();
hyundaiCreta.showDetails();