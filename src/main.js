const game = new Game();
var timers = [];  // timer does not working



function preload() {
  game.preloadGame();
}

timers.push({
    delay:500,
    nextFireTime:0,
    doFunction:doTimers,
    counter:0
})

function timerLoop(currentTime){  // timer
    requestAnimationFrame(timerLoop);
    for(var i = 0; i < timers.length; i++){
        if (currentTime > timers[i].nextFireTime){
            var t = timers[i];

            t.nextFireTime = currentTime + t.delay;;

            t.doFunction(t,i);
        }
    }
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

requestAnimationFrame(timerLoop); // timer