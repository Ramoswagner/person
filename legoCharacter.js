export function createLegoManager(){

const g = new THREE.Group()

const skin = new THREE.MeshStandardMaterial({color:0x8d5524})
const suit = new THREE.MeshStandardMaterial({color:0x0a1f44})
const shirt = new THREE.MeshStandardMaterial({color:0xffffff})
const black = new THREE.MeshStandardMaterial({color:0x111111})

// cabeça
const head = new THREE.Mesh(
new THREE.CylinderGeometry(0.28,0.28,0.35,32),
skin
)

head.position.y = 2.3
g.add(head)

// topo lego
const stud = new THREE.Mesh(
new THREE.CylinderGeometry(0.12,0.12,0.08,32),
skin
)

stud.position.y = 2.52
g.add(stud)

// barba
const beard = new THREE.Mesh(
new THREE.BoxGeometry(0.36,0.18,0.15),
black
)

beard.position.set(0,2.15,0.28)
g.add(beard)

// corpo
const body = new THREE.Mesh(
new THREE.BoxGeometry(0.8,1,0.4),
suit
)

body.position.y = 1.6
g.add(body)

// camisa
const shirtFront = new THREE.Mesh(
new THREE.BoxGeometry(0.3,0.7,0.02),
shirt
)

shirtFront.position.set(0,1.6,0.21)
g.add(shirtFront)

// pernas
const leg1 = new THREE.Mesh(
new THREE.BoxGeometry(0.35,0.9,0.35),
suit
)

leg1.position.set(-0.2,0.7,0)

const leg2 = leg1.clone()
leg2.position.x = 0.2

g.add(leg1)
g.add(leg2)

return g
}
