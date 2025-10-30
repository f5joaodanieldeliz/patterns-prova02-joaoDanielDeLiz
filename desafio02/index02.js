class TV {
    turnOn() {
      console.log("TV ligada.");
    }
    turnOff() {
      console.log("TV desligada.");
    }
}

class Projetor {
    turnOn() {
      console.log("Projetor ligada.");
    }
    turnOff() {
      console.log("Projetor desligada.");
    }
}
  
class RemoteControl {
    constructor(Power) {
      this.Power = Power;
    }
  
    pressPowerButton(on) {
      if (on) this.Power.turnOn();
      else this.Power.turnOff();
    }
}

  const tv = new TV()
  const pro = new Projetor()
  
  const remote = new RemoteControl(tv);
  const remoteP = new RemoteControl(pro);
  remote.pressPowerButton(true);
  remote.pressPowerButton(false);
  remoteP.pressPowerButton(true);
  remoteP.pressPowerButton(false);

  