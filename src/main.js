const game = new Game();

function preload() {
  game.preloadGame();
}

function setup() {
  createCanvas(WIDTH, HEIGHT);
  game.setupGame();
}

function draw() {
  game.drawGame();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    game.player.rightDown();
  } else if (keyCode === LEFT_ARROW) {
    game.player.leftDown();
  }
}

function keyReleased() {
  if (keyCode === RIGHT_ARROW) {
    game.player.rightUp();
  } else if (keyCode === LEFT_ARROW) {
    game.player.leftUp();
  }
}
