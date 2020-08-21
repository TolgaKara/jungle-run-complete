class Background {
  constructor() {
    this.imgs;
  }

  drawBackground() {
    // this is how you would add each image manually:

    // image(this.imgs[1].src, 0, 0, width, height);
    // image(this.imgs[2].src, 0, 0, width, height);
    // image(this.imgs[3].src, 0, 0, width, height);
    // image(this.imgs[4].src, 0, 0, width, height);

    // we use the for each here to move every picture in the background array
    this.imgs.forEach((picture) => {
      // this will make all the pictures move at the same pace
      // picture.x -= 2;

      // eventually we want them to all move at a different speed
      picture.x -= picture.speed;

      // this calls the image once
      image(picture.src, picture.x, 0, width, height);

      // this adds the second image after the first, giving the illusion of an endless background
      image(picture.src, picture.x - width, 0, width, height);

      // use an if statement to bring the sequence back to the start
      if (picture.x < 0) {
        picture.x = width;
      }
    });
  }
}
