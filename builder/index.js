//Produto
class Car {
  constructor(brand, model, year, engine, color, gps) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = engine;
    this.color = color;
    this.gps = gps;
  }

  showDetails() {
    console.log(
      `${this.year} 
      ${this.brand} 
      ${this.model} 
      - Motor: ${this.engine}, 
      Cor: ${this.color}, 
      GPS: ${this.gps ? "Sim" : "Não"}`
    );
  }
}

// Builder
class CarroBuilder {
  constructor() {
    this.carro = new Car();
  }

  setbrand(brand) {
    this.carro.brand = brand;
    return this;
  }

  setmodel(model) {
    this.carro.model = model;
    return this;
  }

  setyear(year) {
    this.carro.year = year;
    return this;
  }

  setengine(engine) {
    this.carro.engine = engine;
    return this;
  }

  setcolor(color) {
    this.carro.color = color;
    return this;
  }

  setgps(gps) {
    this.carro.gps = gps;
    return this;
  }

  build() {
    return this.carro;
  }
}

// Director → monta configurações pré-definidas
class CarDirector {
  static buildCarro1() {
    return new CarroBuilder()
      .setbrand("Fiat")
      .setmodel("Uno")
      .setyear("1999")
      .setengine("v1")
      .setcolor("branco papel")
      .setgps(false)
      .build();
  }

  static buildCarro2() {
    return new CarroBuilder()
      .setbrand("Porche")
      .setmodel("911")
      .setyear("2005")
      .setengine("v8")
      .setcolor("vermelho rose")
      .setgps(true)
      .build();
  }

  static buildCarro3() {
    return new CarroBuilder()
      .setbrand("Honda")
      .setmodel("Civic")
      .setyear(2023)
      .setengine("1.5 Turbo")
      .setcolor("Prata")
      .setgps(false)
      .build();
  }
}

// Uso
const corporativo = CarDirector.buildCarro1();
const top = CarDirector.buildCarro2();
const generico = CarDirector.buildCarro3();
const expecial = new CarroBuilder().setcolor("marrom turquesa").setbrand("mclaren").build();

corporativo.showDetails();
top.showDetails();
generico.showDetails();
expecial.showDetails();
