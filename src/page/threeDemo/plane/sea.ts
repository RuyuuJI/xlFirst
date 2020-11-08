import * as THREE from 'three'

let Sea = function () {
  this.mesh = new THREE.Object3D()
  let geom = new THREE.CylinderGeometry(600, 600, 800, 40, 10);
  // 在 x 轴旋转几何体
  geom.applyMatrix4((new THREE.Matrix4()).makeRotationX(-Math.PI / 2));
  geom.mergeVertices() // 重复的顶点将会被移除，面的顶点信息会被更新。
  // 获得顶点
  let l = geom.vertices.length;

  // 创建一个新的数组存储与每个顶点关联的值：
  this.waves = [];
  for (var i = 0; i < l; i++) {
    // 获取每个顶点
    var v = geom.vertices[i];

    // 存储一些关联的数值
    this.waves.push({
      y: v.y,
      x: v.x,
      z: v.z,
      // 随机角度
      ang: Math.random() * Math.PI * 2,
      // 随机距离
      amp: 5 + Math.random() * 15,
      // 在0.016至0.048度/帧之间的随机速度
      speed: 0.016 + Math.random() * 0.032
    });
  };


  let mat = new THREE.MeshPhongMaterial({
    color: 0x68c3e0,
    transparent: true,
    opacity: .6,
  });
  // 为了在 Three.js 创建一个物体，我们必须创建网格用来组合几何体和一些材质
  this.mesh = new THREE.Mesh(geom, mat);

  // 允许大海对象接收阴影
  this.mesh.receiveShadow = true;
}

// 现在我们创建一个在每帧可以调用的函数，用于更新顶点的位置来模拟海浪。

Sea.prototype.moveWaves = function (){

  // 获取顶点
  var verts = this.mesh.geometry.vertices;
  var l = verts.length;

  for (var i=0; i<l; i++){
      var v = verts[i];

      // 获取关联的值
      var vprops = this.waves[i];

      // 更新顶点的位置
      v.x = vprops.x + Math.cos(vprops.ang)*vprops.amp;
      v.y = vprops.y + Math.sin(vprops.ang)*vprops.amp;

      // 下一帧自增一个角度
      vprops.ang += vprops.speed;
  }

  // 告诉渲染器代表大海的几何体发生改变
  // 事实上，为了维持最好的性能
  // Three.js会缓存几何体和忽略一些修改
  // 除非加上这句
  this.mesh.geometry.verticesNeedUpdate=true;
}
export default Sea