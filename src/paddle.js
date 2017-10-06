

export default class Paddle {
  constructor(width, height) {
    //Starting Position of the Paddle
    this.Xposition = 450;
    this.Yposition = 950;
    //Direction Variable
    this.direction = 'static';
    //Paddle Size
    this.width = width;
    this.height = height;
    //Binding class functions
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.changeDirectiondirection = this.changeDirection.bind(this);
    this.getDirection = this.getDirection.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }

  getPosition() {
    return {x: this.Xposition, y: this.Yposition};
  }
  getDirection() {
    return this.direction;
  }
  changeDirection(direction) {
    this.direction = direction;
  }

  update() {
    if(this.direction === 'right' && this.Xposition < 800) {
      this.Xposition += 6;
    }
    else if (this.direction === 'left' && this.Xposition > 0) {
      this.Xposition -= 6;
    }
  }
  render(context) {
    context.save();
    context.fillStyle = 'purple';
    context.fillRect(this.Xposition, this.Yposition, this.width, this.height);
    context.fillStyle = 'black';
    context.fillRect(this.Xposition + 5, this.Yposition + 5, this.width - 10, this.height - 10);
    context.restore();
  }
}
