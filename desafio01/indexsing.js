class Config {
  constructor() {
    if (Config.instance) {
      return Config.instance;
    }

    this.settings = {};
    Config.instance = this; 
  }

  setConfig(key, value) {
    this.settings[key] = value;
  }

  getConfig(key) {
    return this.settings[key];
  }
}

const test1 = new Config();
test1.setConfig("lang", "pt-BR");

const test2 = new Config();
console.log(test2.getConfig("lang")); 
console.log(test1 === test2); // true