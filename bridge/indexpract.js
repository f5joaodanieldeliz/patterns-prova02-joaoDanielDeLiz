// Implementação: Renderizadores (podem variar independente das formas)
class AudioRenderer {
    renderShape(shape) {
      console.log(`Ouvido ${shape}`);
    }
  }
  
  class VideoRenderer {
    renderShape(shape) {
      console.log(`Vendo ${shape}`);
    }
  }
  
  // Abstração: Forma (usa um renderizador)
  class Shape {
    constructor(renderer) {
      this.renderer = renderer;
    }
  }
  
  class AudioWindows extends Shape {
    draw() {
      this.renderer.renderShape("Ouvindo audio no Windows");
    }
  }
  
  class AudioLinux extends Shape {
    draw() {
      this.renderer.renderShape("Ouvindo audio no Linux");
    }
  }
  
  class VideoWindows extends Shape {
    draw() {
      this.renderer.renderShape("Reproduzindo vídeo no Windows");
    }
  }
  
  class VideoLinux extends Shape {
    draw() {
      this.renderer.renderShape("Reproduzindo vídeo no Linux");
    }
  }
  
  // Cliente
  const a1 = new AudioWindows(new AudioRenderer());
  a1.draw();
  
  const v1 = new VideoLinux(new VideoRenderer());
  v1.draw();
  