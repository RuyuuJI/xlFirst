# xl
> A Vue.js project
## ---------------
``` bash
# svg

## 路径
小写：相对位移  大写：绝对位移

M = moveto 落笔
L = lineto 画直线
H = horizontal lineto 水平线
V = vertical lineto 垂直线

Z = closepath 画直线到起点

### 测试 (三次)
C = curveto 贝塞尔曲线（起点控制点，终点控制点，终点）
S = smooth curveto (起点控制点, 终点)  ----》Q
### 切图（二次）
Q = quadratic Bézier curve（控制点，终点）
T = smooth quadratic Bézier curveto（控制点，终点） ---》L

A = elliptical Arc 弧形 （Rx,Ry,x-axis-rotation large-arc-flag sweep-flag 终点）




## Gsap
gsap.globalTimeline 时间线（play，pause，timeScale）

gsap.ticker 绘制每一帧（add，remove，fps，deltaRatio）
gsap.quickSetter

gsap.fromTo(".class", {opacity: 0}, {opacity: 0.8, duration: 1, ease: "easeName"})

gsap.getTweensOf(myObject) -->finds ? tweens
gsap.killTweensOf(myObject, "opacity,x,y");

gsap.registerEase(myObject, { ...config, ease: 'easeName' })
gsap.registerEffect(myObject, { ...config })
## --------------------------

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
