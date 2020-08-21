const game = new Game();

function preload() {
  game.preloadGame();
}
function setup() {
  createCanvas(600, 400);
  game.setupGame();
}
function draw() {
  game.drawGame();
}

// jump function
function keyPressed() {
  // spacebar press
  if (keyCode === 32) {
    game.player.jump();
  }
}
