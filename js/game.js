class Game {
  constructor() {
    // define an empty array for the coins
    this.obstacles = [];
  }
  preloadGame() {
    // load in one image then 4. add the extra images
    this.backgroundImgs = [
      { src: loadImage("../assets/background/plx-1.png"), x: 0, speed: 1 },
      { src: loadImage("../assets/background/plx-2.png"), x: 0, speed: 2 },
      { src: loadImage("../assets/background/plx-3.png"), x: 0, speed: 3 },
      { src: loadImage("../assets/background/plx-4.png"), x: 0, speed: 4 },
      { src: loadImage("../assets/background/plx-5.png"), x: 0, speed: 5 },
    ];
    // load the player gif in
    this.playerImg = loadImage("../assets/player/bb8.gif");
    // load the coin image in
    this.coinImg = [{ src: loadImage("../assets/coins/tile000.png") }];
  }
  setupGame() {
    //  initialize background
    this.background = new Background();
    this.background.imgs = this.backgroundImgs;
    // initialize player
    this.player = new Player();
    this.player.image = this.playerImg;
    // we DON'T initialize the coins here because we create them dynamically in the draw
  }
  drawGame() {
    //   3.draw it
    clear();
    // call the draw background function
    this.background.drawBackground();
    // call the draw player function
    this.player.drawPlayer();

    // define the obstacle drawing logic
    if (frameCount % 30 === 0) {
      // add a new obstacle to the array in the constructor with the image passed into it
      this.obstacles.push(new Obstacle(this.coinImg));
    }
    // for each obstacle that has been created draw a new obstacle.
    this.obstacles.forEach((obstacle) => {
      // this gives each obstacle its own values so we can interact with them individually
      obstacle.drawObstacle();
    });

    // remove the obstacles that have been hit by the player
    this.obstacles = this.obstacles.filter((obstacle) => {
      // we pass the player values into the collision function here
      if (obstacle.collision(this.player)) {
        return false;
      } else {
        return true;
      }
    });
  }
}
