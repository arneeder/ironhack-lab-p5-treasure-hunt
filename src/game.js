class Game {
  constructor() {
    this.player = new Player(2, 3);
    this.treasure = new Treasure();
  }
  draw() {
    this.player.draw();
    this.treasure.drawTreasure();
  }
  drawGrid() {
    // Iteration 1
    // Draw the grid
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    
    for (let i = 0; i <= 10; i++) {
      // horizontal lines
      startX = 0
      startY = i * SQUARE_SIDE
      endX = WIDTH
      endY = startY
      line(startX, startY, endX, endY)

      startX = i * SQUARE_SIDE
      startY = 0
      endX = startX
      endY = HEIGHT
      line(startX, startY, endX, endY)
    }

  }
}


class Player {
  constructor (col, row) {
    this.col = col
    this.row = row
    this.imageDown;
    this.imageUp;
    this.imageLeft;
    this.imageRight;
  }
  preload () {
    this.imageDown = loadImage('../assets/character-down.png')
    this.imageUp = loadImage('../assets/character-up.png')
    this.imageLeft = loadImage('../assets/character-left.png')
    this.imageRight = loadImage('../assets/character-right.png')
  }
  draw() {
    image(this.imageDown, this.row * SQUARE_SIDE, this.col * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE)
  }
  moveUp() {
    this.col -= 1
  }
  moveDown() {
    this.col += 1
  }
  moveLeft() {
    this.row -= 1
  }
  moveRight() {
    this.row += 1
  }
  preLoad() {
    game.preLoad()
  }
}


class Treasure {
  constructor() {
    this.row = Math.floor(Math.random() * 10);
    this.col = Math.floor(Math.random() * 10);
    this.imageTreasure;
  }
  preload () {
    this.imageTreasure = loadImage('../assets/treasure.png')
  }
  setRandomPosition() {
    this.row = Math.floor(Math.random() * 10)
    this.col = Math.floor(Math.random() * 10)
    
  }
  drawTreasure() {
    image(this.imageTreasure, this.row * SQUARE_SIDE, this.col * SQUARE_SIDE, SQUARE_SIDE, SQUARE_SIDE)
  }
}