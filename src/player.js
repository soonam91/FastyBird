class Player {
  constructor() {
    this.height = 100;
    this.width = 100;
    this.x = WIDTH / 2;
    this.y = HEIGHT - this.height;
    this.gravity = 0.01;
    this.velocity = 5;
    this.image = null;
    this.rightPressed = false;
    this.leftPressed = false;
  }

  drawPlayer() {
    if (this.rightPressed && this.x < WIDTH-this.width) {
      this.x += this.velocity;
    }
    if (this.leftPressed && this.x > 0) {
      this.x -= this.velocity;
    }
    image(this.image, this.x, this.y, this.height, this.width);
  }

  rightDown() {
    this.rightPressed = true;
  }

  leftDown() {
    this.leftPressed = true;
  }

  rightUp() {
    this.rightPressed = false;
  }

  leftUp() {
    this.leftPressed = false;
  }
}
