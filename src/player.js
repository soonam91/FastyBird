class Player {
  constructor() {
    
    this.height = 300;
    this.width = 300;
    this.x = 200;
    this.y = 200;
    this.gravity = 0.01;
    this.velocity = 5;
    this.image = null;
    this.rightPressed = false;
    this.leftPressed = false;
    
  }

  drawPlayer() {
    if (this.rightPressed) this.x += this.velocity;
    if (this.leftPressed) this.x -= this.velocity;
    image(this.image, this.x, this.y, this.height, this.width);
  }

  rightDown() {
    this.rightPressed = true;
  }

  leftDown(){
    this.leftPressed = true;
  }

  rightUp() {
    this.rightPressed  = false;
  }

  leftUp() {
    this.leftPressed = false;
  }
}
