
import Ball from './ball.js';
import Bricks from './bricks.js';
import Paddle from './paddle.js';

export default class Game {
  constructor() {
    this.paused = false;
    this.over = false;
    this.lives = 3;
    this.ballRadius = 20;
    this.paddleWidth = 200;
    this.paddleHeight = 40;
    this.brickWidth = 100;
    this.brickHeight = 50;
    this.ballStartX = 490.0;
    this.ballStartY = 795.0;
    this.score = 0;
    //this.highScore = 0;
    this.bricksBroken = 0;
    this.brickAngleCheck = Math.atan((this.brickHeight*0.5)/(this.brickWidth*0.5));
    this.brickHyp = Math.sqrt(Math.pow(this.brickHeight*0.5, 2) + Math.pow(this.brickWidth*0.5, 2));
    this.paddleHyp = Math.sqrt(Math.pow(this.paddleHeight*0.5, 2) + Math.pow(this.paddleWidth*0.5, 2));
    //Initialize Game Objects
    this.ball = new Ball(this.ballStartX, this.ballStartY, this.ballRadius);
    this.paddle = new Paddle(this.paddleWidth, this.paddleHeight);
    this.bricks = [];
    this.debugg = [];
    //this.bricks.push(new Bricks(7, 7, this.brickWidth, this.brickHeight, 'purple'));
    this.createBricks();

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

    //Sounds
    this.pSound1 = new Audio("./Pad.wav");
    this.bSound1 = new Audio("./Brick1.wav");

    //Binding functions
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.loop = this.loop.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.ballPaddleCollision = this.ballPaddleCollision.bind(this);
    this.ballBrickCollision = this.ballBrickCollision.bind(this);
    this.addPoints = this.addPoints.bind(this);
    this.displayScore = this.displayScore.bind(this);
    this.removeBrick = this.removeBrick.bind(this);
    this.ballReset = this.ballReset.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.playHitPaddle = this.playHitPaddle(this);
    this.playHitBrick = this.playHitBrick(this);
    window.onkeydown = this.handleKeyDown;
    window.onkeyup = this.handleKeyUp;


    //Game loop
    this.interval = setInterval(this.loop, 10);
  }

  gameOver() {
    this.over = true;
    console.log("Game Over");
    this.screenBufferContext.font = "100px Times New Roman";
    this.screenBufferContext.fillStyle = "Black";
    this.screenBufferContext.strokeStyle = "Red";
    this.screenBufferContext.fillText("GAME OVER",  250, 500);
    this.screenBufferContext.strokeText("GAME OVER",  250, 500);
    //this.backBufferContext.fillText("LIVES: " + this.lives, 750, 40);
  }

  playHitPaddle() {
    this.pSound1.play();
  }

  playHitBrick() {
    this.bSound1.play();
  }

  createBricks() {
    var color;
    for(var y = 0; y < 8; y++) {
      for(var x = 0; x < 8; x++) {
        color = Math.floor(Math.random()*3);
        switch (color) {
          case 0:
            this.bricks.push(new Bricks(x, y, this.brickWidth, this.brickHeight, 'purple'));
            break;
          case 1:
            this.bricks.push(new Bricks(x, y, this.brickWidth, this.brickHeight, 'violet'));
            break;
          case 2:
            this.bricks.push(new Bricks(x, y, this.brickWidth, this.brickHeight, 'pink'));
            break;
        }
      }
    }
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
      case 'p':
      case 'P':
        this.paused = !this.paused;
        break;
    }
  }

  handleKeyUp(event) {
    event.preventDefault();
    this.paddle.changeDirection('static');
  }

  addPoints() {
    this.score += 5;
    if(this.highScore < this.score) {
      this.highScore = this.score;
    }
    return;
  }

  ballReset() {
    this.ball.setPosition(this.ballStartX, this.ballStartY);
    this.ball.setSpeed();
  }

  ballPaddleCollision() {
    var ballPosition = this.ball.getPosition();
    var paddlePosition = this.paddle.getPosition();
    var paddleCenter = {x: paddlePosition.x + this.paddleWidth * 0.5, y: paddlePosition.y + this.paddleHeight * 0.5};
    var deltaX = (paddleCenter.x - ballPosition.x);
    var deltaY = (paddleCenter.y - ballPosition.y);
    if(ballPosition.y > 1000) {
      this.ballReset();
      this.lives--;
    }
    //Check if it is even close
    if(Math.abs(deltaY) > this.ballRadius + this.paddleHeight * 0.5) {
      return;
    }
    if(Math.abs(deltaX) > this.ballRadius + this.paddleWidth * 0.5) {
       return;
    }
    var hyp = Math.sqrt(Math.pow((deltaX), 2) + Math.pow((deltaY), 2));
    var paddleDirection = this.paddle.getDirection();
    var ballspeed = this.ball.getSpeed();
    //Check for corners
    if(hyp - this.ballRadius <= this.paddleHyp) {
      if(paddleDirection === "left") {
        if(ballspeed.x < 0) {
          this.ball.changeSpeedX(1.20);
          this.ball.changeSpeedY(-1.05);
        }
        else if(ballspeed.x > 0) {
          this.ball.changeSpeedX(0.80);
          this.ball.changeSpeedY(-1.15);
        }
      }
      else if(paddleDirection === "right") {
        if(ballspeed.x < 0) {
          this.ball.changeSpeedX(0.80);
          this.ball.changeSpeedY(-1.15);
        }
        else if(ballspeed.x > 0) {
          this.ball.changeSpeedX(1.20);
          this.ball.changeSpeedY(-1.05);
        }
      }
      else {
        this.ball.changeSpeedY(-1);
      }
      this.pSound1.play();
    }
    //Checks if it strikes a surface cleanly
    else if(ballPosition.y + this.ballRadius > paddlePosition.y &&
      ballPosition.x + this.ballRadius > paddlePosition.x && ballPosition.x - this.ballRadius < paddlePosition.x + this.paddleWidth) {
        var theta = Math.asin(deltaY/hyp);
        if(theta >= this.brickAngleCheck && ballspeed.y > 0) {
          if(paddleDirection === "left")
          {
            if(ballspeed.x < 0) {
              this.ball.changeSpeedX(1.10);
              this.ball.changeSpeedY(-1.05);
            }
            else if(ballspeed.x > 0) {
              this.ball.changeSpeedX(0.90);
              this.ball.changeSpeedY(-0.95);
            }
          }
          else if (paddleDirection === "right") {
            if(ballspeed.x > 0) {
              this.ball.changeSpeedX(1.10);
              this.ball.changeSpeedY(-1.05);
            }
            else if(ballspeed.x < 0) {
              this.ball.changeSpeedX(0.90);
              this.ball.changeSpeedY(-0.95);
            }
          }
          else {
            this.ball.changeSpeedY(-1);
          }
        }
        else {
          //Left side Collision
          if(deltaX > 0 && ballspeed.x > 0) {
            this.ball.changeSpeedX(-1);
          }
          //Right Side
          else if(deltaX < 0 && ballspeed.x < 0) {
            this.ball.changeSpeedX(-1);
          }
        }
      this.pSound1.play();
    }
  }

  ballBrickCollision() {
    var ballPosition = this.ball.getPosition();
    var brickPosition;
    var deltaX;
    var deltaY;
    var brickCenter;
    var hyp;
    var ballspeed = this.ball.getSpeed();
    this.bricks.forEach(brick => {
      brickPosition = brick.getPosition();
      brickCenter = {x: brickPosition.x + this.brickWidth * 0.5, y: brickPosition.y + this.brickHeight * 0.5};
      deltaX = (brickCenter.x - ballPosition.x);
      deltaY = (brickCenter.y - ballPosition.y);
      hyp = Math.sqrt(Math.pow((deltaX), 2) + Math.pow((deltaY), 2));
      if(Math.abs(deltaY) > this.ballRadius + this.brickHeight * 0.5) {
        return;
      }
      if(Math.abs(deltaX) > this.ballRadius + this.brickWidth * 0.5) {
         return;
      }

      //Corner Collision Check
      if(hyp - this.ballRadius <= this.brickHyp) {
        this.ball.changeSpeedY(-1);
        this.removeBrick(brick);
        this.bSound1.play();
      }
      //Brick Collision check
      else if(ballPosition.y + this.ballRadius >= brickPosition.y && ballPosition.y - this.ballRadius <= brickPosition.y + this.brickHeight &&
        ballPosition.x + this.ballRadius >= brickPosition.x && ballPosition.x - this.ballRadius <= brickPosition.x + this.brickWidth) {
          var theta = Math.asin(deltaY/hyp);
          //Hit Top

          if(theta >= this.brickAngleCheck && ballspeed.y > 0) {
            this.ball.changeSpeedY(-1);
          }
          //Hit Bottom
          else if(theta <= -this.brickAngleCheck && ballspeed.y < 0) {
            this.ball.changeSpeedY(-1);
          }
          //Or Hit side
          else {
            //Left side Collision
            if(deltaX > 0 && ballspeed.x > 0) {
              this.ball.changeSpeedX(-1);
            }
            //Right Side
            else if(deltaX < 0 && ballspeed.x < 0) {
              this.ball.changeSpeedX(-1);
            }
          }
        this.removeBrick(brick);
        this.bSound1.play();
      }
    });
  }

  removeBrick(brick) {
    var index = this.bricks.indexOf(brick);
    if(index > -1) {
      this.bricks.splice(index, 1);
    }
    this.bricksBroken++;
    this.addPoints();
  }

  displayScore() {
    this.backBufferContext.fillStyle = 'Indigo';
    this.backBufferContext.fillRect(0, 0, 1000, 50);
    this.backBufferContext.font = "45px Lucida Console";
    this.backBufferContext.fillStyle = 'Black';
    this.backBufferContext.fillText("SCORE: " + this.score + " BRICKS: " + this.bricksBroken, 0, 40);
    this.backBufferContext.fillText("LIVES: " + this.lives, 750, 40);
  }

  update() {
    this.ballBrickCollision();
    this.ball.update();
    this.paddle.update();
    this.ballPaddleCollision();
    if(this.bricks.length === 0) {
      this.createBricks();
      this.ballReset();
    }
    if(this.lives === 0) {
      this.over = true;
    }
  }

  render() {
    this.backBufferContext.fillStyle = 'black';
    this.backBufferContext.fillRect(0, 0, 1000, 1000);
    this.displayScore();
    this.ball.render(this.backBufferContext);
    this.paddle.render(this.backBufferContext);
    for(var i = 0; i < this.bricks.length; i++) {
      this.bricks[i].render(this.backBufferContext);
    }
    this.screenBufferContext.drawImage(this.backBufferCanvas, 0 ,0);
    if(this.over) {
      this.gameOver();
    }
  }

  loop() {
    if(!this.paused && !this.over) {
      this.update();
      this.render();
    }
  }

}
