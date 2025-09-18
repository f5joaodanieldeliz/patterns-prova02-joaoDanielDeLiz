class Lanche {
    constructor(pao, carne, queijo, salada, molho) {
      this.pao = pao;
      this.carne = carne;
      this.queijo = queijo;
      this.salada = salada;
      this.molho = molho;
    }
  
    showConfig() {
      console.log("Lanche:", {
        pao: this.pao,
        carne: this.carne,
        queijo: this.queijo,
        salada: this.salada,
        molho: this.molho,
      });
    }
  }
  
  // Builder
  class LancheBuilder {
    constructor() {
      this.lanche = new Lanche();
    }
  
    setPao(pao) {
      this.lanche.pao = pao;
      return this;
    }
  
    setCarne(carne) {
      this.lanche.carne = carne;
      return this;
    }
  
    setQueijo(queijo) {
      this.lanche.queijo = queijo;
      return this;
    }
  
    setSalada(salada) {
      this.lanche.salada = salada;
      return this;
    }
  
    setMolho(molho) {
      this.lanche.molho = molho;
      return this;
    }
  
    // Faltava isso!
    build() {
      return this.lanche;
    }
  }
  
  
  class LanchinhodaTardeDirector {
    static buildLancheTarde() {
      return new LancheBuilder()
        .setPao("Pãozinho Italiano")
        .setCarne("Franguinho Frito")
        .setQueijo("Suiço blue")
        .setSalada("Alface Tomate")
        .setMolho("Mayo")
        .build();
    }
  }
  
  const lanche1 = LanchinhodaTardeDirector.buildLancheTarde();
  
  const janta = new LancheBuilder().setCarne("frango").build();
  
  lanche1.showConfig();
  janta.showConfig();