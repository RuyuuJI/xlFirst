<template>
  <div class="mysvg">
    <svg  version="1.1" x="0" y="0"  xml:space="preserve"
    width="1200" height="1200"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 
      <polyline  points="15 15, 575 5, 575 200, 15 200" class="g-rect-path"/>
      <circle class="borderCircle" cx="250" cy="250" r="50" stroke-width="10" fill="none"></circle>
      <g class="g-line">
        <line x1="300" y1="300" x2="200" y2="200" class="la-line"></line>
        <line x1="200" y1="300" x2="300" y2="200" class="la-line"></line>
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
    name: 'wi'
}
</script>

<style lang="scss">
.mysvg{
  position: absolute;
  height: 100%;
  width: 100%;
  background: #1f1f1f;
  // 点线框
  .g-rect-path{
    fill: transparent;
    stroke-width: 5;
    stroke: #d3d3d3;
    stroke-linejoin: round;
    stroke-dasharray: 0, 1000, 100, 200;
    stroke-dashoffset: 0;
    &:hover{
      animation: borderFill .5s  linear forwards;
    }
    @keyframes borderFill {
      0%{
          stroke-dasharray: 0, 1000, 100, 200;
      }
      100%{
        stroke-dasharray: 1000, 0, 1000;
        stroke-width: 7;
        stroke: #3F51B5;
      }
    }
  }
  .borderCircle{
    stroke-dasharray: 0,282;
    stroke: #b68f8f;
    animation: loading 3s linear infinite;
    @keyframes loading {
      0%{
        stroke-dasharray: 282;
      }
      100%{
        stroke-dasharray: 0;
        stroke: #afb7e0;
      }
    }
  }
  // 直线
  .g-line{
    fill: #afb7e0;
    opacity: .8;
    .la-line{
        color: #afb7e0;
        stroke: #afb7e0;
        stroke-width: 2px;
        stroke-dasharray: 282;
        // stroke-dashoffset: 282;
      }
  }
 
}
</style>