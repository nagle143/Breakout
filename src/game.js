
import Ball from './ball.js';
import Bricks from './bricks.js';
import Paddle from './paddle.js';

export default class Game {
  constructor() {
    //Initialize Game Objects
    this.ball = new Ball();
    this.paddle = new Paddle();
    this.bricks = [];
    var color;
    for(var y = 0; y < 10; y++) {
      for(var x = 0; x < 12; x++) {
        color = Math.floor(Math.random()*3);
        switch (color) {
          case 0:
            this.bricks.push(new Bricks(x, y, 'purple'));
            break;
          case 1:
            this.bricks.push(new Bricks(x, y, 'violet'));
            break;
          case 2:
            this.bricks.push(new Bricks(x, y, 'pink'));
            break;
        }
      }
    }
    //for the future
    //this.lives = 3;

    //Back Buffer
    this.backBufferCanvas = document.createElement('canvas');
    this.backBufferCanvas.width = 1000;
    this.backBufferCanvas.height = 1000;
    this.backBufferContext = this.backBufferCanvas.getContext('2d');

    //Screen canvas
    this.screenBufferCanvas = document.createElement('canvas');
    this.screenBufferCanvas.width = 1000;
    this.screenBufferCanvas.height = 1000;
    document.body.appendChild(this.screenBufferCanvas);
    this.screenBufferContext = this.screenBufferCanvas.getContext('2d');

    //Binding functions
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.loop = this.loop.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    window.onkeydown = this.handleKeyDown;
    window.onkeyup = this.handleKeyUp;


    //Game loop
    this.interval = setInterval(this.loop, 10);
  }

  handleKeyDown(event) {
    event.preventDefault();
    switch (event.key) {
      case 'a':
      case 'A':
      case 'ArrowLeft':
        this.paddle.changeDirection('left');
        break;
      case 'd':
      case 'D':
      case 'ArrowRight':
        this.paddle.changeDirection('right');
        break;
    }
  }

  handleKeyUp(event) {
    event.preventDefault();
    this.paddle.changeDirection('static');
  }

  update() {
    this.ball.update();
    this.paddle.update();
  }

  render() {
    this.backBufferContext.fillStyle = 'black';
    this.backBufferContext.fillRect(0, 0, 1000, 1000);
    this.ball.render(this.backBufferContext);
    this.paddle.render(this.backBufferContext);
    for(var i = 0; i < this.bricks.length; i++) {
      this.bricks[i].render(this.backBufferContext);
    }
    this.screenBufferContext.drawImage(this.backBufferCanvas, 0 ,0);
  }

  loop() {
    this.update();
    this.render();
  }

}
