

export default class Ball {
  constructor() {
    //Position
    this.x = 490;
    this.y = 900;
    //X Direction
    this.Xdirection = 'right';
    //Y Direction
    this.Ydirection = 'up';
    //Binding class functions
    this.update = this.update.bind(this);
    this.render = this.render.bind(this);
    //this.getPosition = this.getPosition.bind(this);
  }
//  this.getPosition() {

//  }
  update(x, y) {
    switch (this.x) {
      case 986:
        this.Xdirection = 'left';
        break;
      case 0:
        this.Xdirection = 'right';
        break;
    }
    if(this.y < 0) {
      this.Ydirection = 'down';
    }
    if(this.y > 985) {
      this.Ydirection = 'up';
    }
    switch (this.Xdirection) {
      case 'right':
        this.x += 2;
        break;
      case 'left':
        this.x -= 2;
        break;
    }
    switch (this.Ydirection) {
      case 'up':
        this.y -= 2;
        break;
      case 'down':
        this.y += 2;
        break;
    }
  }
  render(context) {
    context.save();
    context.fillStyle = 'green';
    context.fillRect(this.x, this.y, 15, 15);
    context.restore();
  }
}
