class Game {
  constructor() {
    // define the empty array for the coins here
    this.obstacles = [];
  }

  preloadGame() {
    this.backgroundImgs = [
      {
        src: loadImage("/src/assets/background/field.png"),
        x: 0,
        speed: 0,
      },
    ];
    this.playerImage = loadImage("/src/assets/bird.svg");
    this.obstacleImage = loadImage("/src/assets/shark.png");
  }

  setupGame() {
    // this.obstacle = new Obstacle();
    this.background = new Background();
    this.background.images = this.backgroundImgs;
    //  initialize background + player here

    this.player = new Player();
    this.player.image = this.playerImage;

    let obstacle = new Obstacle();
    obstacle.image = this.obstacleImage;
    this.obstacles.push(obstacle);
  }

  drawGame() {
    clear();
    this.background.drawBackground();
    this.player.drawPlayer();
   
    // if (frameCount % 60 === 0) {
    //   this.obstacles.push(new Obstacle(this.coinImg));
    // }

    this.obstacles.forEach((obstacle) => {
      obstacle.drawObstacle();
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

/*
window.addEventListener("background", function(){
    
    var image = document.getElementById("sky");
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    canvas.width = image.width;
    canvas.height = image.height;

    var context = canvas.getContext("2d");

    context.drawImage(image, 0, 0);
});




-------


let canvas = document.querySelector("#canvas");
let context = canvas.getContext("2d");

canvas.src = "/assets/sky.png";




sky.onload = () => {
    requestAnimationFrame(gameLoop); //callback
}
let yOffset = -512;    

function gameLoop(){
    
    if(yOffset >= 0)yOffset = -512;
    context.drawImage(sky, 0, yOffset);
    context.drawImage(sky, 0, yOffset + 512);
    context.drawImage(sky, 0, yOffset + 1024);

    yOffset += 10;

    requestAnimationFrame(gameLoop)
}

*/
