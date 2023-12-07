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
let refreshAnimationFrame = null;

export default {
  methods: {
    goBack() {
      this.$router.push('/')
    },

    playTetris(){
        console.log("tetris pressed");
        document.getElementById("divTetris").innerHTML = '<canvas id="tetris" width="240" height="640"></canvas>';
        document.getElementById("tetris").style.border = "1px solid black";
        requestAnimationFrame(loop);        
    }
  }
}


function loop(){

    document.addEventListener('keydown', function(e){
    // gestion appuie touches
    if (e.which === 37) { // fleche gauche (on déplace d'un cran à gauche)
        // if (valid(-1)) {
        //     --currentX;
        // }
        console.log("left")
    } else if (e.which === 39) { // fleche droite (on déplace d'un cran à droite)
        // if (valid(1)) {
        //     ++currentX;
        // }
        console.log("right")
    } else if (e.which === 40) { // fleche bas (on descend d'un cran)
        // if (valid(0, 1)) {
        //     ++currentY;
        // }
        console.log("down")
    } else if (e.which === 40) { // fleche haut ()
        // let rot = rotate(current);
        // if (valid(0, 0, rot)) {
        //     current = rot;
        // }
        console.log("up")
    } else if (e.which === 32) { // barre espace (on fait tomber la pièce)
        // while (valid(0, 1)) {
        //     ++currentY;
        // }
        console.log("space")
    }

    });

    refreshAnimationFrame = requestAnimationFrame(loop);
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