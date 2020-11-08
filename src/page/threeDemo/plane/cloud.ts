import * as THREE from 'three'

 let Cloud = function () {
    this.mesh = new THREE.Object3D()
    let  geom = new THREE.BoxGeometry(20, 20, 20)
    // 非物理反射计算材质
    let mat = new THREE.MeshPhongMaterial({
        color: 0xeeeeee,
        transparent: true,
        opacity: .3
    })
    let cloudNum = 3 + Math.floor(Math.random() * 5)
    for (let i = 0; i < cloudNum; i++) {
        let m = new THREE.Mesh(geom, mat)
        m.position.x = 15*i
        m.position.y = Math.random()*10
        m.position.z = Math.random()*10
        m.rotation.z = Math.random()*Math.PI*2
        m.rotation.y = Math.random()*Math.PI*2
        let size = .1 + Math.random()*.9
        m.scale.set(size, size, size)
        m.castShadow = true
        m.receiveShadow = true
        this.mesh.add(m)
    }
}
export default Cloud