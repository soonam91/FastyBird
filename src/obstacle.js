class Obstacle {
    constructor() {
      // set the height, the initial location + the jump controls for the player
      this.height = 100;
      this.width = 100;
      this.x = 0;
      this.y = this.height;
      this.velocity = 2;
      this.image = null;
    }
  
    drawObstacle() {
        this.y += this.velocity;
        console.log(this.y);
        if (this.y > 400) this.y = -this.height;
        image(this.image, this.x, this.y, this.height, this.width);
    }
  }
  