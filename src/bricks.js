

export default class Bricks {
  constructor(X, Y, color) {
    //Location
    this.x = X;
    this.y = Y;
    //Brick Size
    this.width = 75;
    this.height = 25;
    //Color
    this.colour = color;
    //Cracked Variable

    //Binding class functions
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    //this.getPosition = this.getPosition.bind(this);
  }
  //this.getPosition() {

  //}
  update() {

  }
  render(context) {
    context.save();
    switch (this.colour) {
      case 'purple':
        context.fillStyle = 'purple';
        break;
      case 'violet':
        context.fillStyle = 'violet';
        break;
      case 'pink':
        context.fillStyle = '#E400E0';
        break;
    }
    context.strokeStyle = 'black';
    context.fillRect(this.x * this.width + 35, this.y * this.height + 100, 100, 25);
    context.strokeRect(this.x * this.width + 35, this.y * this.height + 100, 100, 25);
    context.restore();
  }
}
