<template>
    <div class="threeBirds" ></div>
</template>
<script lang="ts">
import * as THREE from 'three';
// ----------------------
let scene, 
    camera,
    controls,
    fieldOfView,
  	aspectRatio,
  	nearPlane,
  	farPlane,
    shadowLight, 
    backLight,
    light, 
    renderer,
    container;
    //SCENE
let floor, brid1, bird2;
let HEIGHT,
  	WIDTH,
    windowHalfX,
  	windowHalfY,
    mousePos = {x:0,y:0};

export default ({
    name: 'three-birds',
    mounted () {
        this.init()
    },
    methods: {
        init () {
            scene = new THREE.Scene()
            HEIGHT = window.innerHeight
            WIDTH = window.innerWidth
            aspectRatio = WIDTH / HEIGHT
        }
    }
})
</script>

<style lang="scss">
.threeBirds{
    position: relative;
    display: block;
    height: 100%;
}
</style>