class Player {
  constructor() {
    // set the height for the player
    this.height = 120;
    this.width = 100;

    // set the location of the player. height is a pre-set value in canvas
    this.x = 0;
    this.y = height - this.height;

    // jump controls
    this.gravity = 0.2;
    this.velocity = 0;

    // add the jumpscount later
    this.jumpsCount = 0;

    // show this with just gravity first
  }
  drawPlayer() {
    // draw the player
    image(this.image, this.x, this.y, this.width, this.height);

    // jump logic with velocity
    this.velocity += this.gravity;
    this.y += this.velocity;
    if (this.y >= height - this.height) {
      this.y = height - this.height;
      //   jump count to stop multiple jumping
      //   this.jumpsCount = 0;
    }
  }

  jump() {
    if (this.jumpsCount === 0) {
      //   jump count to stop multiple jumping
      //   this.jumpsCount++;
      this.velocity = -10;
    }
  }
}
