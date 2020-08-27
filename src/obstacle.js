class Obstacle {
    constructor(img, x) {
      
      this.height = 100;
      this.width = 100;
      this.x = x;
    //   this.x = Math.floor(Math.random() * (1 + 10 - 5)) + 5;
     // generating more obstacles 
      
      this.y = this.height;
      this.velocity = 4;
      this.image = img;
    }
  
    drawObstacle() {
        this.y += this.velocity;
        image(this.image, this.x, this.y, this.height, this.width);
        if (this.y > HEIGHT) {
            this.resetObstacle();
        }
    }
    
    resetObstacle() {
        let minY = 0;
        let maxY = HEIGHT/2;
        let randomY = Math.floor(Math.random() * (1 + maxY - minY)) + minY;
        this.y = -(this.height + randomY);

        let minX = 0;
        let maxX = 500;
        let randomX = Math.floor(Math.random() * (1 + maxX - minX)) + minX;
        this.x = randomX;
    }

    checkCollision(player) {
        return !(player.x > this.x + this.width || 
            player.x + player.width < this.x || 
            player.y > this.y + 70 ||
            player.y + player.height < this.y);
    }
}

/*
intersectRect(r1, r2) {
    return !(r2.left > r1.right || 
             r2.right < r1.left || 
             r2.top > r1.bottom ||
             r2.bottom < r1.top);*/