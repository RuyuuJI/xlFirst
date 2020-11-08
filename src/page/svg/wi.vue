<template>
  <div class="wi">
    <svg
      version="1.1"
      x="0"
      y="0"
      xml:space="preserve"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <polyline points="15 15, 575 5, 575 200, 15 200" class="g-rect-path" />
      <circle
        class="borderCircle"
        cx="250"
        cy="250"
        r="50"
        stroke-width="10"
        fill="none"
      ></circle>
      <g class="g-line">
        <line x1="300" y1="300" x2="200" y2="200" class="la-line"></line>
        <line x1="200" y1="250" x2="300" y2="250" class="la-line"></line>
        <line x1="200" y1="300" x2="300" y2="200" class="la-line"></line>
      </g>
      <g class="g-poly">
        <polygon
          class="g-polygon-one"
          points="200,150 250,190 160,210 200,150"
        />
        <polyline
          class="g-polyline"
          points="10,20 40,25 60,40 80,120 120,140 200,180"
        />
      </g>
      <!--  -->
      <g inkscape:label="图层 1" inkscape:groupmode="layer" id="layer1">
        <path
          style="
            fill: none;
            stroke: #555555;
            stroke-width: 2px;
            stroke-linecap: butt;
            stroke-linejoin: miter;
            stroke-opacity: 1;
          "
          d="m 37.041666,77.863093 c 0,0 34.773809,-88.446426 49.892857,-16.630951 15.119047,71.815478 -33.261905,92.226188 -33.261905,92.226188 0,0 -24.946428,116.41667 18.142857,25.70238 43.089285,-90.714284 85.422615,-51.40476 81.642855,-34.01785 -3.77976,17.3869 43.08929,29.48214 -20.41071,55.94047 C 69.547617,227.54166 59.720238,32.505951 89.958332,115.66071 120.19643,198.81547 262.31547,148.92262 150.43452,120.95238 38.553572,92.982141 37.041666,77.863093 37.041666,77.863093 Z"
          id="path17"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import gsap from "../../publicGSAP/common";
export default {
  name: "wi",
  mounted() {
    this.lineChange();
  },
  methods: {
    lineChange() {
      // suzimiyaharuhi no fade
      // gsap.effects.fade('.la-line', { direction: 'top,left', moveDistance: 50})
      gsap.effects.fade(".la-line", { direction: 360, moveDistance: 350 });
    },
  },
};
</script>

<style lang="scss">
.wi {
  flex: 1;
  // 点线框
  .g-rect-path {
    fill: transparent;
    stroke-width: 5;
    stroke: #d3d3d3;
    stroke-linejoin: round;
    stroke-dasharray: 0, 1000, 100, 200;
    stroke-dashoffset: 0;
    &:hover {
      animation: borderFill 0.5s linear forwards;
    }
    @keyframes borderFill {
      0% {
        stroke-dasharray: 0, 1000, 100, 200;
      }
      100% {
        stroke-dasharray: 1000, 0, 1000;
        stroke-width: 7;
        stroke: #3f51b5;
      }
    }
  }
  .borderCircle {
    stroke-dasharray: 0, 400;
    stroke: #b68f8f;
    offset-path: path("m 24.041666,80.863093 c 0,0 34.773809,-88.446426 49.892857,-16.630951 15.119047,71.815478 -33.261905,92.226188 -33.261905,92.226188 0,0 -24.946428,116.41667 18.142857,25.70238 43.089285,-90.714284 85.422615,-51.40476 81.642855,-34.01785 -3.77976,17.3869 43.08929,29.48214 -20.41071,55.94047 C 69.547617,227.54166 59.720238,32.505951 89.958332,115.66071 120.19643,198.81547 262.31547,148.92262 150.43452,120.95238 38.553572,92.982141 37.041666,77.863093 37.041666,77.863093 Z");
    offset-distance: 0%;
    animation: none loading 13s linear alternate infinite;
    animation-name: loading,pathMove;
    @keyframes loading {
      0% {
        stroke-dasharray: 0, 350;
      }
      100% {
        stroke-dasharray: 350;
        stroke: #afb7e0;
      }
    }
    @keyframes pathMove {
      0% {
         offset-distance: 0%;
      }
      100% {
         offset-distance: 100%;
      }
    }
  }
  // 直线
  .g-line {
    position: relative;
    fill: #afb7e0;
    opacity: 0.8;
    transform-origin: 50% 50%;
    transform: rotate(0deg);
    transition: all 2.5s ease-in-out;
    .la-line {
      color: #afb7e0;
      stroke: #afb7e0;
      stroke-width: 2px;
      stroke-dasharray: 282;
      transition: all 1.5s ease-in-out;
    }
    &:hover {
      transform: rotate(360deg);
      .la-line {
        stroke: #162ea7;
      }
    }
  }
  //   多边形
  .g-poly {
    .g-polygon-one {
      fill: #af2f2f;
      stroke: #afb7e0;
      stroke-width: 5;
    }
    .g-polyline {
      fill: none;
      stroke-width: 5;
      stroke: #afb7e0;
    }
  }
}
</style>