class Game {
  constructor() {
    this.obstacles = [];
    this.gameOver = false;
  }

  preloadGame() {
    this.backgroundImgs = [
      {
        src: loadImage('/src/assets/background/field.png'),
        x: 0,
        speed: 0,
      },
    ];
    this.playerImage = loadImage('/src/assets/bird.svg');
    this.obstacleImage = loadImage('/src/assets/obst.png');
  }

  setupGame() {
    this.background = new Background();
    this.background.images = this.backgroundImgs;
    //  initialize background + player here

    this.player = new Player();
    this.player.image = this.playerImage;

    this.obstacles.push(new Obstacle(this.obstacleImage, 0));
    this.obstacles.push(new Obstacle(this.obstacleImage, WIDTH - 450));
    this.obstacles.push(new Obstacle(this.obstacleImage, WIDTH -100));
    this.obstacles.push(new Obstacle(this.obstacleImage, WIDTH -50));
    this.obstacles.push(new Obstacle(this.obstacleImage, WIDTH -200));
  
  }

  drawGame() {
    if (this.gameOver) {
        document.getElementById("gameOver").style.display = "block";
        return;
    }

    clear();
    this.background.drawBackground();
    this.player.drawPlayer();

    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
      if (obstacle.checkCollision(this.player)) {
          this.gameOver = true;
      };
    });
    // this.obstacle.drawObstacle();
    //  call the draw functions for the player + the background
    // define the obstacle drawing logic + add a new obstacle to  the array in the constructor with the image passed into it
    // this.obstacles = this.obstacles.filter((obstacle) => {
    //   if (obstacle.collision(this.player)) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
  }

  
}
