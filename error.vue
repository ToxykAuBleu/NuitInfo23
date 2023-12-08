<template>
  <NuxtLayout name="404">
    <div id="body">
      <div>
        <div class="text-4xl">You've Arrived Here on Error, boss</div>
        <button class="font-bold button" @click="goBack">Back</button>

        <button class="font-bold button" @click="playTetris">Play tetris ?</button>
      </div>

      <div id="divTetris">

      </div>

    </div>
  </NuxtLayout>
</template>

<script>



export default {
  methods: {
    goBack() {
      this.$router.push('/')
    },

    playTetris() {
      console.log("tetris pressed");
      document.getElementById("divTetris").innerHTML = '<canvas id="tetris" width="240" height="640"></canvas>';
      document.getElementById("tetris").style.border = "1px solid black";
      requestAnimationFrame(loop);
    }
  }
}


class Tetromino {
  constructor(tetromino, couleur) {
    this.tetromino = tetromino;
    this.couleur = couleur;

    this.tetrominoN = 0;
    this.activeTetromino = this.tetromino[this.tetrominoN];

    this.x = 3;
    this.y = -2;
  }

  positionerTetromino() {
    for (let i = 0; i < this.activeTetromino.length; i++) {
      for (let j = 0; j < this.activeTetromino.length; j++) {
        if (this.activeTetromino[i][j]) {
          grille[this.y + i][this.x + j] = this.couleur;
        }
      }
    }
  }

  dessinerTetromino() {
    for (let i = 0; i < this.activeTetromino.length; i++) {
      for (let j = 0; j < this.activeTetromino.length; j++) {
        if (this.activeTetromino[i][j]) {
          dessinerCarre(this.x + j, this.y + i, this.couleur);
        }
      }
    }
  }

  supprimerTetromino() {
    for (let i = 0; i < this.activeTetromino.length; i++) {
      for (let j = 0; j < this.activeTetromino.length; j++) {
        if (this.activeTetromino[i][j]) {
          grille[this.y + i][this.x + j] = null;
        }
      }
    }
  }


  rotationTetromino() {
    let nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
    let deplacement = 0;

    if (collision(0, 0, nextPattern)) {
      if (this.x > LONGUEUR_GRILLE / 2) {
        deplacement = -1;
      } else {
        deplacement = 1;
      }
    }

    if (!collision(deplacement, 0, nextPattern)) {
      this.supprimerTetromino();
      this.x += deplacement;
      this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
    }
  }

    deplacementTetromino(x, y) {
      if (!collision(x, y, this.activeTetromino)) {
        this.supprimerTetromino();
        this.x += x;
        this.y += y;
        this.positionerTetromino();
      } else {
        if (y == 1) {
          this.fixationTetromino();
        }
      }
    }
  }

//////////////////////////////
///////// TETROMINOS /////////
//////////////////////////////
const tetrominos = {
  'I': [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  'J': [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  'L': [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  'O': [
    [1, 1],
    [1, 1],
  ],
  'S': [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  'Z': [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
  'T': [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ]
};

const couleurs = {
  'I': 'cyan',
  'J': 'blue',
  'L': 'orange',
  'O': 'yellow',
  'S': 'green',
  'Z': 'red',
  'T': 'purple'
};

const tetrominosArray = 'IJLOSTZ';

function choixAleatoireTetromino() {
  let random = Math.floor(Math.random() * tetrominosArray.length);
  return tetrominosArray[random];
}

function creerTetromino(tetromino, couleur) {
  this.tetromino = tetromino;
  this.couleur = couleur;

  this.tetrominoN = 0;
  this.activeTetromino = this.tetromino[this.tetrominoN];

  this.x = 3;
  this.y = -2;
}

// Positioner le tetromino dans la grille

function positionerTetromino() {
  for (let i = 0; i < this.activeTetromino.length; i++) {
    for (let j = 0; j < this.activeTetromino.length; j++) {
      if (this.activeTetromino[i][j]) {
        grille[this.y + i][this.x + j] = this.couleur;
      }
    }
  }
}

// Dessiner le carré

function dessinerCarre(x, y, couleur) {
  ctx.fillStyle = couleur;
  ctx.fillRect(x * tailleCarre, y * tailleCarre, tailleCarre, tailleCarre);

  ctx.strokeStyle = 'black';
  ctx.strokeRect(x * tailleCarre, y * tailleCarre, tailleCarre, tailleCarre);
}

// Dessiner le tetromino

function dessinerTetromino() {
  for (let i = 0; i < this.activeTetromino.length; i++) {
    for (let j = 0; j < this.activeTetromino.length; j++) {
      if (this.activeTetromino[i][j]) {
        dessinerCarre(this.x + j, this.y + i, this.couleur);
      }
    }
  }
}

// Suppression des tetrominos

function supprimerTetromino() {
  for (let i = 0; i < this.activeTetromino.length; i++) {
    for (let j = 0; j < this.activeTetromino.length; j++) {
      if (this.activeTetromino[i][j]) {
        grille[this.y + i][this.x + j] = null;
      }
    }
  }
}

// Rotation des tetrominos

function rotationTetromino() {
  let nextPattern = this.tetromino[(this.tetrominoN + 1) % this.tetromino.length];
  let deplacement = 0;

  if (collision(0, 0, nextPattern)) {
    if (this.x > LONGUEUR_GRILLE / 2) {
      deplacement = -1;
    } else {
      deplacement = 1;
    }
  }

  if (!collision(deplacement, 0, nextPattern)) {
    this.supprimerTetromino();
    this.x += deplacement;
    this.tetrominoN = (this.tetrominoN + 1) % this.tetromino.length;
    this.activeTetromino = this.tetromino[this.tetrominoN];
    this.positionerTetromino();
  }
}

// Fixation des tetrominos

function fixationTetromino() {
  for (let i = 0; i < this.activeTetromino.length; i++) {
    for (let j = 0; j < this.activeTetromino.length; j++) {
      if (this.activeTetromino[i][j]) {
        if (this.y + i < 0) {
          alert("Game Over");
          gameOver = true;
          break;
        }
        grille[this.y + i][this.x + j] = this.couleur;
      }
    }
  }

  for (let i = 0; i < LARGEUR_GRILLE; i++) {
    let ligneComplete = true;
    for (let j = 0; j < LONGUEUR_GRILLE; j++) {
      ligneComplete = ligneComplete && (grille[i][j] != null);
    }
    if (ligneComplete) {
      for (let y = i; y > 1; y--) {
        for (let j = 0; j < LONGUEUR_GRILLE; j++) {
          grille[y][j] = grille[y - 1][j];
        }
      }
      for (let j = 0; j < LONGUEUR_GRILLE; j++) {
        grille[0][j] = null;
      }
      score += 10;
    }
  }
  dessinerGrille();

  scoreElement.innerHTML = score;
}

// Déplacement des tetrominos


// Collision des tetrominos

function collision(x, y, tetromino) {
  for (let i = 0; i < tetromino.length; i++) {
    for (let j = 0; j < tetromino.length; j++) {
      if (!tetromino[i][j]) {
        continue;
      }

      let newX = this.x + j + x;
      let newY = this.y + i + y;

      if (newX < 0 || newX >= LONGUEUR_GRILLE || newY >= LARGEUR_GRILLE) {
        return true;
      }

      if (newY < 0) {
        continue;
      }

      if (grille[newY][newX] != null) {
        return true;
      }
    }
  }
  return false;
}

// Dessiner la grille

function dessinerGrille() {
  for (let i = 0; i < LARGEUR_GRILLE; i++) {
    for (let j = 0; j < LONGUEUR_GRILLE; j++) {
      dessinerCarre(j, i, grille[i][j]);
    }
  }
}

// Boucle du jeu

function loop() {
  if (gameOver) {
    return;
  }

  requestAnimationFrame(loop);
  now = Date.now();
  delta = now - then;

  if (delta > interval) {
    tetromino.deplacementTetromino(0, 1);
    then = now - (delta % interval);
  }
}

// Initialisation du jeu

let grille = [];
let tailleCarre = 20;
let LONGUEUR_GRILLE = 10;
let LARGEUR_GRILLE = 20;
let score = 0;

let canvas = document.getElementById('tetris');
let ctx = canvas.getContext('2d');

let scoreElement = document.getElementById('score');

let gameOver = false;

let now;
let delta;
let then = Date.now();

let interval = 200;

for (let i = 0; i < LARGEUR_GRILLE; i++) {
  grille[i] = [];
  for (let j = 0; j < LONGUEUR_GRILLE; j++) {
    grille[i][j] = null;
  }
}

dessinerGrille();

let tetromino = new creerTetromino(tetrominos['I'], couleurs['I']);

document.addEventListener('keydown', control);

function control(event) {
  if (event.keyCode == 37) {
    tetromino.deplacementTetromino(-1, 0);
  } else if (event.keyCode == 38) {
    tetromino.rotationTetromino();
  } else if (event.keyCode == 39) {
    tetromino.deplacementTetromino(1, 0);
  } else if (event.keyCode == 40) {
    tetromino.deplacementTetromino(0, 1);
  }
}

</script>

<style scoped>
.button {
  padding: 4px 6px;
  margin: 10px 0px;
  background: black;
  color: white;

}

canvas {
  border: 1px solid black;
}
</style>