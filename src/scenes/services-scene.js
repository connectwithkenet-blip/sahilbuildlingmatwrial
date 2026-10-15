import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  createLowPolyTipperTruck,
  createWorkerFigure,
  createDebrisPile,
  createCementBagMesh,
  createBrickMesh
} from '../lib/materials-procedural.js';

gsap.registerPlugin(ScrollTrigger);

/**
 * Scene 4: Malwa Uthana & Maal Unloading Services 3D Experience
 * Tipper truck & tempo arrive on ground plane.
 * Section A: Malwa debris loaded by worker capsules, truck tips bed & drives off leaving clean plot.
 * Section B: Maal unloading of cement bags & bricks from truck bed to organized ground stack.
 */
export class ServicesScene {
  constructor() {
    this.group = new THREE.Group();
    this.scrollTriggers = [];
  }

  init(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.scene.add(this.group);

    this.camera.position.set(0, 3.5, 9.5);
    this.camera.lookAt(0, 1.2, 0);

    this.buildServicesWorld();
    this.setupScrollTriggers();
  }

  buildServicesWorld() {
    // 1. Stylized Tipper Truck
    this.truck = createLowPolyTipperTruck();
    this.truck.position.set(-8, 0, 0); // Starts offstage left
    this.truck.rotation.y = Math.PI / 2; // Facing right
    this.group.add(this.truck);

    // 2. Trained Worker Capsule Figures (Yellow Safety Helmets)
    this.workersGroup = new THREE.Group();
    this.worker1 = createWorkerFigure(0xF5B800); // Yellow vest
    this.worker1.position.set(-1.8, 0, 1.2);

    this.worker2 = createWorkerFigure(0xF97316); // Orange vest
    this.worker2.position.set(1.6, 0, 1.0);

    this.workersGroup.add(this.worker1, this.worker2);
    this.group.add(this.workersGroup);

    // 3. Debris Pile (Malwa)
    this.debris = createDebrisPile();
    this.debris.position.set(0, 0, 1.2);
    this.group.add(this.debris);

    // 4. Stacking Area (for Maal Unloading Section B)
    this.stackGroup = new THREE.Group();
    this.stackGroup.position.set(2.8, 0, -0.5);
    this.stackGroup.visible = false;

    // Neat stacks of cement bags & bricks
    for (let i = 0; i < 4; i++) {
      const bag = createCementBagMesh();
      bag.scale.set(0.85, 0.85, 0.85);
      bag.position.set(0, i * 0.32, 0);
      this.stackGroup.add(bag);
    }

    for (let b = 0; b < 6; b++) {
      const br = createBrickMesh();
      br.position.set(1.4 + (b % 2) * 0.5, 0.15 + Math.floor(b / 2) * 0.25, 0);
      this.stackGroup.add(br);
    }

    this.group.add(this.stackGroup);
  }

  setupScrollTriggers() {
    const malwaSec = document.getElementById('service-malwa-sec');
    const unloadSec = document.getElementById('service-unload-sec');

    // 1. Truck Drives in and debris gets loaded (Malwa Uthana)
    if (malwaSec) {
      const st1 = ScrollTrigger.create({
        trigger: malwaSec,
        start: 'top center',
        end: 'bottom center',
        scrub: 1.0,
        onUpdate: (self) => {
          const p = self.progress;
          // Truck drives in from left to center
          this.truck.position.x = -8 + p * 8;

          // Workers bob up and down simulating loading work
          this.worker1.position.y = Math.sin(p * 20) * 0.1;
          this.worker2.position.y = Math.cos(p * 20) * 0.1;

          // Debris pile shrinks as it gets loaded into truck
          const debrisScale = Math.max(0.01, 1 - p * 1.1);
          this.debris.scale.set(debrisScale, debrisScale, debrisScale);

          // Camera pans with action
          this.camera.position.x = (p - 0.5) * 2;
          this.camera.lookAt(this.truck.position.x * 0.5, 1.2, 0);
        }
      });
      this.scrollTriggers.push(st1);
    }

    // 2. Truck Bed Tips and Unloading to Organized Stacks (Maal Unloading)
    if (unloadSec) {
      const st2 = ScrollTrigger.create({
        trigger: unloadSec,
        start: 'top center',
        end: 'bottom center',
        scrub: 1.0,
        onEnter: () => {
          this.stackGroup.visible = true;
          this.debris.visible = false;
        },
        onLeaveBack: () => {
          this.stackGroup.visible = false;
          this.debris.visible = true;
        },
        onUpdate: (self) => {
          const p = self.progress;
          const tipperBed = this.truck.getObjectByName('tipperBed');
          if (tipperBed) {
            // Tipper bed tilts up for unloading
            tipperBed.rotation.x = Math.min(0.55, p * 0.7);
          }

          // Unloaded stack rises neatly
          this.stackGroup.scale.set(
            Math.min(1, 0.2 + p * 0.8),
            Math.min(1, 0.2 + p * 0.8),
            Math.min(1, 0.2 + p * 0.8)
          );

          // Truck moves forward slightly
          this.truck.position.x = 0 + p * 2.5;
        }
      });
      this.scrollTriggers.push(st2);
    }
  }

  update(delta, time, pointer) {
    // Parallax on camera
    if (this.camera) {
      this.camera.position.y = 3.5 + pointer.y * 0.4;
    }
  }

  dispose() {
    this.scrollTriggers.forEach(st => st.kill());
    this.scrollTriggers = [];

    if (this.scene && this.group) {
      this.scene.remove(this.group);
    }
  }
}
