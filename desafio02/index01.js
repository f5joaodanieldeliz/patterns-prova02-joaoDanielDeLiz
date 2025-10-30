class TaskSystemItem {
    showDetails() {
      throw new Error("Método abstrato!");
    }
  }


class Task extends TaskSystemItem {
    constructor(name) {
      super();
      this.name = name;
    }
  
    showDetails() {
      console.log(`Tarefa ${this.name}`);
    }
}
  
class Project extends TaskSystemItem {
    constructor(name) {
      super();
      this.name = name;
      this.tasks = [];
    }
  
    add(task) {
      this.tasks.push(task);
    }
  
    showDetails(indent = "") {
      console.log(`Projeto: ${this.name}`);
      this.tasks.forEach((task) => task.showDetails(indent + "   "));
    }
}
  
  // Cliente
  const t1 = new Task("Escrever documentação");
  const t2 = new Task("Fazer testes");
  const t3 = new Task("Fazer Refatura");

  const Refutar = new Project("Refatura");
  Refutar.add(t3)
  
  const p = new Project("Lançamento v1.0");

 
  p.add(t1);
  p.add(t2);
  p.add(Refutar)
  
  p.showDetails();
  