

export default class Paddle {
  constructor() {
    //Starting Position of the Paddle
    this.Xposition = 450;
    this.Yposition = 950;
    //Direction Variable
    this.direction = 'static';
    //Binding class functions
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.direction = this.changeDirection.bind(this);
  }

  //this.getPosition() {

  //}
  changeDirection(direction) {
    this.direction = direction;
  }

  update() {
    console.log('in Paddle update');
    if(this.direction === 'right' && this.Xposition < 900) {
      this.Xposition += 4;
    }
    else if (this.direction === 'left' && this.Xposition > 0) {
      this.Xposition -= 4;
    }
  }
  render(context) {
    context.save();
    context.fillStyle = 'blue';
    context.fillRect(this.Xposition, this.Yposition, 100, 25);
    context.restore();
  }
}
