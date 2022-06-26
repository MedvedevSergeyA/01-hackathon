import { Module } from '../core/module';
import { random } from '../utils';

export class ShapeModule extends Module {
  constructor(type, text) {
    super(type, text);
  }

  trigger() {
    let canvas = document.querySelector('canvas');

    const addCanvas = () => {
      canvas = document.createElement('canvas');
      document.createElement('canvas');
      const canvasWidth = document.documentElement.clientWidth;
      const canvasHeight = document.documentElement.clientHeight;

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      const shape = canvas.getContext('2d');
      shape.fillStyle = document.body.style.backgroundColor;

      const randomShape = random(0, 1);

      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }

      if (randomShape === 0) {
        shape.beginPath();
        shape.rect(
          random(0, canvasWidth - 100),
          random(0, canvasHeight - 100),
          random(50, 100),
          random(50, 100)
        );

        shape.fillStyle = color;
        shape.fill();
      } else if (randomShape === 1) {
        shape.beginPath();
        shape.arc(
          random(50, canvasWidth - 50),
          random(50, canvasHeight - 50),
          random(20, 50),
          0,
          2 * Math.PI
        );

        shape.fillStyle = color;
        shape.fill();
      }

      document.body.append(canvas);
    };

    const delCanvas = () => {
      canvas.remove();
    };

    if (!document.querySelector('canvas')) {
      addCanvas();
    } else {
      delCanvas();
      addCanvas();
    }
  }
}
