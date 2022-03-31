const game = new Game();

function preload() {
  game.player.preload()
  game.treasure.preload()
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas"); // DIESE ZEILE VERSTEHE ICH NICHT!
}

function draw() {
  clear();
  game.drawGrid();
  game.draw();
  hideTreasure();
}

function keyPressed() {
  if (keyCode === 37) {
    game.player.moveLeft()
  }
  if (keyCode === 39) {
    game.player.moveRight()
  }
  if (keyCode === 38) {
    game.player.moveUp()
  }
  if (keyCode === 40) {
    game.player.moveDown()
  }
}

function hideTreasure() {
  if (game.player.row === game.treasure.row && game.player.col === game.treasure.col) {
    game.treasure.setRandomPosition();
  }
}
