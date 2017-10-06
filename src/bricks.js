

export default class Bricks {
  constructor(X, Y, width, height, color) {
    //Location
    this.x = X;
    this.y = Y;
    //Brick Size
    this.width = width;
    this.height = height;
    //Color
    this.colour = color;
    //Destroyed Variable
    this.destroyed = false;
    //Binding class functions
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    this.getPosition = this.getPosition.bind(this);
  }
  getPosition() {
    return {x: this.x * this.width + 85, y: this.y * this.height + 175};
  }
  update() {
  }
  render(context) {
    context.save();
    switch (this.colour) {
      case 'purple':
        context.fillStyle = '#12AD2A';
        context.strokeStyle = '#043927';
        break;
      case 'violet':
        context.fillStyle = '#043927';
        context.strokeStyle = '#00A86B';
        break;
      case 'pink':
        context.fillStyle = '#00A86B';
        context.strokeStyle = '#043927';
        break;
    }
    if(this.destroyed) {
      context.fillStyle = 'black';
    }
    context.fillRect(this.x * this.width + 85, this.y * this.height + 175, this.width, this.height);
    context.strokeRect(this.x * this.width + 85, this.y * this.height + 175, this.width, this.height);
    context.restore();
  }
}
