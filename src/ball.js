

export default class Ball {
  constructor(x, y, radius) {
    //Position
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.Xspeed;
    this.Yspeed;
    this.setSpeed();
    this.XspeedLimit = 6;
    this.YspeedLimit = 6;
    //Binding class functions
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.getPosition = this.getPosition.bind(this);
    this.getSpeed = this.getSpeed.bind(this);
    this.changeSpeedY = this.changeSpeedY.bind(this);
    this.changeSpeedX = this.changeSpeedX.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setSpeed = this.setSpeed.bind(this);
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
  setSpeed() {
    //X Direction
    this.Xspeed = Math.random() * 4 + 1;
    //Y Direction
    this.Yspeed = -2.5;
  }
  getPosition() {
    return {x: this.x, y: this.y};
  }
  getSpeed() {
    return {x: this.Xspeed, y: this.Yspeed};
  }

  changeSpeedY(accel) {
    this.Yspeed *= accel;
    if(Math.abs(this.Yspeed) > this.YspeedLimit) {
      this.Yspeed = this.YspeedLimit;
    }
    if(Math.abs(this.Yspeed) < 0.5) {
      this.Yspeed = -0.5;
    }
  }

  changeSpeedX(accel) {
    this.Xspeed *= accel;
    if(Math.abs(this.Xspeed) > this.XspeedLimit) {
      this.Xspeed = this.XspeedLimit;
    }
  }

  update(x, y) {
    var edge = 1000 - this.radius;
    //Edge of the Screen Checks
    if(this.x >= edge && this.Xspeed > 0) {
      this.Xspeed = -this.Xspeed
    }
    if(this.x <= this.radius && this.Xspeed < 0) {
      this.Xspeed = -this.Xspeed;
    }
    if(this.y <= this.radius + 50) {
      this.Yspeed = -this.Yspeed;
    }
    this.x += this.Xspeed;
    this.y += this.Yspeed;
  }
  render(context) {
    context.save();
    context.fillStyle = 'red';
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    context.fillStyle = 'maroon';
    context.beginPath();
    context.arc(this.x, this.y, 15, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    context.restore();
  }
}
