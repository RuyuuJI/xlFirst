<template>
  <div class="Plane World"></div>
</template>

<script>
import * as THREE from "three";
import Cloud from "./plane/cloud";
import Sea from "./plane/sea";
import Sky from "./plane/sky";
import Plane from "./plane/plane";

let scene,
  camera,
  fieldOfView,
  aspectRatio,
  nearPlane,
  farPlane,
  HEIGHT,
  WIDTH,
  renderer,
  container;
export default {
  name: "plane",
  data() {
    return {
      sea: new Sea(),
      plane: new Plane(),
      sky: new Sky(),
      colors: {
        red: 0xf25346,
        white: 0xd8d0d1,
        brown: 0x59332e,
        pink: 0xf5986e,
        brownDark: 0x23190f,
        blue: 0x68c3c0,
      },
      lights: {
        hemisphereLight: null,
        shadowLight: null,
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.createScene(); // 创建场景
      this.createCamera();
      this.createRender();
      this.createLights();
      this.createWorld();
      renderer.render(scene, camera);
      this.loop();
    },
    createScene() {
      HEIGHT = window.innerHeight;
      WIDTH = window.innerWidth;
      scene = new THREE.Scene();
      scene.fog = new THREE.Fog(0xfefeff, 100, 850);
    },
    createCamera() {
      /**
       * PerspectiveCamera 透视相机
       * @param fieldOfView 视角
       * @param aspectRatio 纵横比
       * @param nearPlane 近平面
       * @param farPlane 远平面
       */
      aspectRatio = WIDTH / HEIGHT;
      fieldOfView = 60;
      nearPlane = 1;
      farPlane = 10400;

      // ==================
      camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
      );
      camera.position.x = 0;
      camera.position.z = 200;
      camera.position.y = 100;
      scene.add(camera);
    },
    createRender() {
      renderer = new THREE.WebGLRenderer({
        // 在 css 中设置背景色透明显示渐变色
        alpha: true,
        // 开启抗锯齿，但这样会降低性能。
        // 不过，由于我们的项目基于低多边形的，那还好 :)
        antialias: true,
      });
      renderer.setSize(WIDTH, HEIGHT);
      // 打开渲染器的阴影地图
      renderer.shadowMap.enabled = true;
      // 在 HTML 创建的容器中添加渲染器的 DOM 元素
      container = document.querySelector(".World");
      container.appendChild(renderer.domElement);
      window.addEventListener(
        "resize",
        () => {
          HEIGHT = window.innerHeight;
          WIDTH = window.innerWidth;
          renderer.setSize(WIDTH, HEIGHT);
          camera.aspect = WIDTH / HEIGHT;
          camera.updateProjectionMatrix();
        },
        false
      );
    },
    createLights() {
      let { hemisphereLight, shadowLight } = this.lights;
      // 半球光就是渐变的光；
      // 第一个参数是天空的颜色，第二个参数是地上的颜色，第三个参数是光源的强度
      hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
      // 设置光源的方向。
      shadowLight = new THREE.DirectionalLight(0xffffff, 0.8);
      shadowLight.castShadow = true;

      // 定义可见域的投射阴影
      shadowLight.shadow.camera.left = -400;
      shadowLight.shadow.camera.right = 400;
      shadowLight.shadow.camera.top = 400;
      shadowLight.shadow.camera.bottom = -400;
      shadowLight.shadow.camera.near = 1;
      shadowLight.shadow.camera.far = 1000;
      // 定义阴影的分辨率；虽然分辨率越高越好，但是需要付出更加昂贵的代价维持高性能的表现。
      shadowLight.shadow.mapSize.width = 2048;
      shadowLight.shadow.mapSize.height = 2048;

      //
      scene.add(hemisphereLight);
      scene.add(shadowLight);
    },
    createWorld() {
      let { sea, plane, sky } = this;
      sea.mesh.position.y = -600;
      sky.mesh.position.y = -600;
      plane.mesh.scale.set(0.25, 0.25, 0.25);
      plane.mesh.position.y = 0;
      plane.mesh.rotation.x = Math.PI / 6;
      plane.create();
      plane.setControl()
      scene.add(sea.mesh);
      scene.add(sky.mesh);
      scene.add(plane.mesh);
      // cloud
    },
    loop() {
      let { plane, sea, sky } = this;
      sea.mesh.rotation.z += 0.005;
      sky.mesh.rotation.z += 0.01
      plane.propeller.rotation.x += .2
      renderer.render(scene, camera);
      requestAnimationFrame(this.loop);
    },
  },
};
</script>

<style lang="scss" scoped>
.World {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: linear-gradient(#e4e0ba, #f7d9aa);
}
</style>