import * as THREE from 'three'

let Plane = function () {
    this.mesh = new THREE.Object3D()
    this.create = () => {
        // 机舱
        let bodyGeom = new THREE.BoxGeometry(80, 50, 50)
        bodyGeom.vertices[4].y-=10;
        bodyGeom.vertices[4].z+=20;
        bodyGeom.vertices[5].y-=10;
        bodyGeom.vertices[5].z-=20;
        bodyGeom.vertices[6].y+=30;
        bodyGeom.vertices[6].z+=20;
        bodyGeom.vertices[7].y+=30;
        bodyGeom.vertices[7].z-=20;
        let body = new THREE.Mesh(bodyGeom, (
            new THREE.MeshPhongMaterial({
                color: 0xf25346,
            })
        ))
        body.castShadow = true
        body.receiveShadow = true
        this.mesh.add(body)
        // 引擎
        let engine = new THREE.Mesh((new THREE.BoxGeometry(10, 50, 50)), (
            new THREE.MeshPhongMaterial({
                color: 0xd8d0d1,
            })
        ))
        engine.position.x = 40
        engine.castShadow = true
        engine.receiveShadow = true
        this.mesh.add(engine)
        // 机尾
        let tail = new THREE.Mesh((new THREE.BoxGeometry(25, 20, 5)), (
            new THREE.MeshPhongMaterial({
                color: 0xf25346,
            })
        ))
        tail.position.set(-35, 15, 0)
        tail.castShadow = true
        tail.receiveShadow = true
        this.mesh.add(tail)
        // 机翼
        let wing = new THREE.Mesh((new THREE.BoxGeometry(40, 8, 150)), (
            new THREE.MeshPhongMaterial({
                color: 0xfafafa,
            })
        ))
        wing.castShadow = true
        wing.receiveShadow = true
        this.mesh.add(wing)
        // 螺旋桨
        this.propeller = new THREE.Mesh((new THREE.BoxGeometry(30, 10, 10)), (
            new THREE.MeshPhongMaterial({
                color: 0x222222,
            })
        ))
        this.propeller.castShadow = true
        this.propeller.receiveShadow = true
        // 螺旋桨叶
        let blade = new THREE.Mesh((new THREE.BoxGeometry(2, 100, 20)), (
            new THREE.MeshPhongMaterial({
                color: 0x444444,
            })
        ))
        blade.position.set(10, 0, 0);
        blade.castShadow = true
        blade.receiveShadow = true
        let copyBlade = blade.clone(true)
        copyBlade.rotation.x = 1.5
        this.propeller.add(blade)
        this.propeller.add(copyBlade)
        this.propeller.position.set(40, 0, 0)
        this.mesh.add(this.propeller)
    }
    this.setControl = () => {
        let that = this
        document.addEventListener('mousemove', (e) => {
            let range = 10
            let x = (-window.innerWidth + (2 * e.clientX)) / range
            let y = -(-window.innerHeight + (2 * e.clientY )) / range
            that.mesh.position.x = x
            that.mesh.position.y = y + 100
        }, false)
    }
}
export default Plane