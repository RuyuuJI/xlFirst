import * as THREE from 'three'
import Cloud from './cloud'

 let Sky = function () {
    this.cloudNum = 20 // x朵云

    // ======================
    this.mesh = new THREE.Object3D()
    let initAngle = Math.PI*2 / this.cloudNum
    for (let i = 0; i < this.cloudNum; i++) {
        let cloud = new Cloud()
       // 设置每朵云的旋转角度和位置
        let a = initAngle*i  //这是云的最终角度
        let h = 750 + Math.random()*150  // 这是轴的中心和云本身之间的距离
        cloud.mesh.position.y = Math.sin(a)*h
        cloud.mesh.position.x = Math.cos(a)*h
        cloud.mesh.rotation.z = a + Math.PI/2
        cloud.mesh.position.z = -400 - Math.random() * 400

        //----------------
        let s = 1 + Math.random() * 2
        cloud.mesh.scale.set(s, s, s)
        this.mesh.add(cloud.mesh)
    }
    
}
export default Sky