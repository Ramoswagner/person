import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js"

import {createLegoManager} from "./legoCharacter.js"
import {createLegoOffice} from "./legoOffice.js"
import {createKanbanBoard} from "./legoKanban.js"

const scene = new THREE.Scene()
scene.background = new THREE.Color(0xf0f0f0)

const camera = new THREE.PerspectiveCamera(60,innerWidth/innerHeight,0.1,100)
camera.position.set(6,5,8)

const renderer = new THREE.WebGLRenderer({antialias:true})
renderer.setSize(innerWidth,innerHeight)
document.body.appendChild(renderer.domElement)

const light = new THREE.DirectionalLight(0xffffff,1)
light.position.set(5,10,5)
scene.add(light)

scene.add(new THREE.AmbientLight(0xffffff,0.6))

// cenário
const office = createLegoOffice()
scene.add(office)

// gerente
const manager = createLegoManager()
manager.position.set(0,0,0)
scene.add(manager)

// kanban
const kanban = createKanbanBoard()
kanban.position.set(-3,2,-2)
scene.add(kanban)

function animate(){
requestAnimationFrame(animate)
renderer.render(scene,camera)
}

animate()
